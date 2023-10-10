import {
  ScryfallFormat,
  ScryfallLegalityLike,
  ScryfallLanguageCodeLike,
  ScryfallCardLayoutLike,
  ScryfallColors,
  ScryfallImageSize,
  ScryfallBorderColorLike,
  ScryfallBasicFinishLike,
  ScryfallFrameEffectLike,
  ScryfallFrameLike,
  ScryfallGameLike,
  ScryfallImageStatusLike,
  ScryfallPromoType,
  ScryfallRarityLike,
  ScryfallSecurityStampLike,
} from "./values";
import { ScryfallCardFace } from "./CardFace";
import { Uuid, Uri, Integer, Decimal, IsoDate } from "../../internal";
import { SetTypeLike } from "../Set/values";
import { ScryfallRelatedCard } from "./RelatedCard";

type LegalityRecord = Record<ScryfallFormat, ScryfallLegalityLike>;

export namespace ScryfallCardFields {}

export namespace ScryfallCardFields.Core {
  export type ScryfallReferences = {
    /** A unique ID for this card in Scryfall’s database. */
    id: Uuid;
    /** A unique ID for this card’s oracle identity. This value is consistent across reprinted card editions, and unique among different cards with the same name (tokens, Unstable variants, etc). Always present except for the reversible_card layout where it will be absent; oracle_id will be found on each face instead. */
    oracle_id: Uuid;
    /** A language code for this printing. */
    lang: ScryfallLanguageCodeLike;
    /** A code for this card’s layout. */
    layout: ScryfallCardLayoutLike;
    /** A link to where you can begin paginating all re/prints for this card on Scryfall’s API. */
    prints_search_uri: Uri;
    /** A link to this card’s rulings list on Scryfall’s API. */
    rulings_uri: Uri;
    /** A link to this card’s permapage on Scryfall’s website. */
    scryfall_uri: Uri;
    /** A link to this card object on Scryfall’s API.  */
    uri: Uri;
  };

  export type VendorReferences = {
    /** This card’s Arena ID, if any. A large percentage of cards are not available on Arena and do not have this ID. */
    arena_id?: Integer;
    /** This card’s Magic Online ID (also known as the Catalog ID), if any. A large percentage of cards are not available on Magic Online and do not have this ID. */
    mtgo_id?: Integer;
    /** This card’s foil Magic Online ID (also known as the Catalog ID), if any. A large percentage of cards are not available on Magic Online and do not have this ID. */
    mtgo_foil_id?: Integer;
    /** This card’s multiverse IDs on Gatherer, if any, as an array of integers. Note that Scryfall includes many promo cards, tokens, and other esoteric objects that do not have these identifiers. */
    multiverse_ids?: Integer[];
    /** This card’s ID on TCGplayer’s API, also known as the productId. */
    tcgplayer_id?: Integer;
    /** This card’s ID on TCGplayer’s API, for its etched version if that version is a separate product. */
    tcgplayer_etched_id?: Integer;
    /** This card’s ID on Cardmarket’s API, also known as the idProduct. */
    cardmarket_id?: Integer;
  };

  export type All = ScryfallReferences & VendorReferences;
}

export namespace ScryfallCardFields.Gameplay {
  /**
   * These fields are always at the root level for every layout.
   */
  export type RootProperties = {
    /** If this card is closely related to other cards, this property will be an array with Related Card Objects. */
    all_parts?: ScryfallRelatedCard[];
    /** An object describing the legality of this card across play formats. Possible legalities are legal, not_legal, restricted, and banned. */
    legalities: LegalityRecord;
  };

  /**
   * The card faces field. The faces will be of type T.
   */
  export type CardFaces<T extends ScryfallCardFace.AbstractCardFace> = {
    /** An array of Card Face objects, if this card is multifaced. */
    card_faces: T[];
  };

  /**
   * These fields are present only for Vanguards.
   */
  export type VanguardStats = {
    /** This card’s hand modifier, if it is Vanguard card. This value will contain a delta, such as -1. */
    hand_modifier: string;
    /** This card’s life modifier, if it is Vanguard card. This value will contain a delta, such as +2. */
    life_modifier: string;
  };

  /** On multi-face cards, these fields are duplicated at the card and print level. */
  type AllFacesAndSides = {
    name: string;
    type_line: string;
    mana_cost?: string;
  };

  /**
   * Combat stats: power, toughness, loyalty, and defense.
   *
   * These are automatically part of {@link CardFaceSpecific}.
   */
  export type CombatStats = {
    /** This card's defense, if any. */
    defense?: string;
    /** This loyalty if any. Note that some cards have loyalties that are not numeric, such as X. */
    loyalty?: string;
    /** This card’s power, if any. Note that some cards have powers that are not numeric, such as `"*"`. */
    power?: string;
    /** This card’s toughness, if any. Note that some cards have toughnesses that are not numeric, such as `"*"`. */
    toughness?: string;
  };

  /** A definition implying this object will never, ever have combat stats. */
  export type NoCombatStats = CombatStats & {
    defense?: undefined;
    loyalty?: undefined;
    power?: undefined;
    toughness?: undefined;
  };

  /**
   * These fields are specific for a card face.
   *
   * - Root level for a single-face card.
   * - Card face level for a multi-face card.
   */
  export type CardFaceSpecific = AllFacesAndSides & {
    /** The colors in this card’s color indicator, if any. A null value for this field indicates the card does not have one. */
    color_indicator?: ScryfallColors;
    /** Nullable 	The mana cost for this card. This value will be any empty string "" if the cost is absent. Remember that per the game rules, a missing mana cost and a mana cost of {0} are different  Multi-faced cards will report this value in card faces. */
    mana_cost?: string;
    /** The name of this card. */
    name: string;
    /** The type line of this card. */
    type_line: string;
    /** The Oracle text for this card, if any. */
    oracle_text: string;
  } & CombatStats;

  export type CardSideSpecific = AllFacesAndSides & {
    /** The name of this card. */
    name: string;
    /** The type line of this card. */
    type_line: string;
    /** This card’s colors, if the overall card has colors defined by the rules. Otherwise the colors will be on the card_faces objects. */
    colors: ScryfallColors;
  };

  /**
   * These fields are specific for a card.
   * - Root level for most layouts.
   * - Card face level for reversible layouts.
   */
  export type CardSpecific = AllFacesAndSides & {
    /** The card’s mana value. Note that some funny cards have fractional mana costs. */
    cmc: Decimal;
    /** This card’s color identity. */
    color_identity: ScryfallColors;
    /** This card’s overall rank/popularity on EDHREC. Not all cards are ranked. */
    edhrec_rank?: Integer;
    /** An array of keywords that this card uses, such as 'Flying' and 'Cumulative upkeep'. */
    keywords: string[];
    /** The name of this card. If this card has multiple faces, this field will contain both names separated by ␣//␣. */
    name: string;
    /** This card’s rank/popularity on Penny Dreadful. Not all cards are ranked. */
    penny_rank?: Integer;
    /** Colors of mana that this card could produce. */
    produced_mana?: ScryfallColors;
    /** True if this card is on the Reserved List. */
    reserved: boolean;
    /** The type line of this card. */
    type_line: string;
  };
}

export namespace ScryfallCardFields.Print {
  type PreviewInfo = {
    /** The date this card was previewed. */
    previewed_at: IsoDate;
    /** A link to the preview for this card. */
    source_uri: Uri;
    /** The name of the source that previewed this card. */
    source: string;
  };

  // URIs for various image sizes of this card.
  type ImageUris = Record<ScryfallImageSize, Uri>;

  // Card prices.
  type Prices = {
    usd: string | null;
    usd_foil: string | null;
    usd_etched: string | null;
    eur: string | null;
    eur_foil: string | null;
    tix: string | null;
  };

  type PurchaseUris = {
    /** This card's purchase page on TCGPlayer. */
    tcgplayer: Uri;
    /** This card's purchase page on Cardmarket. Often inexact due to how Cardmarket links work. */
    cardmarket: Uri;
    /** This card's purchase page on Cardhoarder. */
    cardhoarder: Uri;
  };

  type RelatedUris = {
    /** This card's Gatherer page. */
    gatherer?: Uri;
    /** TCGPlayer Infinite articles related to this card. */
    tcgplayer_infinite_articles?: Uri;
    /** TCGPlayer Infinite decks with this card. */
    tcgplayer_infinite_decks?: Uri;
    /** EDHREC's page for this card. */
    edhrec?: Uri;
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
    /** The name of the illustrator of this card. Newly spoiled cards may not have this field yet. */
    artist?: string;
    /** The IDs of the artists that illustrated this card. Newly spoiled cards may not have this field yet. */
    artist_ids?: Uuid[];
    /** The lit Unfinity attractions lights on this card, if any. */
    attraction_lights?: (1 | 2 | 3 | 4 | 5 | 6)[];
    /** Whether this card is found in boosters. */
    booster: boolean;
    /** This card’s border color: black, white, borderless, silver, or gold. */
    border_color: ScryfallBorderColorLike;
    /** This card’s collector number. Note that collector numbers can contain non-numeric characters, such as letters or ★. */
    collector_number: string;
    /** True if you should consider avoiding use of this print downstream. */
    content_warning?: boolean;
    /** True if this card was only released in a video game. */
    digital: boolean;
    /** An array of computer-readable flags that indicate if this card can come in foil, nonfoil, or etched finishes. */
    finishes: ScryfallBasicFinishLike[];
    /** This card’s frame effects, if any. */
    frame_effects?: ScryfallFrameEffectLike[];
    /** This card’s frame layout. */
    frame: ScryfallFrameLike;
    /** True if this card’s artwork is larger than normal. */
    full_art: boolean;
    /** A list of games that this card print is available in, paper, arena, and/or mtgo. */
    games: ScryfallGameLike[];
    /** True if this card’s imagery is high resolution. */
    highres_image: boolean;
    /** A unique identifier for the card artwork that remains consistent across reprints. Newly spoiled cards may not have this field yet. */
    illustration_id?: Uuid;
    /** A computer-readable indicator for the state of this card’s image, one of missing, placeholder, lowres, or highres_scan. */
    image_status: ScryfallImageStatusLike;
    /** True if this card is oversized. */
    oversized: boolean;
    /** An object containing daily price information for this card, including usd, usd_foil, usd_etched, eur, eur_foil, eur_etched, and tix prices, as strings. */
    prices: Prices;
    /** True if this card is a promotional print. */
    promo: boolean;
    /** An array of strings describing what categories of promo cards this card falls into. */
    promo_types?: ScryfallPromoType[];
    /** An object providing URIs to this card’s listing on major marketplaces. Omitted if the card is unpurchaseable. */
    purchase_uris?: PurchaseUris;
    /** This card’s rarity. */
    rarity: ScryfallRarityLike;
    /** An object providing URIs to this card’s listing on other Magic: The Gathering online resources. */
    related_uris: RelatedUris;
    /** The date this card was first released. */
    released_at: IsoDate;
    /** True if this card is a reprint. */
    reprint: boolean;
    /** A link to this card’s set on Scryfall’s website. */
    scryfall_set_uri: Uri;
    /** This card’s full set name. */
    set_name: string;
    /** A link to where you can begin paginating this card’s set on the Scryfall API. */
    set_search_uri: Uri;
    /** The type of set this printing is in. */
    set_type: SetTypeLike;
    /** A link to this card’s set object on Scryfall’s API. */
    set_uri: Uri;
    /** This card’s set code. */
    set: string;
    /** This card’s Set object UUID. */
    set_id: Uuid;
    /** True if this card is a Story Spotlight. */
    story_spotlight: boolean;
    /** True if the card is printed without text. */
    textless: boolean;
    /** The security stamp on this card, if any. */
    security_stamp?: ScryfallSecurityStampLike;
    /** Preview information for this print, if any. */
    preview?: PreviewInfo;
  } & VariationInfo;

  /**
   * These print fields only show up when a card is single-sided.
   */
  export type SingleSideOnly = {
    /** The Scryfall ID for the card back design present on this card. */
    card_back_id: Uuid;
  };

  /**
   * These print fields are specific for the side of a card.
   *
   * - Root level for single-sided cards, whether with single-part or multi-part.
   * - Card face level for cards with two sides, e.g. a DFC or a reversible card.
   */
  export type CardSideSpecific = {
    /** An object listing available imagery for this card. See the Card Imagery article for more information. */
    image_uris?: ImageUris;
  };

  /**
   * These print fields are specific for a card face.
   *
   * - Root level for a single-faced card.
   * - Card face level for a multi-faced card.
   */
  export type CardFaceSpecific = {
    /** The just-for-fun name printed on the card (such as for Godzilla series cards). */
    flavor_name?: string;
    /** The flavor text, if any. */
    flavor_text?: string;
    /** This card’s watermark, if any. */
    watermark?: string;
  } & Localization;

  /**
   * These print fields only ever show up on a card face.
   */
  export type CardFaceOnly = {
    /** The name of the illustrator of this card face. Newly spoiled cards may not have this field yet. */
    artist?: string;
    /** The ID of the illustrator of this card face. Newly spoiled cards may not have this field yet. */
    artist_id?: Uuid;
    /** A unique identifier for the card face artwork that remains consistent across reprints. Newly spoiled cards may not have this field yet. */
    illustration_id?: Uuid;
  };

  /**
   * Printed data for localized cards.
   */
  export type Localization = {
    /** The localized name printed on this card, if any. */
    printed_name?: string;
    /** The localized text printed on this card, if any. */
    printed_text?: string;
    /** The localized type line printed on this card, if any. */
    printed_type_line?: string;
  };

  /**
   * An implication this card will have no localisation data.
   */
  export type NotLocalized = {
    printed_name?: undefined;
    printed_text?: undefined;
    printed_type_line?: undefined;
  };

  type VariationInfo = {
    /** Whether this card is a variation of another printing. */
    variation: boolean;
    /** The printing ID of the printing this card is a variation of. */
    variation_of?: Uuid;
  } & (
    | {
        variation: true;
        variation_of: Uuid;
      }
    | {
        variation: false;
        variation_of?: undefined;
      }
  );
}
