# Real-Time Chat Application

A real-time chat application built with Spring Boot and React that allows users to create chat rooms and communicate in real-time using WebSocket

## Tech Stack

### Backend
- Java 21
- Spring Boot 3.2.3
- MongoDB
- WebSocket (STOMP protocol)
- Spring Data MongoDB
- Maven

### Frontend
- React + Vite
- React Router DOM
- Axios
- SockJS & STOMP.js
- React Icons
- React Hot Toast
- Tailwind CSS


## Project Structure

```
chat-app-main/
├── chat-app-backend/        # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/       # Java source files
│   │   │   └── resources/  # Configuration files
│   └── pom.xml             # Maven configuration
│
└── front-chat/             # React frontend
    ├── src/
    │   ├── components/     # React components
    │   ├── config/        # Configuration files
    │   ├── services/      # API services
    │   └── context/       # React context
    ├── package.json
    └── vite.config.js
```

## Prerequisites

Before running the application, make sure you have the following installed:

1. Java 21 (JDK)
   ```bash
   # For macOS using Homebrew
   brew install openjdk@21
   ```

2. Node.js and npm
   ```bash
   # For macOS using Homebrew
   brew install node
   ```

3. MongoDB
   ```bash
   # For macOS using Homebrew
   brew install mongodb-community
   brew services start mongodb-community
   ```

## Installation & Setup

1. Clone the repository
   ```bash
   git clone <your-repository-url>
   cd chat-app-main
   ```

2. Backend Setup
   ```bash
   cd chat-app-backend
   
   # If using Maven wrapper (recommended)
   ./mvnw clean install
   
   # Start the backend server
   ./mvnw spring-boot:run
   ```
   The backend server will start on `http://localhost:8081`

3. Frontend Setup
   ```bash
   cd front-chat
   
   # Install dependencies
   npm install
   
   # Start the development server
   npm run dev
   ```
   The frontend will start on `http://localhost:5173` (or the next available port)

## Features

1. Real-time Chat
   - Create new chat rooms
   - Join existing rooms using room ID
   - Real-time message updates
   - Message history persistence
   - User presence tracking

2. User Interface
   - Modern, responsive design
   - Toast notifications for feedback
   - Message timestamps
   - User avatars
   - Real-time message delivery

## Configuration

### Backend Configuration
The backend configuration can be found in `chat-app-backend/src/main/resources/application.properties`:
```properties
spring.application.name=chat-app-backend
spring.data.mongodb.uri=mongodb://localhost:27017/chatapp
server.port=8081
```

### Frontend Configuration
The frontend API configuration can be found in `front-chat/src/config/AxiosHelper.js`:
```javascript
export const baseURL = "http://localhost:8081";
```

## Common Issues & Solutions

1. Port Already in Use
   ```bash
   # Check which process is using the port
   lsof -i :8081
   
   # Kill the process
   kill -9 <PID>
   ```

2. MongoDB Connection Issues
   - Ensure MongoDB is running:
     ```bash
     brew services list
     # or start if not running
     brew services start mongodb-community
     ```

3. CORS Issues
   - The backend is configured to accept requests from all localhost ports
   - If you're running the frontend on a different port, it should work automatically

## Development

1. Backend Development
   - The application uses Spring Boot DevTools for hot reloading
   - Changes to Java files will trigger automatic restart

2. Frontend Development
   - Vite provides hot module replacement (HMR)
   - Changes to React components will reflect immediately


