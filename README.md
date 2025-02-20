# Task Management Application

A full-stack web application built using Next.js for the frontend and NestJS for the backend, with MongoDB as the database. This project provides a structured and scalable solution for managing tasks with efficient API handling and state management.

## Technologies Used

### Frontend: Next.js
Next.js is a React framework that enables server-side rendering and static site generation. It provides an optimized development experience and seamless API integration.

### Backend: NestJS
NestJS is a progressive Node.js framework that uses TypeScript and follows a modular architecture. It simplifies backend development with built-in support for dependency injection and structured APIs.

### Database: MongoDB
MongoDB is a NoSQL database that stores data in flexible JSON-like documents. It is used in this project to persist application data efficiently.

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [MongoDB](https://www.mongodb.com/) (locally installed or using a cloud provider like MongoDB Atlas)

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/sakshamdev123/Task-Management-Application.git
   cd server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the backend root and add the following variables:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the NestJS server:
   ```sh
   npm run start
   ```
   The backend will run on `http://localhost:5000` (or the specified `PORT`).

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd ../client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the Next.js development server:
   ```sh
   npm run dev
   ```
   The frontend will be available at `http://localhost:3000`.

## API Documentation

### Base URL
```
http://localhost:5000/api/tasks
```

### Endpoints

#### Get All Tasks
```
GET /api/tasks
```
**Response:**
```json
[
  {
    "id": "1",
    "title": "Sample Task",
    "description": "Task description",
    "status": "pending"
  }
]
```

#### Get Task by ID
```
GET /api/tasks/:id
```
**Response:**
```json
{
  "id": "1",
  "title": "Sample Task",
  "description": "Task description",
  "status": "pending"
}
```

#### Create a Task
```
POST /api/tasks
```
**Request Body:**
```json
{
  "title": "New Task",
  "description": "Task details",
  "status": "pending"
}
```
**Response:**
```json
"Task created successfully"
```

#### Update a Task
```
PUT /api/tasks/:id
```
**Request Body:**
```json
{
  "title": "Updated Task",
  "description": "Updated details",
  "status": "completed"
}
```
**Response:**
```json
"Task updated successfully"
```

#### Delete a Task
```
DELETE /api/tasks/:id
```
**Response:**
```json
"Task deleted successfully"
```

## Testing

### Running Tests
Backend tests are written using Jest and Supertest. To run the tests, execute the following command inside the backend directory:
```sh
npm run test
```

### Test Reports
After running tests, you can generate a coverage report using:
```sh
npm run test:cov
```
This will create a detailed report on test coverage, indicating which parts of the application are covered by tests. The reports are generated inside the `coverage` directory.

## Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries, reach out via sakshamdev9@gmail.com.

