import { ScryfallObject } from "../Object";
import { ScryfallLayout, ScryfallLayoutGroup } from "./values";
import { ScryfallCardFace } from "./CardFace";
import { ScryfallCardFields } from "./CardFields";
import { SomePartial } from "src/internal";

type Layout<T extends ScryfallLayout> = Pick<ScryfallCardFields.Core.All, "layout"> & {
  layout: T | `${T}`;
};

/**
 * A collection of types representing Scryfall cards of each possible layout.
 *
 *
 * An individual type exists for each possible layout: {@link ScryfallCard.Normal}, {@link ScryfallCard.Transform}, etc.
 *
 * Then various groups exist to help describe cards of indeterminate layout:
 * - {@link ScryfallCard.Any} describes any card at all. Think of it as like `any` but for cards.
 * - {@link ScryfallCard.AnySingleFaced} describes any card with one face and no `card_faces` property, e.g. {@link ScryfallCard.Normal Normal} or {@link ScryfallCard.Saga Saga}.
 * - {@link ScryfallCard.AnyMultiFaced} describes any card with multiple faces. It may be a split card with both "faces" on the front, or a double-sided card with faces on the front and back of the card. It also collects the next two groups on this list.
 * - {@link ScryfallCard.AnySingleSidedSplit} describes any card with multiple faces where both faces are on the front, e.g. {@link ScryfallCard.Adventure Adventure}, {@link ScryfallCard.Flip Flip}, or {@link ScryfallCard.Split Split}.
 * - {@link ScryfallCard.AnyDoubleSidedSplit} describes any card with multiple faces where the faces are on the front and back of the card, e.g.  {@link ScryfallCard.Transform Transform},  {@link ScryfallCard.ModalDfc ModalDfc}, or  {@link ScryfallCard.ReversibleCard ReversibleCard}.
 *
 * We recommend starting from `ScryfallCard.Any` to describe generic API responses, and you will need to do type narrowing to access more specific fields.
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

  type SingleFace = AbstractCard &
    Layout<ScryfallLayoutGroup.SingleFaceType> &
    ScryfallCardFields.Gameplay.RootProperties &
    ScryfallCardFields.Gameplay.CardSpecific &
    ScryfallCardFields.Gameplay.CardFaceSpecific &
    ScryfallCardFields.Gameplay.CardSideSpecific &
    ScryfallCardFields.Print.RootProperties &
    ScryfallCardFields.Print.SingleSideOnly &
    ScryfallCardFields.Print.CardSpecific &
    ScryfallCardFields.Print.CardSideSpecific &
    ScryfallCardFields.Print.CardFaceSpecific;

  type MultiFace<T extends ScryfallCardFace.AbstractCardFace> = AbstractCard &
    Layout<ScryfallLayoutGroup.MultiFaceType> &
    ScryfallCardFields.Gameplay.RootProperties &
    ScryfallCardFields.Gameplay.CardSpecific &
    ScryfallCardFields.Gameplay.CardFaces<T> &
    ScryfallCardFields.Print.RootProperties &
    ScryfallCardFields.Print.CardSpecific;

  type SingleSidedSplit = MultiFace<ScryfallCardFace.Split> &
    Layout<ScryfallLayoutGroup.SingleSidedSplitType> &
    ScryfallCardFields.Gameplay.CardSideSpecific &
    ScryfallCardFields.Print.CardSideSpecific &
    ScryfallCardFields.Print.SingleSideOnly;

  type DoubleSidedSplit = MultiFace<ScryfallCardFace.DoubleSided> & Layout<ScryfallLayoutGroup.DoubleSidedSplitType>;

  type AlwaysOversized = {
    oversized: true;
  };

  /** A card with the Normal layout. */
  export type Normal = Layout<ScryfallLayout.Normal> & SingleFace;

  /** A card with the Meld layout. */
  export type Meld = Layout<ScryfallLayout.Meld> & SingleFace;

  /** A card with the Leveler layout. */
  export type Leveler = Layout<ScryfallLayout.Leveler> & SingleFace;

  /** A card with the Class layout. */
  export type Class = Layout<ScryfallLayout.Class> & SingleFace;

  /** A card with the Saga layout. */
  export type Saga = Layout<ScryfallLayout.Saga> & SingleFace;

  /** A card with the Mutate layout. */
  export type Mutate = Layout<ScryfallLayout.Mutate> & SingleFace;

  /** A card with the Prototype layout. */
  export type Prototype = Layout<ScryfallLayout.Prototype> & SingleFace;

  /** A card with the Battle layout. */
  export type Battle = Layout<ScryfallLayout.Battle> & SingleFace;

  /** A card with the Planar layout. */
  export type Planar = Layout<ScryfallLayout.Planar> & SingleFace & AlwaysOversized;

  /** A card with the Scheme layout. */
  export type Scheme = Layout<ScryfallLayout.Scheme> & SingleFace & AlwaysOversized;

  /** A card with the Vanguard layout. */
  export type Vanguard = Layout<ScryfallLayout.Vanguard> &
    SingleFace &
    ScryfallCardFields.Gameplay.VanguardStats &
    ScryfallCardFields.Gameplay.NoCombatStats;

  /** A card with the Token layout. */
  export type Token = Layout<ScryfallLayout.Token> & SingleFace;

  /** A card with the Emblem layout. */
  export type Emblem = Layout<ScryfallLayout.Emblem> & SingleFace;

  /** A card with the Augment layout. */
  export type Augment = Layout<ScryfallLayout.Augment> & SingleFace;

  /** A card with the Host layout. */
  export type Host = Layout<ScryfallLayout.Host> & SingleFace;

  /** A card with the Split layout. */
  export type Split = Layout<ScryfallLayout.Split> & SingleSidedSplit;

  /** A card with the Flip layout. */
  export type Flip = Layout<ScryfallLayout.Flip> & SingleSidedSplit & ScryfallCardFields.Gameplay.CombatStats;

  /** A card with the Adventure layout. */
  export type Adventure = Layout<ScryfallLayout.Adventure> & SingleSidedSplit & ScryfallCardFields.Gameplay.CombatStats;

  /** A card with the Transform layout. */
  export type Transform = Layout<ScryfallLayout.Transform> & DoubleSidedSplit;

  /** A card with the ModalDfc layout. */
  export type ModalDfc = Layout<ScryfallLayout.ModalDfc> & DoubleSidedSplit;

  /** A card with the DoubleFacedToken layout. */
  export type DoubleFacedToken = Layout<ScryfallLayout.DoubleFacedToken> & DoubleSidedSplit;

  /** A card with the ArtSeries layout. */
  export type ArtSeries = Layout<ScryfallLayout.ArtSeries> & DoubleSidedSplit;

  /** A card with the ReversibleCard layout. */
  export type ReversibleCard = Layout<ScryfallLayout.ReversibleCard> &
    Omit<AbstractCard, "oracle_id"> &
    Omit<ScryfallCardFields.Gameplay.CardSpecific, "type_line" | "cmc"> &
    ScryfallCardFields.Gameplay.RootProperties &
    ScryfallCardFields.Gameplay.CardFaces<ScryfallCardFace.Reversible> &
    ScryfallCardFields.Print.RootProperties &
    ScryfallCardFields.Print.CardSpecific;

  /**
   * A card with an indeterminate layout.
   *
   * An object of this value may be any card at all.
   *
   * Since this may be of any layout, common fields are available, but layout-specific fields (e.g. card_faces) will be unavailable until you perform type narrowing on
   */
  export type Any =
    | Normal
    | Meld
    | Leveler
    | Class
    | Saga
    | Mutate
    | Prototype
    | Battle
    | Planar
    | Scheme
    | Vanguard
    | Token
    | Emblem
    | Augment
    | Host
    | Split
    | Flip
    | Adventure
    | Transform
    | ModalDfc
    | DoubleFacedToken
    | ArtSeries
    | ReversibleCard;

  type ReversibleCardBlob = SomePartial<AbstractCard, "oracle_id"> &
    SomePartial<ScryfallCardFields.Gameplay.CardSpecific, "type_line" | "cmc"> &
    ScryfallCardFields.Gameplay.RootProperties &
    ScryfallCardFields.Gameplay.CardFaces<ScryfallCardFace.Reversible> &
    ScryfallCardFields.Print.RootProperties &
    ScryfallCardFields.Print.CardSpecific;
    type AllFightingStats = (Partial<ScryfallCardFields.Gameplay.CombatStats> & Partial<ScryfallCardFields.Gameplay.VanguardStats>)
  export type Blob = AbstractCard &
    (Partial<SingleFace> &
      Partial<SingleSidedSplit> &
      Partial<DoubleSidedSplit> &
      Partial<Vanguard> &
      Partial<ReversibleCardBlob>) &
     &AllFightingStats
    ScryfallCardFields.Gameplay.CardFaces<
      ScryfallCardFace.AbstractCardFace &
      AllFightingStats
    >;

  /**
   * Any card with a single-faced layout. These all have a .
   *
   * Examples: {@link Normal}, {@link Mutate}, {@link Token}.
   */
  export type AnySingleFaced = Any & Layout<ScryfallLayoutGroup.SingleFaceType>;

  /**
   * Any multi-faced layout, which is any that would have a `card_faces` field.
   *
   * @see {@link AnySingleSidedSplit} is in this group.
   * @see {@link AnyDoubleSidedSplit} is in this group.
   * @see {@link ReversibleCard} is in this group.
   */
  export type AnyMultiFaced = Any & Layout<ScryfallLayoutGroup.MultiFaceType>;

  /**
   * Any single-sided split card. These all have `card_faces`, and the faces are both on the front.
   *
   * Examples: {@link Split}, {@link Flip}, {@link Adventure}.
   */
  export type AnySingleSidedSplit = Any & Layout<ScryfallLayoutGroup.SingleSidedSplitType>;

  /**
   * Any double-sided split card. These all have `card_faces`, and the faces are on the obverse and reverse of the card.
   *
   * Examples: {@link Transform}, {@link ModalDfc}, {@link DoubleFacedToken}.
   */
  export type AnyDoubleSidedSplit = Any & Layout<ScryfallLayoutGroup.DoubleSidedSplitType>;
}
