// setup.js
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
};

console.log(`${colors.blue}Starting setup process...${colors.reset}`);

// Ensure .env file exists
if (!fs.existsSync('./server/.env')) {
  console.log(`${colors.yellow}Creating .env file in server directory...${colors.reset}`);
  const envContent = 
`PORT=5000
MONGODB_URI=mongodb://localhost:27017/fullstack-web-app
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d`;
  
  fs.writeFileSync('./server/.env', envContent);
  console.log(`${colors.green}.env file created successfully!${colors.reset}`);
}

// Install root dependencies
try {
  console.log(`${colors.blue}Installing root dependencies...${colors.reset}`);
  execSync('npm install', { stdio: 'inherit' });
  console.log(`${colors.green}Root dependencies installed successfully!${colors.reset}`);
} catch (error) {
  console.error(`${colors.red}Failed to install root dependencies:${colors.reset}`, error);
  process.exit(1);
}

// Install client dependencies
try {
  console.log(`${colors.blue}Installing client dependencies...${colors.reset}`);
  execSync('cd client && npm install', { stdio: 'inherit' });
  console.log(`${colors.green}Client dependencies installed successfully!${colors.reset}`);
} catch (error) {
  console.error(`${colors.red}Failed to install client dependencies:${colors.reset}`, error);
  process.exit(1);
}

// Install admin dependencies
try {
  console.log(`${colors.blue}Installing admin dependencies...${colors.reset}`);
  execSync('cd admin && npm install', { stdio: 'inherit' });
  console.log(`${colors.green}Admin dependencies installed successfully!${colors.reset}`);
} catch (error) {
  console.error(`${colors.red}Failed to install admin dependencies:${colors.reset}`, error);
  process.exit(1);
}

// Install server dependencies
try {
  console.log(`${colors.blue}Installing server dependencies...${colors.reset}`);
  execSync('cd server && npm install', { stdio: 'inherit' });
  console.log(`${colors.green}Server dependencies installed successfully!${colors.reset}`);
} catch (error) {
  console.error(`${colors.red}Failed to install server dependencies:${colors.reset}`, error);
  process.exit(1);
}

console.log(`${colors.green}Setup completed successfully!${colors.reset}`);
console.log(`${colors.yellow}To start all applications, run:${colors.reset} npm run dev`); 