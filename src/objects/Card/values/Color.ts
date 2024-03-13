export enum ScryfallColor {
  White = "W",
  Blue = "U",
  Black = "B",
  Red = "R",
  Green = "G",
  /** Colorless is not a color, but sometimes this API uses it as one. */
  Colorless = "C",
}

export type ScryfallColors = `${ScryfallColor}`[];
