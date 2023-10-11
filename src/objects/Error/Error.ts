import { ScryfallObject } from "../Object";
import { Integer } from "../../internal";

/**
 * An error response from the Scryfall API.
 *
 * Scryfall API responses may return this if something goes wrong.
 *
 * @see {@link https://scryfall.com/docs/api/errors}
 */
export type ScryfallError = ScryfallObject.Object<ScryfallObject.ObjectType.Error> & {
  /**
   * An integer HTTP status code for this error.
   */
  status: Integer;
  /**
   * A computer-friendly string representing the appropriate HTTP status code.
   */
  code: string;
  /**
   * A human-readable string explaining the error.
   */
  details: string;
  /**
   * A computer-friendly string that provides additional context for the main error.
   * For example, an endpoint many generate HTTP 404 errors for different kinds of input.
   * This field will provide a label for the specific kind of 404 failure, such as ambiguous.
   */
  type?: string;
  /**
   * If your input also generated non-failure warnings, they will be provided as human-readable strings in this array.
   */
  warnings?: string[];
};
