# JSON Formatter API

## Overview

This is a simple Node.js API that formats JSON data by prettifying it with proper indentation. The API accepts unformatted JSON in a POST request and returns a formatted version.

## Tech Stack

**Node.js** - JavaScript runtime environment

**Express.js** - Web framework for handling API requests

**body-parser** - Middleware to parse JSON request bodies

**dotenv** - For managing environment variables

## Installation & Setup

### Prerequisites

Install Node.js and npm (Node Package Manager)

### Steps to Run Locally

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/json-formatter.git
   ```

2. Navigate to the project directory:

   ```sh
   cd json-formatter
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

4. Create a .env file in the root directory and add the following:

   ```env
   PORT=3000
   ```

5. Start the server:

   ```sh
   npm start
   ```

## Usage

### Endpoint: Format JSON

- **URL:** POST /format

- **Request Body:** Unformatted JSON data

- **Response:** Prettified JSON

#### Example Request:

```sh

curl -X POST http://localhost:3000/format -H "Content-Type: application/json" -d '{"name":"John","age":30,"city":"New York"}'
```

#### Example Response:

```sh
{
"name": "John",
"age": 30,
"city": "New York"
}

```

#### Error Handling

If the request body is invalid JSON, the API returns:

```sh
{ "error": "Invalid JSON data" }
```

If an internal server error occurs:

```sh
{ "error": "An error occurred while formatting JSON" }
```
