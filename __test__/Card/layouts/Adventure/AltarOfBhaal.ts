import { ScryfallCard } from "src";

const AltarOfBhaal: TestCard<ScryfallCard.Adventure> = {
  object: "card",
  id: "37bd2e21-b292-4c86-bd01-010d4a1af7b2",
  oracle_id: "0a364b66-95df-480b-a733-e90f6d5c4d2b",
  multiverse_ids: [562992],
  tcgplayer_id: 273193,
  cardmarket_id: 660724,
  name: "Altar of Bhaal // Bone Offering",
  lang: "en",
  released_at: "2022-06-10",
  uri: "https://api.scryfall.com/cards/37bd2e21-b292-4c86-bd01-010d4a1af7b2",
  scryfall_uri: "https://scryfall.com/card/clb/109/altar-of-bhaal-bone-offering?utm_source=api",
  layout: "adventure",
  highres_image: true,
  image_status: "highres_scan",
  image_uris: {
    small: "https://cards.scryfall.io/small/front/3/7/37bd2e21-b292-4c86-bd01-010d4a1af7b2.jpg?1674135928",
    normal: "https://cards.scryfall.io/normal/front/3/7/37bd2e21-b292-4c86-bd01-010d4a1af7b2.jpg?1674135928",
    large: "https://cards.scryfall.io/large/front/3/7/37bd2e21-b292-4c86-bd01-010d4a1af7b2.jpg?1674135928",
    png: "https://cards.scryfall.io/png/front/3/7/37bd2e21-b292-4c86-bd01-010d4a1af7b2.png?1674135928",
    art_crop: "https://cards.scryfall.io/art_crop/front/3/7/37bd2e21-b292-4c86-bd01-010d4a1af7b2.jpg?1674135928",
    border_crop: "https://cards.scryfall.io/border_crop/front/3/7/37bd2e21-b292-4c86-bd01-010d4a1af7b2.jpg?1674135928",
  },
  mana_cost: "{1}{B} // {2}{B}",
  cmc: 2.0,
  type_line: "Artifact // Sorcery — Adventure",
  colors: ["B"],
  color_identity: ["B"],
  keywords: [],
  card_faces: [
    {
      object: "card_face",
      name: "Altar of Bhaal",
      mana_cost: "{1}{B}",
      type_line: "Artifact",
      oracle_text:
        "{2}{B}, {T}, Exile a creature you control: Return target creature card from your graveyard to the battlefield. Activate only as a sorcery.",
      artist: "Jonas De Ro",
      artist_id: "561ebf9e-8d93-4b57-8156-8826d0c19601",
      illustration_id: "e3ddeaf1-80b7-44e8-bcff-4673786636e8",
    },
    {
      object: "card_face",
      name: "Bone Offering",
      flavor_name: "",
      mana_cost: "{2}{B}",
      type_line: "Sorcery — Adventure",
      oracle_text:
        "Create a tapped 4/1 black Skeleton creature token with menace. (Then exile this card. You may cast the artifact later from exile.)",
      artist: "Jonas De Ro",
      artist_id: "561ebf9e-8d93-4b57-8156-8826d0c19601",
    },
  ],
  all_parts: [
    {
      object: "related_card",
      id: "18098505-2d75-4310-bf1e-788b85ac3aed",
      component: "combo_piece",
      name: "Altar of Bhaal // Bone Offering",
      type_line: "Artifact // Sorcery — Adventure",
      uri: "https://api.scryfall.com/cards/18098505-2d75-4310-bf1e-788b85ac3aed",
    },
    {
      object: "related_card",
      id: "cf4c245f-af2f-46a7-81f3-670a04940901",
      component: "token",
      name: "Skeleton",
      type_line: "Token Creature — Skeleton",
      uri: "https://api.scryfall.com/cards/cf4c245f-af2f-46a7-81f3-670a04940901",
    },
  ],
  legalities: {
    standard: "not_legal",
    future: "not_legal",
    historic: "legal",
    gladiator: "legal",
    pioneer: "not_legal",
    explorer: "not_legal",
    modern: "not_legal",
    legacy: "legal",
    pauper: "not_legal",
    vintage: "legal",
    penny: "not_legal",
    commander: "legal",
    oathbreaker: "legal",
    brawl: "not_legal",
    historicbrawl: "legal",
    alchemy: "not_legal",
    paupercommander: "not_legal",
    duel: "legal",
    oldschool: "not_legal",
    premodern: "not_legal",
    predh: "not_legal",
  },
  games: ["paper"],
  reserved: false,
  foil: true,
  nonfoil: true,
  finishes: ["nonfoil", "foil"],
  oversized: false,
  promo: false,
  reprint: false,
  variation: false,
  set_id: "5e4c3fe8-fd57-4b20-ad56-c03790a16cea",
  set: "clb",
  set_name: "Commander Legends: Battle for Baldur's Gate",
  set_type: "draft_innovation",
  set_uri: "https://api.scryfall.com/sets/5e4c3fe8-fd57-4b20-ad56-c03790a16cea",
  set_search_uri: "https://api.scryfall.com/cards/search?order=set&q=e%3Aclb&unique=prints",
  scryfall_set_uri: "https://scryfall.com/sets/clb?utm_source=api",
  rulings_uri: "https://api.scryfall.com/cards/37bd2e21-b292-4c86-bd01-010d4a1af7b2/rulings",
  prints_search_uri:
    "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A0a364b66-95df-480b-a733-e90f6d5c4d2b&unique=prints",
  collector_number: "109",
  digital: false,
  rarity: "rare",
  card_back_id: "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
  artist: "Jonas De Ro",
  artist_ids: ["561ebf9e-8d93-4b57-8156-8826d0c19601"],
  illustration_id: "e3ddeaf1-80b7-44e8-bcff-4673786636e8",
  border_color: "black",
  frame: "2015",
  security_stamp: "oval",
  full_art: false,
  textless: false,
  booster: true,
  story_spotlight: false,
  edhrec_rank: 5811,
  preview: {
    source: "Wizards of the Coast",
    source_uri:
      "https://magic.wizards.com/en/articles/archive/card-image-gallery/commander-legends-battle-for-baldurs-gate",
    previewed_at: "2022-05-26",
  },
  prices: {
    usd: "0.21",
    usd_foil: "0.23",
    usd_etched: null,
    eur: "0.40",
    eur_foil: "0.45",
    tix: null,
  },
  related_uris: {
    gatherer: "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=562992",
    tcgplayer_infinite_articles:
      "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Altar+of+Bhaal+%2F%2F+Bone+Offering&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
    tcgplayer_infinite_decks:
      "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Altar+of+Bhaal+%2F%2F+Bone+Offering&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
    edhrec: "https://edhrec.com/route/?cc=Altar+of+Bhaal",
  },
  purchase_uris: {
    tcgplayer:
      "https://www.tcgplayer.com/product/273193?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
    cardmarket:
      "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Altar+of+Bhaal&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
    cardhoarder:
      "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Altar+of+Bhaal&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall",
  },
};