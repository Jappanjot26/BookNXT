# BookNXT

Welcome to **BookNXT**, your ultimate platform to read, download, and organize your favorite books! Engage with books like never before by rating and commenting on your reads. Explore your personalized digital library and make the most of your reading journey.

---

## Key Features

- **Read and Download:** Access a wide collection of books with options to read online or download for offline access.
- **Organize Your Library:** Save your favorite books and manage them efficiently.
- **Engage:** Save your thoughts with ratings and comments on books.
- **Responsive Design:** Seamlessly works across desktops, tablets, and mobile devices.

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Installation and Setup](#installation-and-setup)
3. [Technologies Used](#technologies-used)
4. [Folder Details](#folder-details)
5. [API Integration](#api-integration)
6. [Contributing](#contributing)
7. [License](#license)

---

## Project Structure

The repository is divided into two main folders:

- **Frontend:** Contains the React.js-based user interface code.
- **Backend:** Contains the Node.js server-side code for API endpoints and authentication.

---

## Installation and Setup

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (v14 or later)
- npm (Node Package Manager)

### Frontend Setup

1. Navigate to the `frontend` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the `backend` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Update `.env` file in the backend folder and configure it as follows:
   ```bash
   PORT=YOUR_PORT_NUMBER
   MONGO_URL=YOUR_MONGO_CONNECTION_STRING
   JWT_SECRET=YOUR_SECRET_KEY
   ```
5. Start the backend server:
   ```bash
   npm start
   ```

---

## Technologies Used

- **Frontend:** React.js, React Router, Tailwind CSS, React Toastify
- **Backend:** Node.js, Express.js, MongoDB (with Mongoose), JWT, bcrypt
- **External Integration:** dbooks API for fetching book data
- **Database:** MongoDB Atlas for cloud database management

---

## Folder Details

- **Frontend**
  - Built with React.js.
  - Implements responsive design using Tailwind CSS.
  - Key routes include `/home`, `/login`, `/register`.

- **Backend**
  - Developed with Express.js.
  - Includes authentication endpoints such as `/auth/login` and `/auth/signup`.
  - Middleware for input validation, error handling, and authentication.

---

## API Integration

BookNXT leverages the **dbooks API** for book data. The backend handles data fetching, error handling, and transformation to ensure a smooth user experience.

---

## Contributing

We welcome contributions! If you'd like to contribute:

1. Fork this repository.
2. Create a new branch for your feature/bug fix.
3. Commit your changes and push to your branch.
4. Create a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for checking out BookNXT and Happy reading! 📚

