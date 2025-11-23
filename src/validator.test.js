import { validateJson } from './validator.js';

// Mock simple pour éviter de polluer la console pendant les tests
jest.mock('./logger.js', () => ({
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
  levels: { DEBUG: 1 }
}));

describe('JSON Validator Logic', () => {
  
  const simpleSchema = {
    type: "object",
    properties: {
      name: { type: "string" },
      age: { type: "integer" }
    },
    required: ["name"]
  };

  test('should return true for valid data', () => {
    const validData = { name: "Sebastien", age: 25 };
    const result = validateJson(simpleSchema, validData);
    
    expect(result.valid).toBe(true);
    expect(result.errors).toBeNull();
  });

  test('should return false for invalid data type', () => {
    const invalidData = { name: "Sebastien", age: "twenty-five" }; // age should be integer
    const result = validateJson(simpleSchema, invalidData);
    
    expect(result.valid).toBe(false);
    expect(result.errors[0].instancePath).toBe("/age");
  });

  test('should handle invalid schema gracefully', () => {
    const brokenSchema = { type: "object", properties: { name: { type: "unknownType" } } };
    const data = { name: "test" };
    
    const result = validateJson(brokenSchema, data);
    
    expect(result.valid).toBe(false);
    expect(result.errors[0].message).toContain("Invalid Schema");
  });
});