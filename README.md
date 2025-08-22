# Scryfall API types

This library documents the definitive comprehensive typings of [the Scryfall API][api] for use in Typescript & Javascript projects.

This library uses [semver] for versioning. These versions only describe this library, not the Scryfall API as a whole.

## Installation

```bash
npm install @scryfall/api-types
```

## Examples

### Fetching a card

```ts
// CommonJS module syntax
const { ScryfallCard } = require("@scryfall/api-types");

// ES module syntax
import { ScryfallCard } from "@scryfall/api-types";

// Fetch a card
const response = await fetch("https://api.scryfall.com/cards/iko/275");
const godzilla: ScryfallCard.Any = await response.json();
```

### Fetching the list of sets

```ts
// CommonJS module syntax
const { ScryfallList } = require("@scryfall/api-types");

// ES module syntax
import { ScryfallList } from "@scryfall/api-types";

// Fetch the list of all setss
const response = await fetch("https://api.scryfall.com/sets");
const sets: ScryfallList.Sets = await response.json();
```

### Type narrowing on a card

```ts
import { ScryfallCard, ScryfallLayout } from "@scryfall/api-types";

// This card might be of any type.
// You cannot access `mysteryCard.card_faces`, because it might not have that property.
const mysteryCard: ScryfallCard.Any = getCard();

// You can narrow by layout:
if (mysteryCard.layout === ScryfallLayout.Transform) {
  // It's a transforming DFC!
  // You can access transform-specific fields in this scope, or assign it to a variable.
  const faces = anyCard.card_faces;
  const transform: ScryfallCard.Transform = mysteryCard;
}

// You can also narrow by property:
if ("card_faces" in anyCard) {
  // It's *some* kind of multi-faced card.
  // You can now access the card_faces property.
  // You'll need to do some further type narrowing to know more about what's in the card.
  const faces = anyCard.card_faces;
  const multifaced: ScryfallCard.AnyMultiFaced = anyCard;
} else {
  const sfc: ScryfallCard.AnySingleFaced = anyCard;
}
```

## Usage

Each type and enum exported by this library corresponds to a Scryfall API object and its values.

Points of interest:

- [ScryfallCard](src/objects/Card/Card.ts) describes [Cards](https://scryfall.com/docs/api/cards) and their faces. Each individual card layout is managed via type narrowing on the `layout` field.
- [ScryfallCatalog](src/objects/Catalog/Catalog.ts) describes [the catalogs](https://scryfall.com/docs/api/catalogs).
- [ScryfallError](src/objects/Error/Error.ts) describes [error responses](https://scryfall.com/docs/api/errors).
- [ScryfallList](src/objects/List/List.ts) describes [lists](https://scryfall.com/docs/api/lists), and provides shortcuts to describe the common types of lists.
- [ScryfallMigration](src/objects/Migration/Migration.ts) describes [migrations](https://scryfall.com/docs/api/migrations).
- [ScryfallSet](src/objects/Set/Set.ts) describes [card sets](https://scryfall.com/docs/api/sets).

If the API provides an object, this library provides it as well. (If it doesn't, please [tell us][issues]!)

All primary types and values are prefixed with `Scryfall` to avoid conflict with the standard library (e.g. `Object`, `Error`, `Set`) and to minimise conflict with your other libraries and dependencies (e.g. `Color`, `LanguageCode`). If we didn't have the prefix you'd be forced to append one yourself one on import, so we've defaulted to including it.

Enum fields are described both in terms of an enum and a set of strings in order to give you the option of interacting with that field with either one.

In order to use the provided enum values in runtime code (i.e. outside of just compile-time type checking), you may need to configure your project's build pipeline/module bundler to ensure it is transpiling the Typescript source code in the `@scryfall/api-types` package. Many module bundlers exclude `node_modules` from Typescript transpilation for performance reasons, but provide methods to force inclusion of specific paths (e.g. Webpack's `module.rules`, or Next.js's `transpilePackages` configurations).

[semver]: https://semver.org/
[api]: https://scryfall.com/docs/api
[issues]: https://github.com/scryfall/api-types/issues
