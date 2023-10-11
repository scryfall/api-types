import { ScryfallManaCost } from "src";

const _RUX: ScryfallManaCost = {
  object: "mana_cost",
  cost: "{X}{U}{R}",
  colors: ["U", "R"],
  cmc: 2,
  colorless: false,
  monocolored: false,
  multicolored: true,
};

const _8CC: ScryfallManaCost = {
  object: "mana_cost",
  cost: "{8}{C}{C}",
  colors: [],
  cmc: 10.0,
  colorless: true,
  monocolored: false,
  multicolored: false,
};

const _WUBRG: ScryfallManaCost = {
  object: "mana_cost",
  cost: "{W}{U}{B}{R}{G}",
  colors: ["W", "U", "B", "R", "G"],
  cmc: 5.0,
  colorless: false,
  monocolored: false,
  multicolored: true,
};

const _3gg: ScryfallManaCost = {
  object: "mana_cost",
  cost: "{3}{G}{G}",
  colors: ["G"],
  cmc: 5.0,
  colorless: false,
  monocolored: true,
  multicolored: false,
};
