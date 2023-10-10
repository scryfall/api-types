import { ScryfallObject } from "../Object";
import { Uri, Uuid, IsoDate } from "../../internal";

export enum ScryfallMigrationStrategy {
  Merge = "merge",
  Delete = "delete",
}

export type ScryfallMigrationStrategyLike = ScryfallMigrationStrategy | `${ScryfallMigrationStrategy}`;

export type ScryfallMigration = ScryfallObject.Object<ScryfallObject.ObjectType.Migration> & {
  /** A link to the current object on Scryfall's API */
  uri: Uri;
  /** This migration's unique UUID */
  id: Uuid;
  /** The date this migration was performed */
  performed_at: IsoDate;
  /** A computer-readable indicator of the migration strategy. */
  migration_strategy: ScryfallMigrationStrategyLike;
  /** The `id` of the affected API Card object */
  old_scryfall_id: Uuid;
  /** The replacement `id` of the API Card object if this is a `merge` */
  new_scryfall_id?: Uuid;
  /** A note left by the Scryfall team about this migration */
  note?: string;
  /** Additional context Scryfall has provided for this migration, designed to be human-read only */
  metadata?: object;
} & (
    | {
        migration_strategy: ScryfallMigrationStrategy.Merge | `${ScryfallMigrationStrategy.Merge}`;
        new_scryfall_id: Uuid;
      }
    | {
        migration_strategy: ScryfallMigrationStrategy.Delete | `${ScryfallMigrationStrategy.Delete}`;
        new_scryfall_id?: undefined;
      }
  );
