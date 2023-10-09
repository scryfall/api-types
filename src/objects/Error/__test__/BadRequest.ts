import { ScryfallError } from "../Error";

// https://api.scryfall.com/cards/search?q=is%3Aslick+cmc%3Ecmc
const BadRequest: ScryfallError = {
  object: "error",
  code: "bad_request",
  status: 400,
  warnings: [
    "Invalid expression “is:slick” was ignored. Checking if cards are “slick” is not supported",
    "Invalid expression “cmc>cmc” was ignored. The sides of your comparison must be different.",
  ],
  details: "All of your terms were ignored.",
};
