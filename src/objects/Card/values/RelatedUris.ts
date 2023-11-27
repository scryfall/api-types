import { Uri } from "../../../internal";


/**
 * Related URIs for a card.
 */
export type ScryfallRelatedUris = {
  /** This card's Gatherer page. */
  gatherer?: Uri;
  /** TCGPlayer Infinite articles related to this card. */
  tcgplayer_infinite_articles?: Uri;
  /** TCGPlayer Infinite decks with this card. */
  tcgplayer_infinite_decks?: Uri;
  /** EDHREC's page for this card. */
  edhrec?: Uri;
};
