enum ScryfallManaType {
  White = "W",
  Blue = "U",
  Black = "B",
  Red = "R",
  Green = "G",
  Colorless = "C",
  /** There is a card that produces a "tap" that can be used to activate a tapped ability on a card without tapping it; see https://scryfall.com/card/24649a26-822e-456f-8f28-8e1d002fdd81. */
  Tap = "T", 
}

export type ScryfallManaTypeLike = ScryfallManaType | `${ScryfallManaType}`;

export type ScryfallManaTypes = ScryfallManaTypeLike[];
