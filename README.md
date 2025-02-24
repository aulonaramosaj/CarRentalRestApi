# Car Rental REST API

## 📌 Project Description

The **Car Rental REST API** is built using **Node.js**, **Express.js**, and **MongoDB**. This API allows users to register, log in, view available rental cars, and retrieve their profile information. JWT authentication is used to secure specific endpoints.

## Features

- **User Registration**: Users can create accounts with a username, email, and password.
- **JWT Authentication**: Secure login and access to protected routes.
- **Car Management**: Add and retrieve available rental cars.
- **Filtering & Sorting**: Get rental cars based on criteria such as year, color, steering type, and number of seats.

## Key Components

- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JSON Web Tokens (JWT)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/aulonaramosaj/CarRentalRestApi.git
   cd CarRentalRestApi
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:\
   Create a `.env` file in the root directory and add:
   ```ini
   PORT=3000
   DATABASE_URL=mongodb://localhost:27017/carRental
   JWT_SECRET=supersecretkey
   ```
4. Run the server using nodemon:
   ```bash
   npm run devStart
   ```
   The API will run on `http://localhost:3000`.

## Usage

### **Register a New User**

- Open the `route.rest` file and send the following request:
  ```http
  POST http://localhost:3000/register
  Content-Type: application/json

  {
    "fullName": "Full Name",
    "email": "email@mail.com",
    "username": "username",
    "password": "password123"
  }
  ```

### **Log In**

- Open the `route.rest` file and send the following request:
  ```http
  POST http://localhost:3000/login
  Content-Type: application/json

  {
    "username": "username",
    "password": "password123"
  }
  ```
- The response includes a JWT token:
  ```json
  {
    "token": "your_jwt_token"
  }
  ```

### **Get User Profile (Protected Route)**

- Open the `route.rest` file and send the following request with the JWT token:
  ```http
  GET http://localhost:3000/my-profile
  Content-Type: application/json
  x-auth-token: your_jwt_token
  ```

### **Retrieve Available Rental Cars**

- Open the `route.rest` file and send the following request:
  ```http
  GET http://localhost:3000/rental-cars
  ```
- Apply filters as query parameters (e.g., `year`, `color`).
  ```http
  GET http://localhost:3000/rental-cars?year=2020&color=white
  ```

### **Testing the API**

- You can test the API using **VS Code REST Client**.
- To use the REST Client, install it as an extension on VS Code.
- A `route.rest` file is included in the repository, containing predefined test requests for all endpoints.
- Alternatively, you can test the API using:
  - **Postman**: Import the `route.rest` requests into Postman and test the endpoints.
  - **curl**: Use curl commands in the terminal to send requests.

