import { ScryfallCatalog } from "src/objects";
import CatalogValidator from "src/validators/objects/Catalog/CatalogValidator";

const cardNamesRequest: Promise<ScryfallCatalog> = fetch("https://api.scryfall.com/catalog/card-names").then((resp) =>
  resp.json(),
);

describe("Catalog", () => {
  test("has expected fields", async () => {
    const cardNamesCatalog = await cardNamesRequest;
    const goodValidator = new CatalogValidator(cardNamesCatalog);

    expect(goodValidator.validKeys).toBe(true);
  });

  test("expected fields are expected type", async () => {
    const cardNamesCatalog = await cardNamesRequest;
    const validator = new CatalogValidator(cardNamesCatalog);
    expect(validator.validKeyType).toBe(true);
  });

  test("has no unexpected fields", async () => {
    const cardNamesCatalog = await cardNamesRequest;
    const mockKeyUpdates = { ...cardNamesCatalog, notAKey: true };
    const validator = new CatalogValidator(mockKeyUpdates);
    expect(validator.validKeys).toBe(false);
  });

  test("total_values matches data length", async () => {
    const cardNamesCatalog = await cardNamesRequest;
    const validator = new CatalogValidator(cardNamesCatalog);
    const dataLength = validator.validDataLength;
    expect(dataLength).toBe(true);
  });
});
