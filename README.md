# Backend Server

This is a Node.js backend server project written in TypeScript.

## Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/shrut012/express-ts-server.git
    cd express-ts-server
    ```

2. Install the dependencies:

    Using npm:
    ```sh
    npm install
    ```

    Using yarn:
    ```sh
    yarn install
    ```

## Running the Server

1. To start the server, run:

    Using npm:
    ```sh
    npm start
    ```

    Using yarn:
    ```sh
    yarn start
    ```

## Project Structure
slidely-backend
│   package.json
│   tsconfig.json
└───src
    │   index.ts
    └───data
            db.json


- `src/index.ts`: Main entry point of the application.
- `src/data/db.json`: Example data file.
- `package.json`: Project metadata and dependency definitions.
- `tsconfig.json`: TypeScript configuration file.

## Scripts

- `start`: Runs the compiled JavaScript in production mode.

## Configuration

- Modify `src/data/db.json` to adjust the initial data used by the server.
- Or set is as an empty list.

