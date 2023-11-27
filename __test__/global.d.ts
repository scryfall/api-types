import { ScryfallCard } from "../src";
import { ScryfallObject } from "../src/objects/Object";

declare global {
  type TestCard<T extends ScryfallObject.Object<ScryfallObject.ObjectType.Card>> = T & ScryfallCard.Any;
}
