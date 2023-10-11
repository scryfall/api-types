# Scryfall API types

This library documents the definitive comprehensive typings of [the Scryfall API][api] for use in Typescript & Javascript projects.

This library uses [semver] for versioning. These versions only describe this library, not the Scryfall API as a whole.

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

[semver]: https://semver.org/
[api]: https://scryfall.com/docs/api
[issues]: https://github.com/scryfall/api-types/issues
