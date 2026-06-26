## Modern JavaScript in 2026: The ES2024 and ES2025 Features Worth Using

JavaScript no longer ships features in big, infrequent dumps. Since ES2015, the language follows a yearly release cadence: any proposal that reaches Stage 4 by the spec's cut-off rolls into that year's edition. Two editions matter most for the code you write today — **ES2024** (the 15th edition) and **ES2025** (the 16th edition, finalized in June 2025).

This is a refresh of our original ES2024 roundup. The headline change since then is ES2025, which finally landed several features the community had been asking for over a decade: iterator helpers, Set operations, `Promise.try`, and `RegExp.escape`. Below are the features actually worth reaching for, grouped by edition, with examples and guidance on when each one earns its place.

> A quick note on accuracy: an edition's "year" is the year the spec is finalized, not the year browsers ship it. Engines typically implement Stage 3 proposals well before ratification, so most of what follows already runs in current Node, Deno, Bun, and evergreen browsers. The support table at the end gives specifics.

## ES2024: The Practical Wins

### Object.groupBy and Map.groupBy

Grouping a list by some key is one of the most common data tasks in any app, and for years it meant a hand-rolled `reduce`. ES2024 standardizes it.

```js
const products = [
  { name: "Keyboard", category: "hardware" },
  { name: "License", category: "software" },
  { name: "Mouse", category: "hardware" },
];

const byCategory = Object.groupBy(products, (p) => p.category);
// {
//   hardware: [{ name: "Keyboard", ... }, { name: "Mouse", ... }],
//   software: [{ name: "License", ... }]
// }
```

`Object.groupBy` returns a `null`-prototype object, so there's no risk of a `__proto__` collision. Use `Map.groupBy` instead when your keys are objects or non-string values, since a `Map` preserves key identity and insertion order.

**When to use it:** any time you'd otherwise write `arr.reduce((acc, x) => …)` purely to bucket items.

### Promise.withResolvers

Normally you create a promise and resolve it inside the executor. `Promise.withResolvers()` hands you the promise and its `resolve`/`reject` functions as plain values, so you can settle it from anywhere.

```js
const { promise, resolve, reject } = Promise.withResolvers();

socket.addEventListener("message", (e) => resolve(e.data));
socket.addEventListener("error", reject);

const firstMessage = await promise;
```

**When to use it:** event-driven code where the thing that resolves the promise lives outside the function that created it — sockets, custom event emitters, or queue/deferred patterns. It replaces the old "leak the resolver out of the executor" hack.

### Array.fromAsync

`Array.from` works on sync iterables. `Array.fromAsync` is its async counterpart: it walks an async iterable (or a sync iterable of promises) and resolves each value, returning a single promise for the finished array.

```js
async function* readLines(stream) {
  for await (const chunk of stream) yield chunk.trim();
}

const lines = await Array.fromAsync(readLines(fileStream));
```

**When to use it:** collecting a stream or async generator into an array in one line, instead of a `for await…of` loop that pushes into an accumulator. Remember it buffers everything in memory — don't use it on unbounded streams.

### Resizable and Transferable ArrayBuffers

ES2024 added `ArrayBuffer.prototype.transfer()` and resizable buffers. `transfer()` moves ownership of the underlying memory to a new buffer and detaches the original — no byte-by-byte copy.

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
buffer.resize(16);              // grow in place

const moved = buffer.transfer(); // buffer is now detached
console.log(buffer.detached);    // true
```

**When to use it:** lower-level code working with binary data, WebAssembly memory, or `postMessage` transfers where copying large buffers is a measurable cost. Most application code never touches this.

### Well-formed Unicode Strings

`String.prototype.isWellFormed()` and `toWellFormed()` detect and repair lone surrogates — half of a surrogate pair with no partner. These break APIs like `encodeURIComponent` and `fetch` bodies.

```js
const bad = "https://example.com/\uD800";
bad.isWellFormed();  // false
bad.toWellFormed();  // replaces the lone surrogate with U+FFFD
```

**When to use it:** validating user-supplied text before passing it to APIs that reject malformed UTF-16, instead of wrapping `encodeURIComponent` in a try/catch.

## ES2025: The Long-Awaited Additions

ES2025 is the more exciting edition for everyday code. These are features developers have wanted for years.

### Iterator Helpers

This is the standout. Iterators now have lazy, chainable methods — `map`, `filter`, `take`, `drop`, `flatMap`, `reduce`, `toArray`, and more — that work directly on any iterator without first materializing an array.

```js
function* naturals() {
  let n = 1;
  while (true) yield n++;
}

const firstFiveSquares = naturals()
  .map((n) => n * n)
  .take(5)
  .toArray();
// [1, 4, 9, 16, 25]
```

The key difference from array methods is laziness. `Array.prototype.map().filter()` allocates a new intermediate array at every stage. Iterator helpers process one element at a time and only produce a result when a terminal operation (`toArray`, `reduce`, `forEach`) runs — which is what makes the infinite generator above safe.

**When to use it:** large or infinite sequences, generators, and any pipeline where intermediate arrays would waste memory. For small, already-materialized arrays, plain array methods are still simpler.

### New Set Methods

`Set.prototype` finally gets the mathematical operations that previously meant manual loops or a library: `union`, `intersection`, `difference`, `symmetricDifference`, plus the predicates `isSubsetOf`, `isSupersetOf`, and `isDisjointFrom`.

```js
const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);

a.union(b);              // Set { 1, 2, 3, 4 }
a.intersection(b);       // Set { 2, 3 }
a.difference(b);         // Set { 1 }
a.symmetricDifference(b); // Set { 1, 4 }
a.isSubsetOf(b);         // false
```

**When to use it:** permission checks, tag/category comparisons, deduplicated set algebra — anywhere you currently spread sets into arrays and filter.

### Promise.try

`Promise.try(fn)` runs `fn` immediately and returns a promise, wrapping a synchronous throw in a rejected promise and a normal return in a resolved one. It unifies sync and async error handling into one `.catch()`.

```js
function getConfig() {
  if (!process.env.API_KEY) throw new Error("missing key"); // sync throw
  return fetch("/config");                                  // async
}

Promise.try(getConfig)
  .then((res) => res.json())
  .catch((err) => console.error("handled both paths:", err));
```

**When to use it:** calling a function that might throw synchronously *or* reject asynchronously, so you don't need both a try/catch and a `.catch()`.

### RegExp.escape

A static method that escapes a string so it can be safely embedded in a regular expression. This closes a genuine security gap — building regexes from user input without it invites injection and ReDoS bugs.

```js
const userInput = "1 + 1 = 2 (really?)";
const pattern = new RegExp(RegExp.escape(userInput));
pattern.test("1 + 1 = 2 (really?)"); // true — special chars are literal
```

**When to use it:** any time user-controlled text becomes part of a regex. Stop copying that `replace(/[.*+?^${}()|[\]\\]/g, …)` snippet from Stack Overflow.

### RegExp Pattern Modifiers and Duplicate Named Groups

Two smaller regex upgrades. Inline modifiers let you turn flags like `i`, `s`, and `m` on or off for part of a pattern using `(?flags:…)` and `(?-flags:…)`:

```js
// case-insensitive only for "hello"
const re = /(?i:hello) WORLD/;
re.test("HELLO WORLD"); // true
re.test("HELLO world"); // false
```

And you can now reuse the same capture-group name across different alternation branches, which used to be a syntax error:

```js
const date = /(?<year>\d{4})-\d{2}|\d{2}\/(?<year>\d{4})/;
```

### Import Attributes and JSON Modules

ES2025 standardizes the `with` syntax for declaring a module's type, enabling native JSON imports without a bundler plugin:

```js
import config from "./config.json" with { type: "json" };
```

**When to use it:** importing JSON (and, where the host supports it, CSS) directly in environments that implement it. Note the `with` keyword replaced the earlier `assert` syntax — update any old `assert { type: "json" }` imports.

### Float16Array

A new typed array for 16-bit half-precision floats, paired with `Math.f16round` and DataView's `getFloat16`/`setFloat16`. It halves memory versus `Float32Array`.

**When to use it:** GPU/WebGPU workloads, ML inference, and graphics where bandwidth matters more than precision. Niche for most apps, essential for those that need it.

## What About Temporal?

The `Temporal` API — the modern replacement for the broken `Date` object — is the most anticipated proposal in JavaScript, but **it is not part of ES2024 or ES2025**. It remains a Stage 3 proposal that engines are shipping incrementally (Firefox has it behind/now on by default in recent versions; other engines are mid-rollout). Treat it as "coming soon, not standardized yet" and continue to reach for a date library in production until support is broad.

## Browser and Runtime Support

Most of these features are already usable in current evergreen environments as of 2026. Always confirm against MDN's Baseline data or caniuse for your specific target matrix.

| Feature | Edition | Chrome/Edge | Firefox | Safari | Node.js |
|---|---|---|---|---|---|
| Object.groupBy / Map.groupBy | ES2024 | 117 | 119 | 17.4 | 21+ |
| Promise.withResolvers | ES2024 | 119 | 121 | 17.4 | 22+ |
| Array.fromAsync | ES2024 | 121 | 115 | 16.4 | 22+ |
| ArrayBuffer transfer/resize | ES2024 | 114 | 127 | 16.4 | 22+ |
| String isWellFormed/toWellFormed | ES2024 | 111 | 119 | 16.4 | 20+ |
| Iterator helpers | ES2025 | 122 | 131 | 18.4 | 22+ |
| Set methods (union, etc.) | ES2025 | 122 | 127 | 17 | 22+ |
| Promise.try | ES2025 | 128 | 134 | 18.2 | 23+ |
| RegExp.escape | ES2025 | 136 | 134 | 18.4 | 24+ |
| JSON modules (`with`) | ES2025 | 123 | Partial | 17.2 | 22+ |
| Float16Array | ES2025 | 135 | 133 | 18.2 | 24+ |

Version numbers are approximate first-stable releases; behind older targets, transpile with Babel/SWC or pull in `core-js` polyfills (available for `groupBy`, iterator helpers, Set methods, and `Promise.try`). Engine-level features like resizable `ArrayBuffer` can't be polyfilled and require a real runtime upgrade.

## Takeaways

- **Reach for now in app code:** `Object.groupBy`, `Promise.withResolvers`, iterator helpers, Set methods, `Promise.try`, and `RegExp.escape` — they replace boilerplate and remove dependencies.
- **Know they exist for lower-level work:** resizable/transferable `ArrayBuffer`, `Float16Array`, well-formed Unicode helpers.
- **Don't ship in production yet:** `Temporal` — it's Stage 3, not in any finalized edition.

The yearly cadence means JavaScript improves in small, reliable increments. Keep `core-js` configured for the targets you support, lean on Baseline data before adopting, and these features will quietly make your code shorter and safer.
