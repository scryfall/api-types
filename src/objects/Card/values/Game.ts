export enum ScryfallGame {
  /**
   * The printed paper game.
   * Released in 1993.
   */
  Paper = "paper",
  /**
   * Magic: the Gathering Online
   * Released in 2002.
   */
  Mtgo = "mtgo",
  /**
   * Magic: the Gathering: Arena
   * Released in 2018.
   */
  Arena = "arena",
  /**
   * Magic: the Gathering (MicroProse)
   * Released in 1997.
   *
   * This game included an expansion named Astral that included some unique cards.
   */
  Astral = "astral",
  /**
   * Magic: the Gathering (Sega Dreamcast)
   * Released in 2001.
   */
  Sega = "sega",
}

export type ScryfallGameLike = ScryfallGame | `${ScryfallGame}`;
