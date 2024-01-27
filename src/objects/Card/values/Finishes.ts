export enum ScryfallBasicFinish {
  Nonfoil = "nonfoil",
  Foil = "foil",
  Etched = "etched",
}

export type ScryfallBasicFinishLike = ScryfallBasicFinish | `${ScryfallBasicFinish}`;

export enum ScryfallExtendedFinish {
  /**
   * A glossy finish.
   */
  Glossy = "glossy",
  /**
   * The silverfoil finish.
   */
  SilverFoil = "silverfoil",
  /**
   * The confetti foil finish. This looks glimmery like confetti laying on top of the card.
   */
  ConfettiFoil = "confettifoil",
  /**
   * Galaxy foil.
   */
  GalaxyFoil = "galaxyfoil",
  /**
   * Halo foil.
   */
  HaloFoil = "halofoil",
  /**
   * Surge foil
   */
  SurgeFoil = "surgefoil",
  /**
   * Double the rainbow vs normal cards.
   */
  DoubleRainbow = "doublerainbow",
  /**
   * A textured foil finish.
   */
  Textured = "textured",
  /**
   * A Phyrexian finish that involved dark cards embossed with shiny black gloss.
   */
  Oilslick = "oilslick",
  /**
   * Neon ink embossd on the card frame and art.
   */
  NeonInk = "neonink",
  /**
   * A Capenna foil style that embosses the art deco frame with shininess.
   */
  Gilded = "gilded",
  /**
   * Rainbow phyrexian symbols patterned over the card face.
   * @trivia The name was a reference to "step and repeat", a style of pattern used in printing banners.
   */
  StepAndCompleat = "stepandcompleat",
  /**
   * A glossy finish with an emblem embossed on it.
   *
   * Examples include the D&D Ampersand logo or REX Jurassic Park logo.
   */
  Embossed = "embossed",
  /**
   * The Dungeons & Dragons glossy finish that superimposed an ampersand over the card.
   *
   * @deprecated This is replaced by {@link Embossed} instead.
   */
  Ampersand = "ampersand",
  /**
   * A special treatment applied to certain guild leader cards.
   */
  RavnicaCity = "ravnicacity",
}

export type ScryfallExtendedFinishLike = ScryfallExtendedFinish | `${ScryfallExtendedFinish}`;
