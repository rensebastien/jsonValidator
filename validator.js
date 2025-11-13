import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const ajv = new Ajv();
addFormats(ajv); 

/**
 * Validates JSON data against a JSON schema.
 * @param {object} schema - The JSON schema object.
 * @param {object} data - The JSON data to validate.
 * @returns {{valid: boolean, errors: Array|null|undefined}}
 */
export function validateJson(schema, data) {
  try {
    const validate = ajv.compile(schema);
    const valid = validate(data);
    return {
      valid: valid,
      errors: validate.errors,
    };
  } catch (e) {
    return {
      valid: false,
      errors: [{ message: `Invalid Schema: ${e.message}` }],
    };
  }
}
