# Cereal Lookup Service API

This project is a NestJS-based API for a cereal lookup service. It provides endpoints for managing cereals, user authentication, and CSV file uploads.
- missing features
  Ran out of time for images
  no tests


## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)

## Features

- **Cereal Management**: Create, update, delete, and retrieve cereal data.
- **Authentication**: JWT-based authentication for secure access.
  right now it is hardcoded to 1 single user - user/123
- **CSV Upload**: Upload and parse CSV files containing cereal data.
- **Rate Limiting**: Protects the API from abuse by limiting the number of requests.

## Tech Stack

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Prisma**: A next-generation ORM for Node.js and TypeScript.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **JWT**: JSON Web Tokens for secure authentication.

## Environment Variables
- Create a `.env` file in the root directory and configure the following variables:
  ```
  DATABASE_URL=your_database_url
  SECRET=your_jwt_secret
  ```
## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kompost/spec-week-3-api.git 
   cd spec-week-3-api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up the database**:
   - Ensure you have a PostgreSQL database running.
   ```bash
   docker compose up -d
   ```

4. **Run database migrations**:
- [Contributing](#contributing)
   ```bash
   npx prisma migrate dev
   ```

## Usage

1. **Start the server**:
   ```bash
   npm run start
   ```

2. **Access the API**:
   - The API will be available at `http://localhost:3000/v1/cereal`.

## API Documentation

- The API documentation is available via Swagger at `http://localhost:3000/api`.


