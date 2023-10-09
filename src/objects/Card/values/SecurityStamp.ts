export enum ScryfallSecurityStamp {
  Oval = "oval",
  Triangle = "triangle",
  Acorn = "acorn",
  Circle = "circle",
  Arena = "arena",
  Heart = "heart",
}

export type ScryfallSecurityStampLike = ScryfallSecurityStamp | `${ScryfallSecurityStamp}`;
