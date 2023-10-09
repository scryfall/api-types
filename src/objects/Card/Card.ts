import { ScryfallObject } from "../ScryfallObject";
import { ScryfallCardLayout } from "./values/CardLayout";
import { ScryfallCardFace } from "./CardFace";
import { ScryfallCardFields } from "./CardFields";

type LayoutType<T extends ScryfallCardLayout> = Pick<ScryfallCardFields.Core.All, "layout"> & {
  layout: T | `${T}`;
};

export namespace ScryfallCard {
  export type AbstractCard = ScryfallObject.Object<ScryfallObject.ObjectType.Card> & ScryfallCardFields.Core.All;

  type SingleFace = AbstractCard &
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
    ScryfallCardFields.Gameplay.RootProperties &
    ScryfallCardFields.Gameplay.CardSpecific &
    ScryfallCardFields.Gameplay.CardFaces<T> &
    ScryfallCardFields.Print.RootProperties &
    ScryfallCardFields.Print.CardSpecific;

  type SingleSidedSplit = MultiFace<ScryfallCardFace.Split> &
    ScryfallCardFields.Gameplay.CardSideSpecific &
    ScryfallCardFields.Print.CardSideSpecific &
    ScryfallCardFields.Print.SingleSideOnly;

  type DoubleSidedSplit = MultiFace<ScryfallCardFace.DoubleSided>;

  type AlwaysOversized = {
    oversized: true;
  };

  export type Normal = LayoutType<ScryfallCardLayout.Normal> & SingleFace;

  export type Split = LayoutType<ScryfallCardLayout.Split> & SingleSidedSplit;

  export type Flip = LayoutType<ScryfallCardLayout.Flip> & SingleSidedSplit & ScryfallCardFields.Gameplay.CombatStats;

  export type Transform = LayoutType<ScryfallCardLayout.Transform> & DoubleSidedSplit;

  export type ModalDfc = LayoutType<ScryfallCardLayout.ModalDfc> & DoubleSidedSplit;

  export type Meld = LayoutType<ScryfallCardLayout.Meld> & SingleFace;

  export type Leveler = LayoutType<ScryfallCardLayout.Leveler> & SingleFace;

  export type Class = LayoutType<ScryfallCardLayout.Class> & SingleFace;

  export type Saga = LayoutType<ScryfallCardLayout.Saga> & SingleFace;

  export type Adventure = LayoutType<ScryfallCardLayout.Adventure> &
    SingleSidedSplit &
    ScryfallCardFields.Gameplay.CombatStats;

  export type Mutate = LayoutType<ScryfallCardLayout.Mutate> & SingleFace;

  export type Prototype = LayoutType<ScryfallCardLayout.Prototype> & SingleFace;

  export type Battle = LayoutType<ScryfallCardLayout.Battle> & SingleFace;

  export type Planar = LayoutType<ScryfallCardLayout.Planar> & SingleFace & AlwaysOversized;

  export type Scheme = LayoutType<ScryfallCardLayout.Scheme> & SingleFace & AlwaysOversized;

  export type Vanguard = LayoutType<ScryfallCardLayout.Vanguard> &
    SingleFace &
    ScryfallCardFields.Gameplay.VanguardStats &
    ScryfallCardFields.Gameplay.NoCombatStats;

  export type Token = LayoutType<ScryfallCardLayout.Token> & SingleFace;

  export type DoubleFacedToken = LayoutType<ScryfallCardLayout.DoubleFacedToken> & DoubleSidedSplit;

  export type Emblem = LayoutType<ScryfallCardLayout.Emblem> & SingleFace;

  export type Augment = LayoutType<ScryfallCardLayout.Augment> & SingleFace;

  export type Host = LayoutType<ScryfallCardLayout.Host> & SingleFace;

  export type ArtSeries = LayoutType<ScryfallCardLayout.ArtSeries> & DoubleSidedSplit;

  export type ReversibleCard = LayoutType<ScryfallCardLayout.ReversibleCard> &
    Omit<AbstractCard, "oracle_id"> &
    ScryfallCardFields.Gameplay.RootProperties &
    Omit<ScryfallCardFields.Gameplay.CardSpecific, "type_line" | "cmc"> &
    ScryfallCardFields.Gameplay.CardFaces<ScryfallCardFace.Reversible> &
    ScryfallCardFields.Print.RootProperties &
    ScryfallCardFields.Print.CardSpecific;

  export type Any =
    | Normal
    | Split
    | Flip
    | Transform
    | ModalDfc
    | Meld
    | Leveler
    | Class
    | Saga
    | Adventure
    | Mutate
    | Prototype
    | Battle
    | Planar
    | Scheme
    | Vanguard
    | Token
    | DoubleFacedToken
    | Emblem
    | Augment
    | Host
    | ArtSeries
    | ReversibleCard;
}

// TODO handle lang=en -> guaranteed no localisation
// TODO handle image_status=missing -> guaranteed no art info
