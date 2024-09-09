/**
 * Represents the most basic needs for a Validator class.
 * @abstract
 * @class BaseValidator
 */
export default abstract class BaseValidator<T extends Record<string, unknown> = Record<string, unknown>> {
  /** The object passed to the Validator */
  object: T;
  /** A list of keys we expect to exist in a given object. */
  abstract expectedKeys: string[];

  /**
   * @constructor
   * @param {object} object The object to test against.
   */
  constructor(object: T) {
    this.object = object;
  }

  /** The keys of the object */
  get keys(): Array<keyof typeof this.object> {
    return Object.keys(this.object);
  }
}
