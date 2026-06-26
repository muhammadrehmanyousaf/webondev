## CSS Layout in 2026: Grid and Flexbox, Done Right

For years, "responsive layout" meant stacking media queries until something looked acceptable. That era is over. Modern CSS gives you two complementary layout engines — Flexbox and Grid — plus intrinsic sizing, `clamp()`, container queries, and `:has()`. Used together, they let you build layouts that adapt to their content and their context with almost no breakpoints.

This guide is a practical refresh: when to reach for each tool, the core syntax that matters, and the layout patterns you'll actually ship.

## Flexbox vs Grid: One Dimension or Two

The single most useful mental model is dimensionality.

- **Flexbox is one-dimensional.** It lays content out in a single row *or* a single column, and items can wrap to new lines. You hand control to the content — items grow and shrink based on their own size.
- **Grid is two-dimensional.** It controls rows *and* columns at the same time. You define the structure up front, then place items into it.

A quick heuristic: if you're aligning a handful of items along one axis (a navbar, a button row, a tag list), use Flexbox. If you're defining a page or component skeleton with distinct regions, use Grid.

### Decision Table

| Question | Flexbox | Grid |
|---|---|---|
| Layout direction | One axis (row or column) | Two axes (rows and columns) |
| Driven by | Content size | Defined structure |
| Best for | Toolbars, nav, button groups, centering | Page skeletons, dashboards, card grids |
| Wrapping behavior | `flex-wrap`, items flow and reflow | Explicit tracks, `auto-fit`/`auto-fill` |
| Gaps between items | `gap` supported | `gap` supported |
| Overlapping items | Awkward | Native (place items in same cell) |
| Named regions | No | Yes (`grid-template-areas`) |
| Typical use | Components | Layouts |

They aren't rivals. Most real interfaces are Grid for the macro layout with Flexbox inside individual cells.

## Core Flexbox

A flex container is created with `display: flex`. The container has a **main axis** (set by `flex-direction`) and a **cross axis** perpendicular to it.

```css
.toolbar {
  display: flex;
  align-items: center;      /* cross-axis alignment */
  justify-content: space-between; /* main-axis distribution */
  gap: 1rem;                /* modern spacing — no margin hacks */
  flex-wrap: wrap;          /* allow items onto new lines */
}
```

The real power is in the `flex` shorthand on the children:

```css
.flexible {
  flex: 1 1 0;   /* grow shrink basis */
}
```

- **`flex-grow`** — how much an item expands to fill free space.
- **`flex-shrink`** — how much it shrinks when space is tight.
- **`flex-basis`** — the starting size before growing or shrinking.

A common, genuinely useful pattern is the "sidebar that gives way to content":

```css
.layout {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}
.sidebar {
  flex: 1 1 16rem;   /* grows but prefers ~16rem */
}
.content {
  flex: 999 1 60%;   /* takes almost all extra space */
}
```

When the viewport is wide there's room for both side by side; when it narrows, the items wrap — no media query required.

## Core Grid

Declare a grid with `display: grid` and define the tracks.

```css
.dashboard {
  display: grid;
  grid-template-columns: 200px 1fr 2fr;
  gap: 1rem;
}
```

The **`fr` unit** distributes leftover space proportionally. Above, the second and third columns split remaining space 1:2 after the fixed 200px column.

Use **`repeat()`** to avoid writing the same track over and over:

```css
grid-template-columns: repeat(4, 1fr);
/* equivalent to: 1fr 1fr 1fr 1fr */
```

### Template Areas

`grid-template-areas` lets you draw the layout in ASCII, right in the CSS. It's self-documenting and easy to rearrange.

```css
.page {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
}
header { grid-area: header; }
.sidebar { grid-area: sidebar; }
main { grid-area: main; }
footer { grid-area: footer; }
```

To change the layout at a breakpoint, you only redefine the areas string — the elements don't move in the markup.

### auto-fit, auto-fill, and minmax()

This combination is the workhorse of responsive grids. `minmax(min, max)` sets a track's lower and upper bound; `repeat()` with `auto-fit` or `auto-fill` decides how many tracks fit.

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}
```

Cards are at least 220px wide; as many columns as fit are created; leftover space is shared via `1fr`. No breakpoints at all.

The `auto-fit` vs `auto-fill` distinction matters:

- **`auto-fill`** keeps empty tracks if there's room for them — items stay their minimum size and gaps appear on the right.
- **`auto-fit`** collapses empty tracks to zero, so existing items stretch to fill the row.

Tip: pair this with `minmax(0, 1fr)` for child tracks when content (like long words or images) refuses to shrink. The default minimum is `auto`, which can blow out a track; `min` of `0` lets it shrink properly.

### Subgrid

Nested grids historically couldn't align to their parent's tracks. **Subgrid** fixes that by letting a child grid adopt the parent's rows and/or columns. It's Baseline (widely available across modern browsers since 2023).

The classic case: a card grid where every card's header, body, and footer line up across the row regardless of content length.

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}
.card {
  display: grid;
  grid-template-rows: subgrid;  /* inherit the row tracks */
  grid-row: span 3;             /* span header/body/footer rows */
  gap: 0.5rem;
}
```

Because the rows come from the parent, the titles align, the bodies align, and the footers align — across the whole row.

### Intrinsic Sizing

Grid (and `width`/`height`) understand content-based keywords:

- **`min-content`** — the smallest a track can be without overflowing (often the longest word).
- **`max-content`** — large enough to hold the content on one line.
- **`fit-content(limit)`** — behaves like `max-content` until it hits the limit, then wraps.

```css
.detail {
  display: grid;
  grid-template-columns: max-content 1fr;  /* label column hugs its text */
  gap: 0.5rem 1rem;
}
```

This is how you get a label column that's exactly as wide as the longest label, with no magic numbers.

## Responsive Layout Without a Pile of Media Queries

Media queries respond to the *viewport*. Modern CSS lets you respond to *available space* and *content* instead — which is usually what you actually want.

### clamp(), min(), and max()

`clamp(MIN, PREFERRED, MAX)` gives you a fluid value bounded at both ends. It's perfect for type and spacing that scale smoothly with the viewport but never get absurd.

```css
h1 {
  font-size: clamp(1.75rem, 1rem + 3vw, 3rem);
}
.container {
  width: min(100% - 2rem, 65rem);  /* never wider than 65rem, with gutters */
  margin-inline: auto;
}
```

That `min()` trick replaces a `max-width` plus padding plus a media query with one line.

### Container Queries

The biggest shift in component design: query the **container**, not the viewport. A card placed in a narrow sidebar and the same card in a wide main column can lay themselves out differently — with identical markup.

You opt an element in as a query container with `container-type`, then write `@container` rules.

```css
.card-wrapper {
  container-type: inline-size;   /* enable width queries */
  container-name: card;          /* optional name */
}

.card {
  display: grid;
  gap: 1rem;
}

@container card (width > 28rem) {
  .card {
    grid-template-columns: 12rem 1fr;  /* go horizontal when there's room */
  }
}
```

Inside `@container` you can also use container-relative units — `cqi` (1% of container inline size), `cqw`, `cqh`, and so on — to size things against the container rather than the screen. Container queries are Baseline across modern browsers.

Rule of thumb: **media queries for page-level layout, container queries for reusable components.**

### :has() for Layout Logic

`:has()` is the long-awaited "parent selector." It styles an element based on what it contains or what follows it — enabling layout decisions in pure CSS that used to require JavaScript.

```css
/* A grid that switches to two columns only when a figure is present */
.article:has(figure) {
  grid-template-columns: 1fr 18rem;
}

/* Tighten heading spacing when a subheading immediately follows */
h2:has(+ p.subtitle) {
  margin-bottom: 0.25rem;
}

/* Adjust a form row when it contains an invalid field */
.field-row:has(:invalid) {
  border-inline-start: 3px solid crimson;
}
```

`:has()` is Baseline (widely available since late 2023). One performance note: keep the anchor tight. Prefer scoped selectors with `>` or `+` (e.g. `.panel:has(> .open)`) over broad ones like `body:has(...)`, which force the browser to evaluate large subtrees.

## Common Layout Patterns

### Holy Grail (Header, Footer, Three Columns)

Header on top, footer on the bottom, navigation and an aside flanking the main content, with the footer always at the bottom of the viewport even on short pages.

```css
.holy-grail {
  display: grid;
  min-height: 100svh;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 12rem 1fr 12rem;
  grid-template-areas:
    "header header header"
    "nav    main   aside"
    "footer footer footer";
  gap: 1rem;
}
header { grid-area: header; }
nav    { grid-area: nav; }
main   { grid-area: main; }
aside  { grid-area: aside; }
footer { grid-area: footer; }

@media (width < 48rem) {
  .holy-grail {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "nav"
      "main"
      "aside"
      "footer";
  }
}
```

The `1fr` middle row pushes the footer down; `100svh` uses the small viewport height unit so mobile browser chrome doesn't cause jumps.

### Responsive Card Grid

The canonical zero-breakpoint grid covered earlier — worth keeping in your back pocket:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  gap: 1.5rem;
}
```

The nested `min(100%, 18rem)` prevents a single card from overflowing on very narrow screens — the minimum track size never exceeds the container's own width.

### Collapsible Sidebar

A content area beside a fixed-width sidebar, gracefully stacking when space runs out. Flexbox handles this with no breakpoint:

```css
.with-sidebar {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}
.with-sidebar > .sidebar {
  flex: 1 1 15rem;     /* prefers 15rem, can grow */
}
.with-sidebar > .main {
  flex: 999 1 60%;     /* claims the remaining width */
  min-width: 60%;      /* forces a wrap below this threshold */
}
```

When `main` can no longer hold its 60% minimum alongside the sidebar, the items wrap and stack — content-driven responsiveness with no `@media` at all.

## Putting It Together

Modern CSS layout is about choosing the right tool and letting the browser do the math:

- **Grid** for structure, **Flexbox** for flow.
- **`auto-fit` + `minmax()`** for grids that respond to space, not breakpoints.
- **Subgrid** to align nested content to a shared track system.
- **`clamp()`, `min()`, `max()`** for fluid type and sizing.
- **Container queries** so components adapt to where they live.
- **`:has()`** for layout logic that used to need JavaScript.

Reach for media queries last — for genuine page-level shifts — rather than first. Lean on intrinsic sizing and these container-aware tools, and you'll write less CSS that does more, with layouts that hold up across every screen you didn't explicitly design for.
