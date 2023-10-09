# Scryfall API types

This library documents the definitive comprehensive typings of the Scryfall API for use in Typescript & Javascript projects.

This library uses [semver] for versioning. These versions only describe this library, not the Scryfall API as a whole.

[semver]: https://semver.org/

## Details

All exported types are prefixed with `Scryfall`, so that we can declare e.g. `ScryfallSet`, `ScryfallObject`, and `ScryfallError` without clashing with the built-in `Set`, `Object`, and `Error` types.

Enum fields are always defined in two ways: as the Enum, and as an Enum-like string. This permits you to interact with this system using our enums, just strings, or your own enums—whatever you'd prefer.

## Using this as a dependency for your library

There's essentially three ways you might use this project:

- Your own independent project that nobody will be installing as a dependency.
- Your own library that requires this as a dependency, and which others will install.

In the first case, install this as a dependency or a dev dependency.

In the second case, consider whether you are forwarding Scryfall types on to consumers of your library.

- Are you converting our data to your own system of types, and supplying those to consumers? (e.g. you're writing a Scryfall API that has its own rigorous way of describing cards)
- Are you supplying these objects as-is to consumers? (e.g. you're writing a Scryfall API that just fetches cards and returns them as-is using our typing)

In the first of these cases, we advise you install this as a dev dependency.

In the second case however, we advise you require a given major version of this library **as a peer dependency, not a dependency**, so that consumers of your library can continue to update their reference to the Scryfall API without requiring you to do so as well, as follows:

```js
// in package.json
{
  name: "mylibrary",
  peerDependencies: {
    // The major version others should use.
    "@scryfall/api-types": "1.x",
  },
  devDependencies: {
    // The version you use for your work.
    "@scryfall/api-types": "1.2.3",
  }
}
```
