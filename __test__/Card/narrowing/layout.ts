import { ScryfallCard, ScryfallLayout } from "src";

const anyCard = {} as ScryfallCard.Any;

if (anyCard.layout === ScryfallLayout.Normal) {
  const specific: TestCard<ScryfallCard.Normal> = anyCard;
  const grouped: TestCard<ScryfallCard.AnySingleFaced> = anyCard;
}
if (anyCard.layout === ScryfallLayout.Meld) {
  const specific: TestCard<ScryfallCard.Meld> = anyCard;
  const grouped: TestCard<ScryfallCard.AnySingleFaced> = anyCard;
}
if (anyCard.layout === ScryfallLayout.Leveler) {
  const specific: TestCard<ScryfallCard.Leveler> = anyCard;
  const grouped: TestCard<ScryfallCard.AnySingleFaced> = anyCard;
}
if (anyCard.layout === ScryfallLayout.Class) {
  const specific: TestCard<ScryfallCard.Class> = anyCard;
  const grouped: TestCard<ScryfallCard.AnySingleFaced> = anyCard;
}
if (anyCard.layout === ScryfallLayout.Saga) {
  const specific: TestCard<ScryfallCard.Saga> = anyCard;
  const grouped: TestCard<ScryfallCard.AnySingleFaced> = anyCard;
}
if (anyCard.layout === ScryfallLayout.Mutate) {
  const specific: TestCard<ScryfallCard.Mutate> = anyCard;
  const grouped: TestCard<ScryfallCard.AnySingleFaced> = anyCard;
}
if (anyCard.layout === ScryfallLayout.Prototype) {
  const specific: TestCard<ScryfallCard.Prototype> = anyCard;
  const grouped: TestCard<ScryfallCard.AnySingleFaced> = anyCard;
}
if (anyCard.layout === ScryfallLayout.Battle) {
  const specific: TestCard<ScryfallCard.Battle> = anyCard;
  const grouped: TestCard<ScryfallCard.AnySingleFaced> = anyCard;
}
if (anyCard.layout === ScryfallLayout.Planar) {
  const specific: TestCard<ScryfallCard.Planar> = anyCard;
  const grouped: TestCard<ScryfallCard.AnySingleFaced> = anyCard;
}
if (anyCard.layout === ScryfallLayout.Scheme) {
  const specific: TestCard<ScryfallCard.Scheme> = anyCard;
  const grouped: TestCard<ScryfallCard.AnySingleFaced> = anyCard;
}
if (anyCard.layout === ScryfallLayout.Vanguard) {
  const specific: TestCard<ScryfallCard.Vanguard> = anyCard;
  const grouped: TestCard<ScryfallCard.AnySingleFaced> = anyCard;
}
if (anyCard.layout === ScryfallLayout.Token) {
  const specific: TestCard<ScryfallCard.Token> = anyCard;
  const grouped: TestCard<ScryfallCard.AnySingleFaced> = anyCard;
}
if (anyCard.layout === ScryfallLayout.Emblem) {
  const specific: TestCard<ScryfallCard.Emblem> = anyCard;
  const grouped: TestCard<ScryfallCard.AnySingleFaced> = anyCard;
}
if (anyCard.layout === ScryfallLayout.Augment) {
  const specific: TestCard<ScryfallCard.Augment> = anyCard;
  const grouped: TestCard<ScryfallCard.AnySingleFaced> = anyCard;
}
if (anyCard.layout === ScryfallLayout.Host) {
  const specific: TestCard<ScryfallCard.Host> = anyCard;
  const grouped: TestCard<ScryfallCard.AnySingleFaced> = anyCard;
}

if (anyCard.layout === ScryfallLayout.Split) {
  const specific: TestCard<ScryfallCard.Split> = anyCard;
  const anyMultiFaced: TestCard<ScryfallCard.AnyMultiFaced> = anyCard;
  const anySingleSidedSplit: TestCard<ScryfallCard.AnySingleSidedSplit> = anyCard;
}
if (anyCard.layout === ScryfallLayout.Flip) {
  const specific: TestCard<ScryfallCard.Flip> = anyCard;
  const anyMultiFaced: TestCard<ScryfallCard.AnyMultiFaced> = anyCard;
  const anySingleSidedSplit: TestCard<ScryfallCard.AnySingleSidedSplit> = anyCard;
}
if (anyCard.layout === ScryfallLayout.Adventure) {
  const specific: TestCard<ScryfallCard.Adventure> = anyCard;
  const anyMultiFaced: TestCard<ScryfallCard.AnyMultiFaced> = anyCard;
  const anySingleSidedSplit: TestCard<ScryfallCard.AnySingleSidedSplit> = anyCard;
}

if (anyCard.layout === ScryfallLayout.Transform) {
  const specific: TestCard<ScryfallCard.Transform> = anyCard;
  const anyMultiFaced: TestCard<ScryfallCard.AnyMultiFaced> = anyCard;
  const anyDoubleSidedSplit: TestCard<ScryfallCard.AnyDoubleSidedSplit> = anyCard;
}
if (anyCard.layout === ScryfallLayout.ModalDfc) {
  const specific: TestCard<ScryfallCard.ModalDfc> = anyCard;
  const anyMultiFaced: TestCard<ScryfallCard.AnyMultiFaced> = anyCard;
  const anyDoubleSidedSplit: TestCard<ScryfallCard.AnyDoubleSidedSplit> = anyCard;
}
if (anyCard.layout === ScryfallLayout.DoubleFacedToken) {
  const specific: TestCard<ScryfallCard.DoubleFacedToken> = anyCard;
  const anyMultiFaced: TestCard<ScryfallCard.AnyMultiFaced> = anyCard;
  const anyDoubleSidedSplit: TestCard<ScryfallCard.AnyDoubleSidedSplit> = anyCard;
}
if (anyCard.layout === ScryfallLayout.ArtSeries) {
  const specific: TestCard<ScryfallCard.ArtSeries> = anyCard;
  const anyMultiFaced: TestCard<ScryfallCard.AnyMultiFaced> = anyCard;
  const anyDoubleSidedSplit: TestCard<ScryfallCard.AnyDoubleSidedSplit> = anyCard;
}

if (anyCard.layout === ScryfallLayout.ReversibleCard) {
  const specific: TestCard<ScryfallCard.ReversibleCard> = anyCard;
  const anyMultiFaced: TestCard<ScryfallCard.AnyMultiFaced> = anyCard;
}
