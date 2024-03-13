import { ScryfallObject } from "../Object";

/**
 * Rulings made on a card by the rules manager.
 *
 * @see {@link https://scryfall.com/docs/api/rulings}
 */
export type ScryfallRuling = ScryfallObject.Object<ScryfallObject.ObjectType.Ruling> & {
  /**
   * The Oracle ID of the card this ruling is associated with.
   *
   * @type UUID
   */
  oracle_id: string;
  /**
   * A computer-readable string indicating which company produced this ruling, either `wotc` or `scryfall`
   */
  source: "wotc" | "scryfall";
  /**
   * The date when the ruling or note was published
   *
   * @type IsoDate
   */
  published_at: string;
  /**
   * The text of the ruling
   */
  comment: string;
};
