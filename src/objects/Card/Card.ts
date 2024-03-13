import { ScryfallObject } from "../Object";
import { ScryfallLayout, ScryfallLayoutGroup } from "./values";
import { ScryfallCardFace } from "./CardFace";
import { ScryfallCardFields } from "./CardFields";

type Layout<T extends ScryfallLayout> = Pick<ScryfallCardFields.Core.All, "layout"> & {
  layout: T | `${T}`;
};

/**
 * A collection of types representing Scryfall cards of each possible layout.
 *
 *
 * This collection is focused around four core varieties of cards:
 * - {@link ScryfallCard.AnySingleFaced} describes any card with one face and no `card_faces` property, e.g. {@link ScryfallCard.Normal Normal} or {@link ScryfallCard.Saga Saga}.
 * - {@link ScryfallCard.AnySingleSidedSplit} describes any card with multiple faces where both faces are on the front, e.g. {@link ScryfallCard.Adventure Adventure}, {@link ScryfallCard.Flip Flip}, or {@link ScryfallCard.Split Split}.
 * - {@link ScryfallCard.AnyDoubleSidedSplit} describes any card with multiple faces where the faces are on the front and back of the card, e.g.  {@link ScryfallCard.Transform Transform},  {@link ScryfallCard.ModalDfc ModalDfc}, or  {@link ScryfallCard.ReversibleCard ReversibleCard}.
 * - {@link ScryfallCard.ReversibleCard} describes solely reversible cards.
 *
 * It also provides broader groupings:
 * - {@link ScryfallCard.Any} describes any card at all. Think of it as like `any` but for cards.
 * - {@link ScryfallCard.AnySplit} is an alias for either AnySingleSidedSplit or AnyDoubleSidedSplit.
 * - {@link ScryfallCard.AnyMultiFaced} is an alias for AnySingleSidedSplit, AnyDoubleSidedSplit, or Reversible. This describes all layouts that can have a `card_faces` field.
 *
 * We recommend starting from `ScryfallCard.Any` to describe generic API responses, and you will need to do type narrowing to access more specific fields.
 *
 * An individual type additionally exists for each possible layout: {@link ScryfallCard.Normal}, {@link ScryfallCard.Transform}, etc, which is like the variety they belong to but with the `layout` field guaranteed to be a specific value.
 *
 * @example // Type narrowing by layout
 * const mysteryCard: ScryfallCard.Any = getCard();
 *
 * if (mysteryCard.layout === ScryfallLayout.Transform) {
 *   const transform: ScryfallCard.Transform = mysteryCard;
 * }
 *
 * @example // Type narrowing by property
 * const mysteryCard: ScryfallCard.Any = getCard();
 *
 * if ("card_faces" in mysteryCard) {
 *   const mfc: ScryfallCard.AnyMultiFaced = mysteryCard;
 * } else {
 *   const sfc: ScryfallCard.AnySingleFaced = mysteryCard;
 * }
 *
 *
 * @see {@link https://scryfall.com/docs/api/cards}
 * @see {@link https://scryfall.com/docs/api/layouts}
 */
export namespace ScryfallCard {
  /** The abstract root implementation of cards. */
  export type AbstractCard = ScryfallObject.Object<ScryfallObject.ObjectType.Card> & ScryfallCardFields.Core.All;
}

export namespace ScryfallCard {
  /**
   * Any card with a single-faced layout.
   *
   * Examples: {@link ScryfallLayout.Normal}, {@link ScryfallLayout.Mutate}, {@link ScryfallLayout.Token}.
   */
  export type AnySingleFaced = AbstractCard &
    Layout<ScryfallLayoutGroup.SingleFacedType> &
    ScryfallCardFields.Gameplay.RootProperties &
    ScryfallCardFields.Gameplay.CardSpecific &
    ScryfallCardFields.Gameplay.CardFaceSpecific &
    ScryfallCardFields.Gameplay.CardSideSpecific &
    ScryfallCardFields.Print.RootProperties &
    ScryfallCardFields.Print.SingleSideOnly &
    ScryfallCardFields.Print.CardSpecific &
    ScryfallCardFields.Print.CardSideSpecific &
    ScryfallCardFields.Print.CardFaceSpecific;

  /** A card with the Normal layout. */
  export type Normal = AnySingleFaced & Layout<ScryfallLayout.Normal>;

  /** A card with the Meld layout. */
  export type Meld = AnySingleFaced & Layout<ScryfallLayout.Meld>;

  /** A card with the Leveler layout. */
  export type Leveler = AnySingleFaced & Layout<ScryfallLayout.Leveler>;

  /** A card with the Class layout. */
  export type Class = AnySingleFaced & Layout<ScryfallLayout.Class>;

  /** A card with the Saga layout. */
  export type Saga = AnySingleFaced & Layout<ScryfallLayout.Saga>;

  /** A card with the Mutate layout. */
  export type Mutate = AnySingleFaced & Layout<ScryfallLayout.Mutate>;

  /** A card with the Prototype layout. */
  export type Prototype = AnySingleFaced & Layout<ScryfallLayout.Prototype>;

  /** A card with the Battle layout. */
  export type Battle = AnySingleFaced & Layout<ScryfallLayout.Battle>;

  /** A card with the Planar layout. */
  export type Planar = AnySingleFaced & Layout<ScryfallLayout.Planar>;

  /** A card with the Scheme layout. */
  export type Scheme = AnySingleFaced & Layout<ScryfallLayout.Scheme>;

  /** A card with the Vanguard layout. */
  export type Vanguard = AnySingleFaced & Layout<ScryfallLayout.Vanguard>;

  /** A card with the Token layout. */
  export type Token = AnySingleFaced & Layout<ScryfallLayout.Token>;

  /** A card with the Emblem layout. */
  export type Emblem = AnySingleFaced & Layout<ScryfallLayout.Emblem>;

  /** A card with the Augment layout. */
  export type Augment = AnySingleFaced & Layout<ScryfallLayout.Augment>;

  /** A card with the Host layout. */
  export type Host = AnySingleFaced & Layout<ScryfallLayout.Host>;
}

export namespace ScryfallCard {
  type MultiFace<Face extends ScryfallCardFace.AbstractCardFace> = AbstractCard &
    ScryfallCardFields.Gameplay.RootProperties &
    ScryfallCardFields.Gameplay.CardSpecific &
    ScryfallCardFields.Gameplay.CardFaces<Face> &
    ScryfallCardFields.Print.RootProperties &
    ScryfallCardFields.Print.CardSpecific;

  /**
   * Any split layout, either single sided or double sided. These will both have `card_faces`.
   */
  export type AnySplit = AnySingleSidedSplit | AnyDoubleSidedSplit;

  /**
   * Any single-sided split card. These all have `card_faces`, and the faces are both on the front.
   *
   * Examples: {@link ScryfallLayout.Split}, {@link ScryfallLayout.Flip}, {@link ScryfallLayout.Adventure}.
   */
  export type AnySingleSidedSplit = MultiFace<ScryfallCardFace.Split> &
    Layout<ScryfallLayoutGroup.SingleSidedSplitType> &
    ScryfallCardFields.Gameplay.CardSideSpecific &
    ScryfallCardFields.Gameplay.CombatStats &
    ScryfallCardFields.Print.CardSideSpecific &
    ScryfallCardFields.Print.SingleSideOnly;

  /** A card with the Split layout. */
  export type Split = AnySingleSidedSplit & Layout<ScryfallLayout.Split>;

  /** A card with the Flip layout. */
  export type Flip = AnySingleSidedSplit & Layout<ScryfallLayout.Flip>;

  /** A card with the Adventure layout. */
  export type Adventure = AnySingleSidedSplit & Layout<ScryfallLayout.Adventure>;

  /**
   * Any double-sided split card. These all have `card_faces`, and the faces are on the obverse and reverse of the card.
   *
   * Examples: {@link ScryfallLayout.Transform}, {@link ScryfallLayout.ModalDfc}, {@link ScryfallLayout.DoubleFacedToken}.
   */
  export type AnyDoubleSidedSplit = MultiFace<ScryfallCardFace.DoubleSided> &
    Layout<ScryfallLayoutGroup.DoubleSidedSplitType>;

  /** A card with the Transform layout. */
  export type Transform = AnyDoubleSidedSplit & Layout<ScryfallLayout.Transform>;

  /** A card with the ModalDfc layout. */
  export type ModalDfc = AnyDoubleSidedSplit & Layout<ScryfallLayout.ModalDfc>;

  /** A card with the DoubleFacedToken layout. */
  export type DoubleFacedToken = AnyDoubleSidedSplit & Layout<ScryfallLayout.DoubleFacedToken>;

  /** A card with the ArtSeries layout. */
  export type ArtSeries = AnyDoubleSidedSplit & Layout<ScryfallLayout.ArtSeries>;
}

export namespace ScryfallCard {
  /** A card with the ReversibleCard layout. */
  export type ReversibleCard = Layout<ScryfallLayout.ReversibleCard> &
    Omit<AbstractCard, "oracle_id"> &
    ScryfallCardFields.Gameplay.RootProperties &
    Omit<ScryfallCardFields.Gameplay.CardSpecific, "type_line" | "cmc"> &
    ScryfallCardFields.Gameplay.CardFaces<ScryfallCardFace.Reversible> &
    ScryfallCardFields.Print.RootProperties &
    ScryfallCardFields.Print.CardSpecific;
}

export namespace ScryfallCard {
  /**
   * A card with an indeterminate layout.
   *
   * An object of this value may be any card at all.
   *
   * Since this may be of any layout, common fields are available, but layout-specific fields (e.g. card_faces) will be unavailable until you perform type narrowing on
   */
  export type Any = AnySingleFaced | AnySingleSidedSplit | AnyDoubleSidedSplit | ReversibleCard;

  /**
   * Any card that is multifaced: either a single or double sided split layout, or a reversible card.
   */
  export type AnyMultiFaced = AnySingleSidedSplit | AnyDoubleSidedSplit | ReversibleCard;
}
