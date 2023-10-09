import { ScryfallObject } from "../../ScryfallObject";
import { Uri, Integer } from "../../internal/values";

export type ScryfallCatalog = ScryfallObject.Object<ScryfallObject.ObjectType.Catalog> & {
  /** A link to the current catalog on Scryfall’s API */
  uri: Uri;
  /** The number of items in the `data` array */
  total_values: Integer;
  /** An array of datapoints, as strings */
  data: string[];
};
