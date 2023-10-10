import { ScryfallError } from "src";

// https://api.scryfall.com/cards/ktk/0
export const NotFound: ScryfallError = {
  object: "error",
  code: "not_found",
  status: 404,
  details: "No card found with the given ID or set code and collector number.",
};
