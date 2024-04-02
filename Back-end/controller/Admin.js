const bcrypt = require('bcryptjs'); // Import bcryptjs instead of bcrypt
const User = require('../models/Admin');

async function login(req, res) {
    try {
        const { username, password } = req.body;

        // Validate input data
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        if (username !== 'Admin@123') {
            return res.status(403).json({ message: 'Unauthorized access' });
        }

        // Use bcryptjs to compare passwords
        const isAdminPassword = await bcrypt.compare(password, '$2a$10$d5bY9l5yF3YHtTV3rC00q.5hYcAD8.8rrJODwT/xumR8dJhtbwq9W'); 
        if (!isAdminPassword) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Send HTTP redirect response
        res.status(200).json({ message: 'Admin login successful', redirectTo: '/Jobpost' });
    } catch (error) {
        console.error('Login failed', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    login
};
