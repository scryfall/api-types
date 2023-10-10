import { ScryfallObject } from "../Object";
import { Decimal } from "../../internal";
import { ScryfallColors } from "../Card/values";

export type ScryfallManaCost = ScryfallObject.Object<ScryfallObject.ObjectType.ManaCost> & {
  /**
   * The normalized cost, with correctly-ordered and wrapped mana symbols
   */
  cost: string;
  /**
   * The mana value. If you submit Un-set mana symbols, this decimal could include fractional parts
   */
  cmc: Decimal;
  /**
   * The colors of the given cost
   */
  colors: ScryfallColors;
  /**
   * True if the cost is colorless
   */
  colorless: boolean;
  /**
   * True if the cost is monocolored
   */
  monocolored: boolean;
  /**
   * True if the cost is multicolored
   */
  multicolored: boolean;
};
