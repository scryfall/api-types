import { ScryfallObject } from "../Object";
import { IsoDate, Uuid } from "../../internal/values";

export type ScryfallRuling = ScryfallObject.Object<ScryfallObject.ObjectType.Ruling> & {
  /**
   * The Oracle ID of the card this ruling is associated with.
   */
  oracle_id: Uuid;
  /**
   * A computer-readable string indicating which company produced this ruling, either `wotc` or `scryfall`
   */
  source: string;
  /**
   * The date when the ruling or note was published
   */
  published_at: IsoDate;
  /**
   * The text of the ruling
   */
  comment: string;
};
