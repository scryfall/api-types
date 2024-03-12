import { ScryfallObject } from "../Object";

/**
 * A catalog of values.
 *
 * @see {@link https://scryfall.com/docs/api/catalogs}
 */
export type ScryfallCatalog = ScryfallObject.Object<ScryfallObject.ObjectType.Catalog> & {
  /**
   * A link to the current catalog on Scryfall’s API
   *
   * @type URI
   */
  uri: string;
  /**
   * The number of items in the `data` array
   *
   * @type Integer
   */
  total_values: number;
  /**
   * An array of datapoints, as strings
   */
  data: string[];
};
