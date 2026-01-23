# EpicEats

EpicEats is a full-stack food delivery web application. It features a customer-facing frontend to order food, a backend API to handle the business logic, and an admin panel to manage the food items and orders.

## Project Structure

The project is a monorepo with three main parts:

-   `frontend`: A React application for customers.
-   `backend`: A Node.js and Express API.
-   `admin`: A React application for administrators.

## Features

### Frontend (Customer)

-   Browse food items by category.
-   Add food items to the cart.
-   User authentication (signup and login).
-   Place orders and proceed to payment (integrates with Stripe and Razorpay).
-   View order history.
-   Update user profile.

### Admin Panel

-   Add new food items with details like name, description, price, category, and an image.
-   View a list of all food items.
-   Remove food items.
-   View and manage customer orders.

## Technologies Used

### Frontend

-   React
-   React Router for routing.
-   Vite as a build tool.
-   Axios for API requests.
-   Framer Motion for animations.
-   AOS for scroll animations.

### Backend

-   Node.js
-   Express.js framework.
-   MongoDB with Mongoose for the database.
-   JSON Web Tokens (JWT) for authentication.
-   Multer for handling file uploads.
-   Stripe and Razorpay for payment processing.

### Admin Panel

-   React
-   React Router for routing.
-   Vite as a build tool.
-   Axios for API requests.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js and npm installed.
-   MongoDB installed and running.

### Installation & Setup

1.  **Clone the repository:**

    ```
    git clone https://github.com/rudradas05/EpicEats.git
    cd EpicEats
    ```

2.  **Setup the Backend:**

    -   Navigate to the `backend` directory:
        ```sh
        cd backend
        ```
    -   Install the dependencies:
        ```sh
        npm install
        ```
    -   Create a `.env` file in the `backend` directory and add the following environment variables. Replace the values with your own.
        ```
        PORT=4000
        FRONTEND_URL="http://localhost:5173"
        MONGO_URI=<Your_MongoDB_Connection_String>
        JWT_SECRET=<Your_JWT_Secret>
        STRIPE_SECRET_KEY= stripe test api key
        ```
    -   Start the backend server:
        ```sh
        npm run server
        ```

3.  **Setup the Frontend:**

    -   Navigate to the `frontend` directory:
        ```sh
        cd ../frontend
        ```
    -   Install the dependencies:
        ```sh
        npm install
        ```
    -   Create a `.env` file in the `frontend` directory and add the backend URL:
        ```
        VITE_BACKEND_URL=http://localhost:4000
        ```
    -   Start the frontend development server:
        ```sh
        npm run dev
        ```

4.  **Setup the Admin Panel:**

    -   Navigate to the `admin` directory:
        ```sh
        cd ../admin
        ```
    -   Install the dependencies:
        ```sh
        npm install
        ```
    -   Create a `.env` file in the `admin` directory and add the backend URL:
        ```
        VITE_BACKEND_URL=http://localhost:4000
        ```
    -   Start the admin panel development server:
        ```sh
        npm run dev
        ```

Now you can access:
- Frontend at `http://localhost:5173` (or whatever port Vite chooses)
- Admin Panel at `http://localhost:5174` (or another port chosen by Vite)
- Backend API is running on `http://localhost:4000`

## API Endpoints

The backend API provides the following endpoints:

-   `POST /api/user/register` - Register a new user.
-   `POST /api/user/login` - Login a user.
-   `GET /api/food/list` - Get a list of all food items.
-   `POST /api/cart/add` - Add an item to the cart.
-   `POST /api/cart/remove` - Remove an item from the cart.
-   `GET /api/cart/get` - Get cart items.
-   `POST /api/order/place` - Place a new order.
-   `POST /api/order/verify` - Verify a payment.
-   `POST /api/order/userorders` - Get orders for a user.

The admin panel uses these additional endpoints:

-   `POST /api/food/add` - Add a new food item.
-   `POST /api/food/remove` - Remove a food item.
-   `GET /api/order/list` - List all orders.
-   `POST /api/order/status` - Update order status.