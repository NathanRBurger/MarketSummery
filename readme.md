# Market Summary Comparison

This application, named `market-summary-comparison`, is designed to compare market summary data between two different cryptocurrency exchanges: Chainex and Valr.

## Installation

To use this application, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.

## Usage

This application provides several scripts to facilitate development and execution:

- `npm start`: Runs the compiled code located in the `dist/index.js` file.
- `npm run dev`: Utilizes `concurrently` to watch for TypeScript changes and restarts the server using `nodemon`.
- `npm run build`: Compiles the TypeScript code into JavaScript.

## Dependencies

This application relies on the following dependencies:

- **axios** (^1.6.7): A promise-based HTTP client for making requests.
- **node-cache** (^5.1.2): A caching mechanism for Node.js.

## Dev Dependencies

Additionally, the following dev dependencies are used for development and build processes:

- **@types/axios** (^0.14.0): TypeScript type definitions for Axios.
- **@types/concurrently** (^7.0.0): TypeScript type definitions for Concurrently.
- **@types/node** (^17.0.41): TypeScript type definitions for Node.js.
- **@types/node-cache** (^4.2.5): TypeScript type definitions for node-cache.
- **@types/nodemon** (^1.19.2): TypeScript type definitions for Nodemon.
- **@types/typescript** (^2.0.0): TypeScript type definitions for TypeScript.
- **concurrently** (^8.2.2): Utility to run multiple commands concurrently.
- **nodemon** (^3.0.1): Utility that automatically restarts the server when files change.
- **typescript** (^5.3.3): A superset of JavaScript that compiles to plain JavaScript.

## Author

This application was authored by Nathan-Reece Burger.
