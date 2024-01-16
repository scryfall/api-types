import { ScryfallExtendedFinish } from "./Finishes";

type ScryfallPrintAttribute =
  | "alchemy"
  | "arenaleague"
  | "boosterfun"
  | "boxtopper"
  | "brawldeck"
  | "bringafriend"
  | "bundle"
  | "buyabox"
  | "commanderparty"
  | "concept"
  | "convention"
  | "datestamped"
  | "draculaseries"
  | "draftweekend"
  | "duels"
  | "event"
  | "fnm"
  | "gameday"
  | "giftbox"
  | "godzillaseries"
  | "instore"
  | "intropack"
  | "jpwalker"
  | "judgegift"
  | "league"
  | "mediainsert"
  | "moonlitland"
  | "openhouse"
  | "planeswalkerdeck"
  | "plastic"
  | "playerrewards"
  | "playpromo"
  | "poster"
  | "premiereshop"
  | "prerelease"
  | "promopack"
  | "rebalanced"
  | "release"
  | "schinesealtart"
  /**
   * A Lord of the Rings appearance that made the card name, type line and oracle text area appear as scrolls.
   */
  | "scroll"
  | "serialized"
  | "setextension"
  | "setpromo"
  | "stamped"
  | "starterdeck"
  | "storechampionship"
  | "themepack"
  | "thick"
  | "tourney"
  | "wizardsplaynetwork";

export type ScryfallPromoType = ScryfallPrintAttribute | `${ScryfallExtendedFinish}`;
