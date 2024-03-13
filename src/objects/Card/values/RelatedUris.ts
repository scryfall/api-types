/**
 * Related URIs for a card.
 */
export type ScryfallRelatedUris = {
  /**
   * This card's Gatherer page.
   *
   * @type URI
   */
  gatherer?: string;
  /**
   * TCGPlayer Infinite articles related to this card.
   *
   * @type URI
   */
  tcgplayer_infinite_articles?: string;
  /**
   * TCGPlayer Infinite decks with this card.
   *
   * @type URI
   */
  tcgplayer_infinite_decks?: string;
  /**
   * EDHREC's page for this card.
   *
   * @type URI
   */
  edhrec?: string;
};
