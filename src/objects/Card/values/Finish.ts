export enum ScryfallFinish {
  Nonfoil = "nonfoil",
  Foil = "foil",
  Etched = "etched",
}

export type ScryfallFinishLike = ScryfallFinish | `${ScryfallFinish}`;
