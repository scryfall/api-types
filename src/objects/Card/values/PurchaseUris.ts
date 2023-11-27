import { Uri } from "../../../internal";


/**
 * Possible purchase URIs for a card.
 */
export type ScryfallPurchaseUris = {
  /** This card's purchase page on TCGPlayer. */
  tcgplayer: Uri;
  /** This card's purchase page on Cardmarket. Often inexact due to how Cardmarket links work. */
  cardmarket: Uri;
  /** This card's purchase page on Cardhoarder. */
  cardhoarder: Uri;
};
