enum ScryfallManaType {
  White = "W",
  Blue = "U",
  Black = "B",
  Red = "R",
  Green = "G",
  Colorless = "C",
}

export type ScryfallManaTypeLike = ScryfallManaType | `${ScryfallManaType}`;

export type ScryfallManaTypes = ScryfallManaTypeLike[];
