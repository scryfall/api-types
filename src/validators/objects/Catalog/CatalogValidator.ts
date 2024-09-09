import { ScryfallCatalog } from "src/objects";
import { BaseValidator } from "src/validators";

/**
 * CatalogValidator
 *
 *  @extends BaseValidator
 */
export default class CatalogValidator extends BaseValidator {
  expectedKeys: string[] = <Array<keyof ScryfallCatalog>>["object", "uri", "total_values", "data"];

  /**
   * @static
   * @param {object} obj An object to check
   * @returns {boolean} true if the object passes all expected checks
   */
  static isCatalogObject(obj: Record<string, unknown>): obj is ScryfallCatalog {
    const validator = new CatalogValidator(obj);

    return validator.validKeys && validator.validKeyType && validator.validDataType;
  }

  /**
   * true if the object matches all expected keys
   * @type {boolean}
   */
  get validKeys(): boolean {
    return this.keys.every((val) => this.expectedKeys.includes(val));
  }

  /**
   * true if the all keys are of the expected type
   * @type {boolean}
   * */
  get validKeyType(): boolean {
    const objectIsCatalog = this.object.object === "catalog";
    const uriIsString = typeof this.object.uri === "string";
    const totalValsIsNumber = typeof this.object.total_values === "number";
    const dataIsStringArray = this.validDataType;
    return objectIsCatalog && uriIsString && totalValsIsNumber && dataIsStringArray;
  }

  /**
   * true if the 'data' field is the correct type
   * @type {boolean}
   */
  get validDataType(): boolean {
    if (!Array.isArray(this.object.data)) throw new Error("data is not an array");

    const isJSObject = typeof this.object.data === "object";
    const isArray = Array.isArray(this.object.data);
    const onlyHasStrings = this.object.data.every((val) => typeof val === "string");
    return isJSObject && isArray && onlyHasStrings;
  }

  /**
   * true if the 'data' field length matches the 'total_values' number
   * @type {boolean}
   */
  get validDataLength(): boolean {
    if (!Array.isArray(this.object.data)) throw new Error("data is not an array");

    return this.object.data.length === this.object.total_values;
  }
}
