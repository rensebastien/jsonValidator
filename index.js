import { validateJson } from './validator.js';

// Get DOM elements
const schemaInput = document.getElementById('schema-input');
const jsonInput = document.getElementById('json-input');
const validateBtn = document.getElementById('validate-btn');
const resultDiv = document.getElementById('result');

validateBtn.addEventListener('click', () => {
  let schema, data;

  try {
    schema = JSON.parse(schemaInput.value);
  } catch (e) {
    setResult(false, 'Schema is not valid JSON. ' + e.message);
    return;
  }

  try {
    data = JSON.parse(jsonInput.value);
  } catch (e) {
    setResult(false, 'Input Data is not valid JSON. ' + e.message);
    return;
  }

  const { valid, errors } = validateJson(schema, data);

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
