export enum ScryfallFrameAppearance {
  /**
   * A Lord of the Rings appearance that made the card name, type line and oracle text area appear as scrolls.
   */
  Scroll = "scroll",
  /**
   * Cards with the appearance of a poster, e.g. the horror movie secret lairs.
   */
  Poster = "poster",
  /**
   * The showcase finish style from Murders at Karlov Manor.
   */
  Dossier = "dossier",
  /**
   * A special treatment applied to certain guild leader cards.
   */
  RavnicaCity = "ravnicacity",
  /**
   * Another showcase style from Murders at Karlov Manor.
   */
  Magnified = "magnified",
}

export enum ScryfallExtendedFinish {
  /**
   * A glossy finish.
   */
  Glossy = "glossy",
  /**
   * The silverfoil finish.
   */
  SilverFoil = "silverfoil",
  /**
   * The confetti foil finish. This looks glimmery like confetti laying on top of the card.
   */
  ConfettiFoil = "confettifoil",
  /**
   * Galaxy foil.
   */
  GalaxyFoil = "galaxyfoil",
  /**
   * Halo foil.
   */
  HaloFoil = "halofoil",
  /**
   * Surge foil
   */
  SurgeFoil = "surgefoil",
  /**
   * Double the rainbow vs normal cards.
   */
  DoubleRainbow = "doublerainbow",
  /**
   * A textured foil finish.
   */
  Textured = "textured",
  /**
   * A Phyrexian finish that involved dark cards embossed with shiny black gloss.
   */
  Oilslick = "oilslick",
  /**
   * Neon ink embossd on the card frame and art.
   */
  NeonInk = "neonink",
  /**
   * A Capenna foil style that embosses the art deco frame with shininess.
   */
  Gilded = "gilded",
  /**
   * Rainbow phyrexian symbols patterned over the card face.
   * @trivia The name was a reference to "step and repeat", a style of pattern used in printing banners.
   */
  StepAndCompleat = "stepandcompleat",
  /**
   * A glossy finish with an emblem embossed on it.
   *
   * Examples include the D&D Ampersand logo or REX Jurassic Park logo.
   */
  Embossed = "embossed",
  /**
   * The Dungeons & Dragons glossy finish that superimposed an ampersand over the card.
   *
   * @deprecated This is replaced by {@link Embossed} instead.
   */
  Ampersand = "ampersand",
  /**
   * Special dossier cards from Murders at Karlov Manor with extra handwritten flavor text and imagery.
   */
  InvisibleInk = "invisibleink",
}

export enum ScryfallCardStock {
  /**
   * Cards printed on extra-thick cardstock.
   */
  Thick = "thick",
  /**
   * Cards printed on plastic stock.
   */
  Plastic = "plastic",
}

type ScryfallPrintAttribute =
  /**
   * Cards exclusive to the Alchemy format in Arena.
   */
  | "alchemy"
  /**
   * Arena League prize cards.
   *
   * No relation to the video game.
   *
   * @trivia Arena League was a competitive event that ran from 1996 to 2007.
   */
  | "arenaleague"
  /**
   * Project Booster Fun cards.
   */
  | "boosterfun"
  /**
   * Box topper promotional cards found in some sets' booster boxes.
   */
  | "boxtopper"
  /**
   * Prints exclusive to brawl decks.
   */
  | "brawldeck"
  /**
   * Bring-a-friend store event promos.
   */
  | "bringafriend"
  /**
   * Bundle promos.
   */
  | "bundle"
  /**
   * Buyabox promos.
   */
  | "buyabox"
  /**
   * Commander party promos.
   */
  | "commanderparty"
  /**
   * Concept praetors.
   */
  | "concept"
  /**
   * Convention promos.
   */
  | "convention"
  /**
   * Cards datestamped in the corner of the art frame.
   */
  | "datestamped"
  /**
   * Dracula series cards.
   */
  | "draculaseries"
  /**
   * Draft weekend event promo cards.
   */
  | "draftweekend"
  /**
   * Duels of the Planeswalkers promos.
   */
  | "duels"
  /**
   * Event promos.
   */
  | "event"
  /**
   * FNM promos.
   */
  | "fnm"
  /**
   * Game day promos.
   */
  | "gameday"
  /**
   * Gift box promos.
   */
  | "giftbox"
  /**
   * Godzilla series cards.
   */
  | "godzillaseries"
  /**
   * Instore event promos.
   */
  | "instore"
  /**
   * Prints exclusive to intro packs/decks.
   */
  | "intropack"
  /**
   * Cards in the Japanese planeswalker series.
   */
  | "jpwalker"
  /**
   * Judge program gift cards.
   */
  | "judgegift"
  /**
   * Miscellaneous promos marked as League promos, e.g. APAC league.
   */
  | "league"
  /**
   * Media inserts, e.g. prints given out packaged with magazines or books.
   */
  | "mediainsert"
  /**
   * Cards in the moonlit land series.
   */
  | "moonlitland"
  /**
   * Openhouse promos.
   */
  | "openhouse"
  /**
   * Prints exclusive to planeswalker decks.
   */
  | "planeswalkerdeck"
  /**
   * Player rewards promos.
   */
  | "playerrewards"
  /**
   * Play promos.
   */
  | "playpromo"
  /**
   * Premier e-Shop promos.
   */
  | "premiereshop"
  /**
   * Prerelease event datestamped cards.
   */
  | "prerelease"
  /**
   * Cards found in promo packs.
   *
   * @see "stamped" Promop pack cards are usualy also stamped.
   */
  | "promopack"
  /**
   * Cards that are rebalanced versions for the Alchemy format in Arena.
   */
  | "rebalanced"
  /**
   * Release event promos.
   */
  | "release"
  /**
   * Simplified chinese alt-art cards.
   *
   * Due to Chinese censorship rules, some cards receive alternate art in Chinese releases.
   */
  | "schinesealtart"
  /**
   * Serialized cards. (001/500, etc.)
   */
  | "serialized"
  /**
   * Set Extension cards.
   *
   * E.g.: Rafiq of the Many had a gilded showcase released in SNC boosters.
   * It was given the collector info ALA 250, extending the original Alara set code.
   * Scryfall records this in the ALA sert because that's the set code, but we mark it as an “extension” of that set.
   */
  | "setextension"
  /**
   * (TODO)
   */
  | "setpromo"
  /**
   * Cards stamped with a planeswalker symbol in the corner of the art frame released in store boosters.
   *
   * Not to be confused with The List cards, which have a small planeswalker symbol in the bottom left corner of the card.
   */
  | "stamped"
  /**
   * Prints found exclusively in a starter deck.
   */
  | "starterdeck"
  /**
   * Store championship participation and prize cards.
   */
  | "storechampionship"
  /**
   * Prints found exclusively in theme boosters.
   */
  | "themepack"
  /**
   * Tournament promo cards.
   */
  | "tourney"
  /**
   * Wizards play network promo cards.
   */
  | "wizardsplaynetwork";

export type ScryfallPromoType =
  | ScryfallPrintAttribute
  | `${ScryfallFrameAppearance}`
  | `${ScryfallExtendedFinish}`
  | `${ScryfallCardStock}`;
