# JSON Validator (Webpack Project)

This project is a simple JSON validator web application created to demonstrate modern build tool usage with Webpack and npm.
It provides a UI to validate a JSON data object against a JSON schema, reporting success or failure.

## Build and Setup
### Prerequisites

* [Node.js](https://nodejs.org/) (which includes npm)

### 1. Installation

Clone the repository and install all project dependencies:


```sh
git clone [your-repo-link]
cd jsonValidator
# Install dependencies (from package.json)
npm install
```

---

## Usage

There are two main scripts to run the project.

### 1. Development (Recommended)

This command starts a live development server. It will automatically build the project, open it in your browser, and watch your source files for changes, reloading the browser as you code.

```sh
npm start
```

This will typically open the app at `http://localhost:8080`.

### 2. Production Build

This command builds and packages the application for production. It optimizes and minifies the code, and all output files are placed in the `/dist` folder.

```sh
npm run build
```

You can then view the built project by opening the `dist/index.html` file directly in your browser.

