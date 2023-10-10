# Scryfall API types

This library documents the definitive comprehensive typings of [the Scryfall API][api] for use in Typescript & Javascript projects.

This library uses [semver] for versioning. These versions only describe this library, not the Scryfall API as a whole.

[semver]: https://semver.org/
[api]: https://scryfall.com/docs/api

## Usage

Each object or type exported by this library corresponds to a Scryfall API object.

-

## Details

All exported types are prefixed with `Scryfall`, so that we can declare e.g. `ScryfallSet`, `ScryfallObject`, and `ScryfallError` without clashing with the built-in `Set`, `Object`, and `Error` types.

Enum fields are always defined in two ways: as the Enum, and as an Enum-like string. This permits you to interact with this system using our enums, just strings, or your own enums—whatever you'd prefer.
