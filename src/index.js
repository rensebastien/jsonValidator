import { validateJson } from './validator.js';
import log from './logger.js';

// ... (code de récupération des éléments DOM identique) ...
const validateBtn = document.getElementById('validate-btn');
// ...

validateBtn.addEventListener('click', () => {
  log.info("User initiated validation sequence"); // INFO: Action utilisateur

  let schema, data;

  try {
    schema = JSON.parse(schemaInput.value);
  } catch (e) {
    // ERROR: L'utilisateur a entré du JSON malformé
    log.error("Parsing Error - Schema is not valid JSON", e);
    setResult(false, 'Schema is not valid JSON. ' + e.message);
    return;
  }

  try {
    data = JSON.parse(jsonInput.value);
  } catch (e) {
    log.error("Parsing Error - Data is not valid JSON", e);
    setResult(false, 'Input Data is not valid JSON. ' + e.message);
    return;
  }

  const { valid, errors } = validateJson(schema, data);
  console.log(errors);

  if (valid) {
    setResult(true, 'Validation Successful!');
  } else {
    const errorMsg = 'Validation Failed: ' + 
      errors.map(err => `(${err.instancePath || 'root'} ${err.message})`).join(', ');
    setResult(false, errorMsg);
  }
});

function setResult(isValid, message) {
  resultDiv.textContent = message;
  resultDiv.style.color = isValid ? 'green' : 'red';
  resultDiv.style.fontWeight = 'bold';
}
