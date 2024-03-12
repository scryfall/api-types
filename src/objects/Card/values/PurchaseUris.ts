/**
 * Possible purchase URIs for a card.
 */
export type ScryfallPurchaseUris = {
  /**
   * This card's purchase page on TCGPlayer.
   *
   * @type URI
   */
  tcgplayer: string;
  /**
   * This card's purchase page on Cardmarket. Often inexact due to how Cardmarket links work.
   *
   * @type URI
   */
  cardmarket: string;
  /**
   * This card's purchase page on Cardhoarder.
   *
   * @type URI
   */
  cardhoarder: string;
};
