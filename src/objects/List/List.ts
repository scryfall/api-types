import { ScryfallObject } from "../Object";
import { Integer, Uri } from "../../internal";
import { ScryfallCard } from "../Card";
import { ScryfallMigration } from "../Migration";
import { ScryfallRuling } from "../Ruling";
import { ScryfallSet } from "../Set";
import { ScryfallCardSymbol } from "../Symbology";

/**
 * A list of Scryfall objects.
 *
 * @see {@link https://scryfall.com/docs/api/lists}
 */
export namespace ScryfallList {
  /**
   * A list of objects of type T.
   *
   * Lists of cards have an additional property, {@link List.total_cards}, not found on other lists.
   */
  export type List<T> = ScryfallObject.Object<ScryfallObject.ObjectType.List> & {
    /**
     * An array of the requested objects, in a specific order.
     */
    data: T[];
    /**
     * True if this List is paginated and there is a page beyond the current page.
     */
    has_more: boolean;
    /**
     * If there is a page beyond the current page, this field will contain a full API URI to that page. You may submit a HTTP GET request to that URI to continue paginating forward on this List.
     */
    next_page?: Uri;
    /**
     * If this is a list of Card objects, this field will contain the total number of cards found across all pages.
     */
    total_cards?: Integer;
    /**
     * An array of human-readable warnings issued when generating this list, as strings.
     *
     * Warnings are non-fatal issues that the API discovered with your input.
     * In general, they indicate that the List will not contain the all of the information you requested.
     * You should fix the warnings and re-submit your request.
     */
    warnings?: string[];
  } & (
      | {
          has_more: true;
          next_page: Uri;
        }
      | {
          has_more: false;
          next_page?: undefined;
        }
    ) &
    (T extends ScryfallCard.AbstractCard
      ? {
          total_cards: Integer;
        }
      : {
          total_cards?: undefined;
        });

  /**
   * A list of cards.
   *
   * @see {@link ScryfallCard}
   */
  export type Cards = List<ScryfallCard.Any>;

  /**
   * A list of sets.
   *
   * @see {@link ScryfallSet}
   */
  export type Sets = List<ScryfallSet>;

  /**
   * A list of rulings.
   *
   * @see {@link ScryfallRuling}
   */
  export type Rulings = List<ScryfallRuling>;

  /**
   * A list of card symbols.
   *
   * @see {@link ScryfallCardSymbol}
   */
  export type CardSymbols = List<ScryfallCardSymbol>;

  /**
   * A list of migrations.
   *
   * @see {@link ScryfallMigration}
   */
  export type Migrations = List<ScryfallMigration>;
}
