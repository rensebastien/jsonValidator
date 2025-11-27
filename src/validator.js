/**
 * Core validation module using Ajv.
 * @module validator
 */
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import log from './logger.js'; // Import du logger

const ajv = new Ajv();
addFormats(ajv); 

export function validateJson(schema, data) { 
  // DEBUG: Utile pour le développeur pour vérifier ce qui rentre dans la fonction
  log.debug("Validating data against schema...", { dataKeys: Object.keys(data) });

  try {
    const validate = ajv.compile(schema);
    const valid = validate(data);
    
    if (!valid) {
      // WARN: Ce n'est pas une erreur système, mais une validation échouée (Business logic)
      log.warn("Validation failed with errors:", validate.errors);
    } else {
      // INFO: Une étape importante du processus réussie
      log.info("Validation successful.");
    }

    return {
      valid: valid,
      errors: validate.errors,
    };
  } catch (e) {
    // ERROR: Le code a planté (ex: schema invalide), c'est critique
    log.error("CRITICAL: Schema compilation failed", e.message);
    return {
      valid: false,
      errors: [{ message: `Invalid Schema: ${e.message}` }],
    };
  }
}