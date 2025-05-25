# React Context API Demo

This project demonstrates the implementation and usage of React's Context API for state management, along with React Router for navigation.

## Learning Resources

This project was inspired by and created following the Context API tutorial by Hitesh Choudhary on his YouTube channel "Chai aur Code".

Tutorial Video: [Understanding React Context API](https://youtu.be/JQVBGtZMqgU)

## Project Overview

This application features a simple login system where user data is managed through Context API, eliminating the need for prop drilling.

## Key Components

### 1. Context Setup (`UserContext.js`)

```javascript
import { createContext } from "react";

const UserContext = createContext();

export default UserContext;
```

Creates the context that will be used throughout the application.

### 2. Context Provider (`UserProvider.jsx`)

```javascript
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
```

Manages the user state and provides it to all child components.

### 3. Routing Setup (`App.jsx`)

```javascript
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
```

Handles navigation between Login and Profile pages.

### 4. Application Entry (`main.jsx`)

Configures the application with necessary providers:

- `StrictMode` for development checks
- `BrowserRouter` for routing
- `UserContextProvider` for context management

### 5. Components

#### Login Component

- Handles user authentication
- Uses Tailwind CSS for styling
- Implements form validation
- Navigates to profile upon successful login

#### Profile Component

- Displays user information if logged in
- Shows "Please Login" message if not authenticated
- Protected route implementation (recommended)

## Additional Recommendations

1. Add error handling in the login form
2. Implement loading states
3. Add proper logout functionality
4. Consider adding protected route wrapper
5. Add input validation
6. Implement persistent storage (localStorage/sessionStorage)

## Technologies Used

- React
- React Router Dom
- Context API
- Tailwind CSS

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```
