import { ScryfallObject } from "../Object";
import { ScryfallCardFields } from "./CardFields";

/**
 * A collection of types representing card faces of each possible type.
 *
 * @see {@link https://scryfall.com/docs/api/layouts#card-faces}
 */
export namespace ScryfallCardFace {
  /**
   * The abstract root implementation of card faces.
   */
  export type AbstractCardFace = ScryfallObject.Object<ScryfallObject.ObjectType.CardFace>;

  /**
   * A card face found on split cards that are single-sided.
   *
   * E.g. Fuse or Adventure cards, NOT transform cards.
   */
  export type Split = AbstractCardFace &
    ScryfallCardFields.Gameplay.CardFaceSpecific &
    ScryfallCardFields.Print.CardFaceSpecific &
    ScryfallCardFields.Print.CardFaceOnly;

  /**
   * A card face found on double-sided cards.
   *
   * E.g. Transform and MDFC cards.
   */
  export type DoubleSided = AbstractCardFace &
    ScryfallCardFields.Gameplay.CardFaceSpecific &
    ScryfallCardFields.Gameplay.CardSideSpecific &
    ScryfallCardFields.Print.CardFaceSpecific &
    ScryfallCardFields.Print.CardFaceOnly &
    ScryfallCardFields.Print.CardSideSpecific;

  /**
   * A card face found on reversible cards.
   */
  export type Reversible = AbstractCardFace &
    Pick<ScryfallCardFields.Core.All, "oracle_id" | "layout"> &
    Omit<ScryfallCardFields.Gameplay.CardSpecific, "color_identity" | "keywords" | "reserved"> &
    ScryfallCardFields.Gameplay.CardSideSpecific &
    ScryfallCardFields.Gameplay.CardFaceSpecific &
    ScryfallCardFields.Print.CardSideSpecific &
    ScryfallCardFields.Print.CardFaceSpecific &
    ScryfallCardFields.Print.CardFaceOnly;

  export type Any = Split | DoubleSided | Reversible;
}
