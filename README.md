# Full-Stack Web Application

A complete web application with client, admin panel, and server components.

## Project Structure

- **Client:** React/Vite public frontend (Port 3000)
- **Admin:** React/Vite admin panel (Port 3001)
- **Server:** Node.js/Express/TypeScript backend with MongoDB (Port 5000)

## Installation

```bash
# Install all dependencies (root, client, admin, server)
npm run install-all
```

## Running the Application

### Start all components simultaneously
```bash
npm run dev
```

### Start components individually
```bash
# Start client (public frontend)
npm run client

# Start admin panel
npm run admin

# Start server
npm run server
```

## Accessing the Application

- **Client (Public Frontend):** http://localhost:3000
- **Admin Panel:** http://localhost:3001
- **Server API:** http://localhost:5000/api

## Troubleshooting

### Port Conflicts
If you encounter port conflicts, you can modify the ports in:
- Client: `client/vite.config.js`
- Admin: `admin/vite.config.js`
- Server: Update the port in `server/src/index.ts`

### TypeScript Server Issues
If you encounter TypeScript server issues:
1. Make sure you've installed all dependencies
2. Check that your Node.js version is compatible (v16+ recommended)
3. The server is configured to use CommonJS modules

## Database Setup
The application uses MongoDB. Make sure MongoDB is installed and running on your system, or use MongoDB Atlas.

The default connection string is typically: `mongodb://127.0.0.1:27017/your-database-name`

## Environment Variables
Create a `.env` file in the server directory with:

```
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/your-database-name
JWT_SECRET=your-secret-key
```

## Technology Stack

- **Frontend & Admin**: React, React Router, Axios, TailwindCSS, Vite
- **Backend**: Node.js, Express.js, TypeScript, JWT Authentication
- **Database**: MongoDB with Mongoose
- **Development**: Concurrently for running all apps simultaneously

## Creating an Admin User

To access the admin panel, you'll need to create an admin user:

1. Make sure the server is running
2. Use a tool like Postman or curl to send a POST request:
   - URL: `http://localhost:5000/api/auth/register`
   - Method: POST
   - Headers: `Content-Type: application/json`
   - Body:
   ```json
   {
     "name": "Admin User",
     "email": "admin@example.com",
     "password": "password123",
     "role": "admin"
   }
   ```

## Development Notes

- The client and admin applications are configured with Vite for fast development
- API requests from both client and admin are proxied to the server
- Authentication is handled via JWT tokens

## License

[MIT](LICENSE) 