const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./services/db'); // Connexion à la base de données
const userRoutes = require('./routes/userRoutes'); // Import user routes
const bookRoutes = require('./routes/bookRoutes'); // Import book routes
const loanRoutes = require('./routes/loanRoutes'); // Import loan routes
const app = express();
app.use(express.json());
app.use(cors()); 
app.use(bodyParser.json()); // Parse JSON requests
app.use(bodyParser.urlencoded({ extended: true }));

// Test the database connection
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synced successfully (force).');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });


// Use the user routes for /users and authentication routes
app.use('/user', userRoutes);
app.use('/book', bookRoutes);
app.use('/loan', loanRoutes);


// Test root route
app.get('/', (req, res) => {
  res.send('Welcome to the library Management API');
});

// Define the server port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
