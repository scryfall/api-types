import { ScryfallObject } from "../Object";

export enum ScryfallMigrationStrategy {
  Merge = "merge",
  Delete = "delete",
}

export type ScryfallMigrationStrategyLike = ScryfallMigrationStrategy | `${ScryfallMigrationStrategy}`;

/**
 * A data migration.
 *
 * @see {@link https://scryfall.com/docs/api/migrations}
 */
export type ScryfallMigration = ScryfallObject.Object<ScryfallObject.ObjectType.Migration> & {
  /**
   * A link to the current object on Scryfall's API
   *
   * @type URI
   */
  uri: string;
  /**
   * This migration's unique UUID
   *
   * @type UUID
   */
  id: string;
  /**
   * The date this migration was performed
   *
   * @type IsoDate
   */
  performed_at: string;
  /**
   * A computer-readable indicator of the migration strategy.
   */
  migration_strategy: ScryfallMigrationStrategyLike;
  /**
   * The `id` of the affected API Card object
   *
   * @type UUID
   */
  old_scryfall_id: string;
  /**
   * The replacement `id` of the API Card object if this is a `merge`
   *
   * @type UUID
   */
  new_scryfall_id?: string;
  /**
   * A note left by the Scryfall team about this migration
   */
  note?: string;
  /**
   * Additional context Scryfall has provided for this migration, designed to be human-read only
   */
  metadata?: object;
};
