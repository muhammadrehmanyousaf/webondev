## TypeScript Best Practices and Advanced Patterns

TypeScript moves fast. Since the 5.0 release the language has shipped first-class decorators, `const` type parameters, the `using` resource-management syntax, the `NoInfer` utility type, and `isolatedDeclarations` for parallel `.d.ts` emit. If your patterns are still anchored to an older mental model, you are leaving both safety and ergonomics on the table.

This guide is a practical, current reference for writing TypeScript well: how to configure a project, which typing patterns earn their keep, how narrowing actually works, and which modern features are worth adopting today. Every feature mentioned below is checked against the official TypeScript handbook and release notes.

### Start With a Strict tsconfig

Most TypeScript pain comes from a permissive configuration that lets unsafe code compile. Turn the safety on at the project level so individual files do not have to opt in.

```jsonc
{
  "compilerOptions": {
    "target": "es2022",
    "module": "preserve",
    "moduleResolution": "bundler",
    "verbatimModuleSyntax": true,

    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitOverride": true,
    "noFallthroughCasesInSwitch": true,

    "skipLibCheck": true,
    "esModuleInterop": true,
    "lib": ["es2022", "dom", "dom.iterable"]
  }
}
```

A few flags deserve specific attention:

- **`strict`** is an umbrella that enables `noImplicitAny`, `strictNullChecks`, `strictFunctionTypes`, `strictBindCallApply`, and more. Always start here. It is not negotiable for new projects.
- **`noUncheckedIndexedAccess`** makes indexed access (`arr[i]`, `record[key]`) return `T | undefined`. This is the single highest-value flag not included in `strict`, because it forces you to handle the "missing element" case that causes most runtime `undefined` errors.
- **`exactOptionalPropertyTypes`** distinguishes a property that is absent from one explicitly set to `undefined` — a real semantic difference when you serialize or diff objects.
- **`moduleResolution: "bundler"`** (added in 5.0) matches how Vite, esbuild, and swc actually resolve modules, and `verbatimModuleSyntax` (also 5.0) gives predictable import elision: anything without a `type` modifier is emitted, `type` imports are dropped.

If you publish a library, also consider **`isolatedDeclarations`** (stabilized through 5.5–5.8). It requires explicit return and export types, which lets tools like oxc and Rolldown emit `.d.ts` files in parallel without running the type checker.

### Core Typing Patterns

#### Prefer unions over enums

Union string literals are simpler, fully erasable, and play nicely with narrowing. They avoid the runtime object and the inverse-mapping surprises that numeric enums introduce.

```ts
type Status = "idle" | "loading" | "success" | "error";

// vs. enum Status { Idle, Loading, ... } — usually unnecessary
```

#### Generics that stay generic

A good generic preserves the caller's type instead of widening it. Constrain type parameters with `extends` to express intent, and let inference do the rest.

```ts
function first<T>(items: readonly T[]): T | undefined {
  return items[0];
}

function pluck<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

#### Use utility types instead of restating shapes

The built-in utility types keep derived types in sync with their source. Reach for `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record`, `Awaited`, `ReturnType`, and `Parameters` before writing a type by hand.

```ts
interface User {
  id: string;
  name: string;
  email: string;
}

type UserUpdate = Partial<Omit<User, "id">>;
type UsersById = Record<string, User>;
type FetchedUser = Awaited<ReturnType<typeof fetchUser>>;
```

#### `satisfies` — validate without widening

`satisfies` (TypeScript 4.9) checks a value against a type while keeping the value's precise inferred type. Use it instead of a type annotation when you want both the check and the narrow literal types.

```ts
const palette = {
  primary: "#2563eb",
  danger: "#dc2626",
} satisfies Record<string, `#${string}`>;

// palette.primary is the literal "#2563eb", not just string,
// yet the object is verified to match the Record shape.
```

#### `const` type parameters — preserve literals at call sites

A `const` modifier on a type parameter (TypeScript 5.0) infers as if the caller wrote `as const`, so you keep tuples and literal unions without making every caller add the annotation.

```ts
function route<const T extends readonly string[]>(segments: T): T {
  return segments;
}

const r = route(["users", ":id", "edit"]);
// r: readonly ["users", ":id", "edit"]  — not string[]
```

### Type Narrowing

TypeScript narrows a value's type as control flow proves facts about it. Lean on these built-in narrowing forms rather than casting:

- **`typeof`** for primitives: `typeof x === "string"`.
- **`instanceof`** for class instances.
- **`in`** for property presence: `"role" in user`.
- **Truthiness and equality** checks, including `=== null` / `!== undefined`.
- **Custom type predicates** with `param is Type` for reusable, named narrowing.

```ts
function isUser(value: unknown): value is User {
  return typeof value === "object"
    && value !== null
    && "id" in value;
}
```

As of TypeScript 5.4, narrowing is also **preserved inside closures** after the last assignment, which removes a long-standing class of false "possibly undefined" errors.

### Avoiding `any`: Reach for `unknown`

`any` switches off type checking entirely and silently spreads through your code — one `any` returned from a function poisons every value derived from it. `unknown` is the safe top type: you can assign anything to it, but you must narrow before you use it.

```ts
// Don't: any disables checking everywhere it flows
function parse(json: string): any { return JSON.parse(json); }

// Do: force the caller to validate
function parse(json: string): unknown { return JSON.parse(json); }

const data = parse(input);
if (isUser(data)) {
  data.email; // safe — narrowed to User
}
```

For external data (HTTP responses, `localStorage`, message payloads), type the boundary as `unknown` and validate with a predicate or a schema library before trusting it.

### Discriminated Unions

Discriminated (tagged) unions are the workhorse pattern for modelling state that can be in one of several shapes. Give every member a shared literal "tag" field, and TypeScript narrows the whole object when you `switch` on it.

```ts
type Result<T> =
  | { status: "success"; data: T }
  | { status: "error"; error: Error }
  | { status: "loading" };

function render<T>(r: Result<T>): string {
  switch (r.status) {
    case "success": return `Got ${r.data}`;
    case "error":   return r.error.message;
    case "loading": return "…";
    default:
      // exhaustiveness: a new variant becomes a compile error here
      return assertNever(r);
  }
}

function assertNever(value: never): never {
  throw new Error(`Unhandled variant: ${JSON.stringify(value)}`);
}
```

The `assertNever` trick is the key benefit: add a fourth variant to `Result` and the `default` branch fails to compile until you handle it. This turns "I forgot a case" from a runtime bug into a build error.

### Modern Features Worth Adopting

#### `using` and `Symbol.dispose` (TypeScript 5.2)

Explicit resource management brings deterministic cleanup to TypeScript. A `using` declaration calls the value's `[Symbol.dispose]()` method automatically at the end of the enclosing scope — including on early `return` or `throw` — in last-in-first-out order.

```ts
class FileHandle implements Disposable {
  constructor(private handle: number) {}
  [Symbol.dispose]() {
    closeSync(this.handle);
  }
}

function read() {
  using file = new FileHandle(openSync("data.txt", "r"));
  // …work with file…
}   // file is disposed here, even if an error is thrown
```

For asynchronous teardown, implement `[Symbol.asyncDispose]()` and use `await using`. Requires targeting a runtime with the disposable symbols, or polyfilling them and adding `"esnext.disposable"` to `lib`. This is ideal for file handles, DB connections, locks, and spans.

#### `NoInfer<T>` (TypeScript 5.4)

`NoInfer` tells the compiler to skip a position when collecting inference candidates, so one argument can drive inference while another is merely checked against it.

```ts
function createPicker<T extends string>(
  options: T[],
  fallback: NoInfer<T>,
): T { /* … */ }

createPicker(["a", "b"], "a"); // ok
createPicker(["a", "b"], "z"); // error — "z" is not in the union
```

Without `NoInfer`, `fallback` would widen the inferred `T` and the invalid value would slip through.

### Typing APIs and Async Code

Async functions always return a `Promise`. Annotate the resolved type and let TypeScript wrap it; use `Awaited<T>` when you need to unwrap a promise type elsewhere.

```ts
async function fetchUser(id: string): Promise<User> {
  const res = await fetch(`/api/users/${id}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const body: unknown = await res.json();   // never trust the wire
  if (!isUser(body)) throw new Error("Malformed user payload");
  return body;
}
```

Practical rules for API boundaries:

- Type every fetch/parse result as `unknown` and validate before use — TypeScript types vanish at runtime and cannot guarantee the server's shape.
- In `catch (e)`, `e` is `unknown`. Narrow it (`e instanceof Error`) before reading `.message`.
- Model fallible operations with a `Result` union rather than relying on thrown exceptions when callers must handle failure explicitly.
- Generate types from your source of truth (OpenAPI, GraphQL, a Zod schema) instead of hand-writing request and response interfaces that drift.

### Pragmatic Do / Don't

| Do | Don't |
| --- | --- |
| Enable `strict` plus `noUncheckedIndexedAccess` | Sprinkle `// @ts-ignore` to silence errors (use `@ts-expect-error` if you must) |
| Type external data as `unknown` and validate | Default to `any` for "I'll fix it later" |
| Use discriminated unions with `assertNever` | Chain `if/else` on loosely typed flags |
| Prefer `satisfies` for config objects | Annotate and lose literal types |
| Let inference work; annotate boundaries | Annotate every local variable redundantly |
| Use `unknown` in `catch` and narrow | Assume `catch (e)` is an `Error` |
| Reach for utility types (`Pick`, `Omit`, `Awaited`) | Re-declare derived shapes by hand |
| Cast only at trusted boundaries | Use `as` to force unrelated types together |

### Wrapping Up

Modern TypeScript rewards a simple discipline: configure strictly, type your boundaries with `unknown`, model state with discriminated unions, and let inference carry the interior. The newer tools — `satisfies`, `const` type parameters, `using`, and `NoInfer` — are not novelties; each removes a specific category of bug or boilerplate. Adopt them where they fit, keep `any` out of your codebase, and treat the compiler as the cheapest tester you have.

Pin your toolchain to a recent 5.x (or 6.0) release, turn the flags up, and let the type system do the work it is designed for.
