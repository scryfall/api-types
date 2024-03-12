import { ScryfallObject } from "../Object";
import { Uri, Integer } from "../../internal";

/**
 * A catalog of values.
 *
 * @see {@link https://scryfall.com/docs/api/catalogs}
 */
export type ScryfallCatalog = ScryfallObject.Object<ScryfallObject.ObjectType.Catalog> & {
  /**
   * A link to the current catalog on Scryfall’s API
   */
  uri: Uri;
  /**
   * The number of items in the `data` array
   */
  total_values: Integer;
  /**
   * An array of datapoints, as strings
   */
  data: string[];
};
