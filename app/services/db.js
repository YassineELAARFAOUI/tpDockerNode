const { Sequelize } = require('sequelize');

// Connexion à la base de données MySQL
const sequelize = new Sequelize('db', 'user', 'user', {
    host: 'mysql-container', // Nom du service MySQL dans Docker Compose
    dialect: 'mysql',
    logging: false, // Désactiver les logs SQL
});

// Vérification de la connexion à la base de données
sequelize.authenticate()
    .then(() => {
        console.log('Connexion à la base de données réussie !');
    })
    .catch((error) => {
        console.error('Impossible de se connecter à la base de données:', error);
    });

module.exports = sequelize;
