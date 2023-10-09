export enum ScryfallImageSize {
  /**
   * A small image.
   *
   * Dimensions: 146 x 204
   * Size: Approx 10kb
   * Filetype: JPG
   */
  Small = "small",
  /**
   * A normal image.
   *
   * Dimensions: 488 x 680
   * Size: Approx 60kb
   * Filetype: JPG
   */
  Normal = "normal",
  /**
   * A large image.
   *
   * Dimensions: 672 x 936
   * Size: Approx 100kb
   * Filetype: JPG
   */
  Large = "large",
  /**
   * A large PNG with transparent corners.
   *
   * This is the highest quality image with the largest dimensions.
   *
   * Dimensions: 745 x 1040
   * Size: Approx 1mb
   * Filetype: PNG
   */
  Png = "png",
  /**
   * A crop from the PNG representing just the artwork portion of the card.
   *
   * Dimensions: Varies
   * Size: Approx 50kb-100kb
   * Filetype: JPG
   */
  ArtCrop = "art_crop",
  /**
   * A version of the image that crops off a precise amount around the edges to omit the border.
   *
   * Cards receive identical cropping regardless of how thick their actual border is. Even borderless cards will receive the same crop.
   *
   * This image size exists for backwards compatibility with MagicCards.info.
   * Some systems will use this and illustrate their own border around the edge in CSS.
   *
   * Dimensions: 480 x 680
   * Size: Approx 60kb
   * Filetype: JPG
   */
  BorderCrop = "border_crop",
}

export type ScryfallImageSizeLike = ScryfallImageSize | `${ScryfallImageSize}`;
