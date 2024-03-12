import { ScryfallObject } from "../Object";
import { SetType } from "./values";

/**
 * Description of a Magic card set.
 *
 * @see {@link https://scryfall.com/docs/api/sets}
 */
export type ScryfallSet = ScryfallObject.Object<ScryfallObject.ObjectType.Set> & {
  /**
   * A unique ID for this set on Scryfall that will not change.
   *
   * @type UUID
   */
  id: string;
  /**
   * The unique three to five-letter code for this set.
   */
  code: string;
  /**
   * The unique code for this set on MTGO, which may differ from the regular code.
   */
  mtgo_code?: string;
  /**
   * The unique code for this set on Arena, which may differ from the regular code.
   */
  arena_code?: string;
  /**
   * This set’s ID on TCGplayer’s API, also known as the groupId.
   *
   * @type Integer
   */
  tcgplayer_id?: number;
  /**
   * The English name of the set.
   */
  name: string;
  /**
   * A computer-readable classification for this set. See below.
   */
  set_type: `${SetType}`;
  /**
   * The date the set was released or the first card was printed in the set (in GMT-8 Pacific time).
   *
   * @type IsoDate
   */
  released_at?: string;
  /**
   * The block code for this set, if any.
   */
  block_code?: string;
  /**
   * The block or group name code for this set, if any.
   */
  block?: string;
  /**
   * The set code for the parent set, if any. promo and token sets often have a parent set.
   */
  parent_set_code?: string;
  /**
   * The number of cards in this set.
   *
   * @type Integer
   */
  card_count: number;
  /**
   * The denominator for the set’s printed collector numbers.
   *
   * @type Integer
   */
  printed_size?: number;
  /**
   * True if this set was only released in a video game.
   */
  digital: boolean;
  /**
   * True if this set contains only foil cards.
   */
  foil_only: boolean;
  /**
   * True if this set contains only nonfoil cards.
   */
  nonfoil_only: boolean;
  /**
   * A link to this set’s permapage on Scryfall’s website.
   *
   * @type URI
   */
  scryfall_uri: string;
  /**
   * A link to this set object on Scryfall’s API.
   *
   * @type URI
   */
  uri: string;
  /**
   * A URI to an SVG file for this set’s icon on Scryfall’s CDN. Hotlinking this image isn’t recommended, because it may change slightly over time. You should download it and use it locally for your particular user interface needs.
   *
   * @type URI
   */
  icon_svg_uri: string;
  /**
   * A Scryfall API URI that you can request to begin paginating over the cards in this set.
   *
   * @type URI
   */
  search_uri: string;
};
