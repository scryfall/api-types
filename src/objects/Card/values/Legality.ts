export enum ScryfallLegality {
  Legal = "legal",
  NotLegal = "not_legal",
  Restricted = "restricted",
  Banned = "banned",
}

export type ScryfallLegalityLike = ScryfallLegality | `${ScryfallLegality}`;
