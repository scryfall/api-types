import { ScryfallObject } from "../Object";

/**
 * A related card entry.
 */
export type ScryfallRelatedCard = ScryfallObject.Object<ScryfallObject.ObjectType.RelatedCard> & {
  /**
   * An unique ID for this card in Scryfall’s database.
   *
   * @type UUID
   */
  id: string;
  /**
   * A field explaining what role this card plays in this relationship.
   */
  component: "token" | "meld_part" | "meld_result" | "combo_piece";
  /**
   * The name of this particular related card.
   */
  name: string;
  /**
   * The type line of this card.
   */
  type_line: string;
  /**
   * A URI where you can retrieve a full object describing this card on Scryfall’s API.
   *
   * @type URI
   */
  uri: string;
};
