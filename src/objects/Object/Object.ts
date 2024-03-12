/**
 * This namespace defines the abstract base object property of all Scryfall objects.
 */
export namespace ScryfallObject {
  /**
   * The type of object.
   */
  export enum ObjectType {
    /**
     * A card.
     */
    Card = "card",
    /**
     * A card face, featured in the card_faces section of {@link ObjectType.Card} objects.
     */
    CardFace = "card_face",
    /**
     * A card symbol.
     */
    CardSymbol = "card_symbol",
    /**
     * A catalog of objects.
     */
    Catalog = "catalog",
    /**
     * An error response.
     */
    Error = "error",
    /**
     * A list (of cards, sets, etc).
     */
    List = "list",
    /**
     * A mana cost.
     */
    ManaCost = "mana_cost",
    /**
     * A data migration.
     */
    Migration = "migration",
    /**
     * A related card, featured in the all_parts section of a {@link ObjectType.Card} object.
     */
    RelatedCard = "related_card",
    /**
     * A card ruling.
     */
    Ruling = "ruling",
    /**
     * A set.
     */
    Set = "set",
  }

  export type ObjectTypeLike = ObjectType | `${ObjectType}`;

  /**
   * The abstract base type of Scryfall objects.
   */
  export type Object<T extends ObjectType> = {
    /**
     * A content type for this object.
     */
    object: T | `${T}`;
  };
}
