import {
  ScryfallBorderColor,
  ScryfallColors,
  ScryfallFinish,
  ScryfallFrame,
  ScryfallFrameEffect,
  ScryfallGame,
  ScryfallImageStatus,
  ScryfallImageUris,
  ScryfallLanguageCode,
  ScryfallLayout,
  ScryfallLegalitiesField,
  ScryfallPrices,
  ScryfallPromoType,
  ScryfallPurchaseUris,
  ScryfallRarity,
  ScryfallRelatedUris,
  ScryfallSecurityStamp,
} from "./values";
import { ScryfallCardFace } from "./CardFace";
import { ScryfallRelatedCard } from "./RelatedCard";
import { ScryfallManaTypes } from "./values/ManaType";
import { SetType } from "../Set/values";

/**
 * A collection of types related to each possible card field.
 */
export namespace ScryfallCardFields {}

export namespace ScryfallCardFields.Core {
  export type ScryfallReferences = {
    /**
     * A unique ID for this card in Scryfall’s database.
     *
     * @type UUID
     */
    id: string;
    /**
     * A unique ID for this card’s oracle identity.
     * This value is consistent across reprinted card editions, and unique among different cards with the same name (tokens, Unstable variants, etc).
     * Always present except for the reversible_card layout where it will be absent; oracle_id will be found on each face instead.
     *
     * @type UUID
     */
    oracle_id: string;
    /**
     * A language code for this printing.
     */
    lang: `${ScryfallLanguageCode}`;
    /**
     * A code for this card’s layout.
     *
     * @see {@link https://scryfall.com/docs/api/layouts}
     */
    layout: `${ScryfallLayout}`;
    /**
     * A link to where you can begin paginating all re/prints for this card on Scryfall’s API.
     *
     * @type URI
     */
    prints_search_uri: string;
    /**
     * A link to this card’s rulings list on Scryfall’s API.
     *
     * @type URI
     */
    rulings_uri: string;
    /**
     * A link to this card’s permapage on Scryfall’s website.
     *
     * @type URI
     */
    scryfall_uri: string;
    /**
     * A link to this card object on Scryfall’s API.
     *
     * @type URI
     */
    uri: string;
  };

  export type VendorReferences = {
    /**
     * This card’s Arena ID, if any. A large percentage of cards are not available on Arena and do not have this ID.
     *
     * @type Integer
     */
    arena_id?: number;
    /**
     * This card’s Magic Online ID (also known as the Catalog ID), if any. A large percentage of cards are not available on Magic Online and do not have this ID.
     *
     * @type Integer
     */
    mtgo_id?: number;
    /**
     * This card’s foil Magic Online ID (also known as the Catalog ID), if any. A large percentage of cards are not available on Magic Online and do not have this ID.
     *
     * @type Integer
     */
    mtgo_foil_id?: number;
    /**
     * This card’s multiverse IDs on Gatherer, if any, as an array of integers. Note that Scryfall includes many promo cards, tokens, and other esoteric objects that do not have these identifiers.
     *
     * @type Integer
     */
    multiverse_ids?: number[];
    /**
     * This card’s ID on TCGplayer’s API, also known as the productId.
     *
     * @type Integer
     */
    tcgplayer_id?: number;
    /**
     * This card’s ID on TCGplayer’s API, for its etched version if that version is a separate product.
     *
     * @type Integer
     */
    tcgplayer_etched_id?: number;
    /**
     * This card’s ID on Cardmarket’s API, also known as the idProduct.
     *
     * @type Integer
     */
    cardmarket_id?: number;
  };

  export type All = ScryfallReferences & VendorReferences;
}

export namespace ScryfallCardFields.Gameplay {
  /**
   * These fields are always at the root level for every layout.
   */
  export type RootProperties = {
    /**
     * If this card is closely related to other cards, this property will be an array with Related Card Objects.
     */
    all_parts?: ScryfallRelatedCard[];
    /**
     * An object describing the legality of this card across play formats. Possible legalities are legal, not_legal, restricted, and banned.
     */
    legalities: ScryfallLegalitiesField;
  };

  /**
   * The card faces field. The faces will be of type T.
   */
  export type CardFaces<T extends ScryfallCardFace.AbstractCardFace> = {
    /**
     * An array of Card Face objects, if this card is multifaced.
     */
    card_faces: T[];
  };

  /**
   * These fields are present only for Vanguards.
   */
  export type VanguardStats = {
    /**
     * This card’s hand modifier, if it is Vanguard card. This value will contain a delta, such as -1.
     */
    hand_modifier?: string;
    /**
     * This card’s life modifier, if it is Vanguard card. This value will contain a delta, such as +2.
     */
    life_modifier?: string;
  };

  /**
   * Combat stats: power, toughness, loyalty, and defense.
   */
  export type CombatStats = {
    /**
     * This card's defense, if any.
     */
    defense?: string;
    /**
     * This loyalty if any. Note that some cards have loyalties that are not numeric, such as X.
     */
    loyalty?: string;
    /**
     * This card’s power, if any. Note that some cards have powers that are not numeric, such as `"*"`.
     */
    power?: string;
    /**
     * This card’s toughness, if any. Note that some cards have toughnesses that are not numeric, such as `"*"`.
     */
    toughness?: string;
  };

  /**
   * On multi-face cards, these fields are duplicated at the card and print level.
   */
  type AllFacesAndSides = {
    name: string;
    type_line: string;
    mana_cost?: string;
  };

  /**
   * These fields are specific for a card face.
   *
   * - Root level for a single-face card.
   * - Card face level for a multi-face card.
   */
  export type CardFaceSpecific = AllFacesAndSides & {
    /**
     * The colors in this card’s color indicator, if any. A null value for this field indicates the card does not have one.
     */
    color_indicator?: ScryfallColors;
    /**
     * Nullable 	The mana cost for this card. This value will be any empty string "" if the cost is absent. Remember that per the game rules, a missing mana cost and a mana cost of {0} are different  Multi-faced cards will report this value in card faces.
     */
    mana_cost?: string;
    /**
     * The name of this card.
     */
    name: string;
    /**
     * The type line of this card.
     */
    type_line: string;
    /**
     * The Oracle text for this card, if any.
     */
    oracle_text: string;
  } & CombatStats &
    VanguardStats;

  export type CardSideSpecific = AllFacesAndSides & {
    /**
     * The name of this card.
     */
    name: string;
    /**
     * The type line of this card.
     */
    type_line: string;
    /**
     * This card’s colors, if the overall card has colors defined by the rules. Otherwise the colors will be on the card_faces objects.
     */
    colors: ScryfallColors;
  };

  /**
   * These fields are specific for a card.
   * - Root level for most layouts.
   * - Card face level for reversible layouts.
   */
  export type CardSpecific = AllFacesAndSides & {
    /**
     * The card’s mana value. Note that some funny cards have fractional mana costs.
     *
     * @type Decimal
     */
    cmc: number;
    /**
     * This card’s color identity.
     */
    color_identity: ScryfallColors;
    /**
     * This card’s overall rank/popularity on EDHREC. Not all cards are ranked.
     *
     * @type Integer
     */
    edhrec_rank?: number;
    /**
     * True if this card is on the Commander Game Changer list.
     *
     * @see {@link https://mtg.wiki/page/Commander_(format)/Game_Changers}
     */
    game_changer?: boolean;
    /**
     * An array of keywords that this card uses, such as 'Flying' and 'Cumulative upkeep'.
     */
    keywords: string[];
    /**
     * The name of this card. If this card has multiple faces, this field will contain both names separated by ␣//␣.
     */
    name: string;
    /**
     * This card’s rank/popularity on Penny Dreadful. Not all cards are ranked.
     *
     * @type Integer
     */
    penny_rank?: number;
    /**
     * Colors of mana that this card could produce.
     */
    produced_mana?: ScryfallManaTypes;
    /**
     * True if this card is on the Reserved List.
     */
    reserved: boolean;
    /**
     * The type line of this card.
     */
    type_line: string;
  };
}

export namespace ScryfallCardFields.Print {
  type PreviewInfo = {
    /**
     * The date this card was previewed.
     *
     * @type IsoDate
     */
    previewed_at: string;
    /**
     * A link to the preview for this card.
     *
     * @type URI
     */
    source_uri: string;
    /**
     * The name of the source that previewed this card.
     */
    source: string;
  };

  export type RootProperties = {
    /**
     * Whether the card is foil.
     * @deprecated Use {@link CardSpecific.Finishes} instead.
     */
    foil?: boolean;
    /**
     * Whether the card is nonfoil.
     * @deprecated Use {@link CardSpecific.Finishes} instead.
     */
    nonfoil?: boolean;
  };

  /**
   * These print fields are specific for a card.
   *
   * - Root level for a non-reversible card.
   * - Card face level for a reversible card.
   */
  export type CardSpecific = {
    /**
     * The name of the illustrator of this card. Newly spoiled cards may not have this field yet.
     */
    artist?: string;
    /**
     * The IDs of the artists that illustrated this card. Newly spoiled cards may not have this field yet.
     *
     * @type UUID
     */
    artist_ids?: string[];
    /**
     * The lit Unfinity attractions lights on this card, if any.
     *
     * This will be an array of numbers ranging from 1 to 6 inclusive.
     */
    attraction_lights?: number[];
    /**
     * Whether this card is found in boosters.
     */
    booster: boolean;
    /**
     * This card’s border color: black, white, borderless, silver, or gold.
     */
    border_color: `${ScryfallBorderColor}`;
    /**
     * This card’s collector number. Note that collector numbers can contain non-numeric characters, such as letters or ★.
     */
    collector_number: string;
    /**
     * True if you should consider avoiding use of this print downstream.
     */
    content_warning?: boolean;
    /**
     * True if this card was only released in a video game.
     */
    digital: boolean;
    /**
     * An array of computer-readable flags that indicate if this card can come in foil, nonfoil, or etched finishes.
     */
    finishes: `${ScryfallFinish}`[];
    /**
     * This card’s frame effects, if any.
     */
    frame_effects?: `${ScryfallFrameEffect}`[];
    /**
     * This card’s frame layout.
     */
    frame: `${ScryfallFrame}`;
    /**
     * True if this card’s artwork is larger than normal.
     */
    full_art: boolean;
    /**
     * A list of games that this card print is available in, paper, arena, and/or mtgo.
     */
    games: `${ScryfallGame}`[];
    /**
     * True if this card’s imagery is high resolution.
     */
    highres_image: boolean;
    /**
     * A unique identifier for the card artwork that remains consistent across reprints. Newly spoiled cards may not have this field yet.
     *
     * @type UUID
     */
    illustration_id?: string;
    /**
     * A computer-readable indicator for the state of this card’s image, one of missing, placeholder, lowres, or highres_scan.
     */
    image_status: `${ScryfallImageStatus}`;
    /**
     * True if this card is oversized.
     */
    oversized: boolean;
    /**
     * An object containing daily price information for this card, including usd, usd_foil, usd_etched, eur, eur_foil, eur_etched, and tix prices, as strings.
     */
    prices: ScryfallPrices;
    /**
     * True if this card is a promotional print.
     */
    promo: boolean;
    /**
     * An array of strings describing what categories of promo cards this card falls into.
     */
    promo_types?: ScryfallPromoType[];
    /**
     * An object providing URIs to this card’s listing on major marketplaces. Omitted if the card is unpurchaseable.
     */
    purchase_uris?: ScryfallPurchaseUris;
    /**
     * This card’s rarity.
     */
    rarity: `${ScryfallRarity}`;
    /**
     * An object providing URIs to this card’s listing on other Magic: The Gathering online resources.
     */
    related_uris: ScryfallRelatedUris;
    /**
     * The date this card was first released.
     *
     * @type IsoDate
     */
    released_at: string;
    /**
     * True if this card is a reprint.
     */
    reprint: boolean;
    /**
     * A link to this card’s set on Scryfall’s website.
     *
     * @type URI
     */
    scryfall_set_uri: string;
    /**
     * This card’s full set name.
     */
    set_name: string;
    /**
     * A link to where you can begin paginating this card’s set on the Scryfall API.
     *
     * @type URI
     */
    set_search_uri: string;
    /**
     * The type of set this printing is in.
     */
    set_type: `${SetType}`;
    /**
     * A link to this card’s set object on Scryfall’s API.
     *
     * @type URI
     */
    set_uri: string;
    /**
     * This card’s set code.
     */
    set: string;
    /**
     * This card’s Set object UUID.
     *
     * @type UUID
     */
    set_id: string;
    /**
     * True if this card is a Story Spotlight.
     */
    story_spotlight: boolean;
    /**
     * True if the card is printed without text.
     */
    textless: boolean;
    /**
     * The security stamp on this card, if any.
     */
    security_stamp?: `${ScryfallSecurityStamp}`;
    /**
     * Preview information for this print, if any.
     */
    preview?: PreviewInfo;
  } & VariationInfo;

  /**
   * These print fields only show up when a card is single-sided.
   */
  export type SingleSideOnly = {
    /**
     * The Scryfall ID for the card back design present on this card.
     *
     * @type UUID
     */
    card_back_id: string;
  };

  /**
   * These print fields are specific for the side of a card.
   *
   * - Root level for single-sided cards, whether with single-part or multi-part.
   * - Card face level for cards with two sides, e.g. a DFC or a reversible card.
   */
  export type CardSideSpecific = {
    /**
     * An object listing available imagery for this card. See the Card Imagery article for more information.
     */
    image_uris?: ScryfallImageUris;
  };

  /**
   * These print fields are specific for a card face.
   *
   * - Root level for a single-faced card.
   * - Card face level for a multi-faced card.
   */
  export type CardFaceSpecific = {
    /**
     * The just-for-fun name printed on the card (such as for Godzilla series cards).
     */
    flavor_name?: string;
    /**
     * The flavor text, if any.
     */
    flavor_text?: string;
    /**
     * This card’s watermark, if any.
     */
    watermark?: string;
  } & Localization;

  /**
   * These print fields only ever show up on a card face.
   */
  export type CardFaceOnly = {
    /**
     * The name of the illustrator of this card face. Newly spoiled cards may not have this field yet.
     */
    artist?: string;
    /**
     * The ID of the illustrator of this card face. Newly spoiled cards may not have this field yet.
     *
     * @type UUID
     */
    artist_id?: string;
    /**
     * A unique identifier for the card face artwork that remains consistent across reprints. Newly spoiled cards may not have this field yet.
     *
     * @type UUID
     */
    illustration_id?: string;
  };

  /**
   * Printed data for localized cards.
   */
  export type Localization = {
    /**
     * The localized name printed on this card, if any.
     */
    printed_name?: string;
    /**
     * The localized text printed on this card, if any.
     */
    printed_text?: string;
    /**
     * The localized type line printed on this card, if any.
     */
    printed_type_line?: string;
  };

  type VariationInfo = {
    /**
     * Whether this card is a variation of another printing.
     */
    variation: boolean;
    /**
     * The printing ID of the printing this card is a variation of.
     *
     * This will only exist if the `variation` field is true.
     *
     * @type UUID
     */
    variation_of?: string;
  };
}
