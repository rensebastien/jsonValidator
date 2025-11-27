# Tutorial: How to validate a User Profile

This tutorial will guide you through validating a simple "User Profile" JSON object using our application.

## 1. Launch the Application
Ensure the development server is running:
```bash
npm start
```

## 2. Define the Schema 
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "minLength": 3
    },
    "age": {
      "type": "integer",
      "minimum": 18
    },
    "email": {
      "type": "string",
      "format": "email"
    }
  },
  "required": [
    "username",
    "email"
  ]
}
```
## 3. Test with data 
```json
{
  "username": "user",
  "age": 25,
  "email": "user@example.com"
}
```
Click Validate. You should see a green "Validation Successful!" message.

## 4. Test with Invalid Data
Try removing the @ from the email. Click Validate again. You will see a red error message explaining exactly why the validation failed.