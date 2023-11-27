import { ScryfallCard, ScryfallObject } from "../src";

declare global {
  type TestCard<T extends ScryfallObject.Object<ScryfallObject.ObjectType.Card>> = T & ScryfallCard.Any;
}
