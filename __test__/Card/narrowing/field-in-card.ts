import { ScryfallCard } from "src";

const anyCard = {} as ScryfallCard.Any;

if ("card_faces" in anyCard) {
  const faces = anyCard.card_faces;
  const mfc: ScryfallCard.AnyMultiFaced = anyCard;
} else {
  const sfc: ScryfallCard.AnySingleFaced = anyCard;
}
