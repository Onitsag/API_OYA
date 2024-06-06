import express from "express";
import axios from "axios";
import http from "http";
import { Sequelize } from "sequelize";
import bodyParser from "body-parser";
import { config as configDotenv } from 'dotenv';

// Import des routes
import { batimentRouter } from './src/routes/batimentRoutes.js';
import { capsuleRouter } from './src/routes/capsuleRoutes.js';
import { compteRouter } from './src/routes/compteRoutes.js';
import { messageRouter } from './src/routes/messageRoutes.js';
import { seSitueRouter } from './src/routes/seSitueRoutes.js';
import { reservationRouter } from './src/routes/reservationRoutes.js';
import { roleRouter } from './src/routes/roleRoutes.js';
import { factureRouter } from './src/routes/factureRoutes.js';


import cors from "cors";

configDotenv();

// Configuration initiale
const app = express();
const port = process.env.portApp;
const server = http.createServer(app);
console.log(process.env.DB_OYA_NAME);
console.log(process.env.DB_OYA_USER);
console.log(process.env.DB_OYA_PASSWORD);
console.log(process.env.DB_OYA_HOST);
const sequelize = new Sequelize(`${process.env.DB_OYA_NAME}`, `${process.env.DB_OYA_USER}`, `${process.env.DB_OYA_PASSWORD}`, {
    host: `${process.env.DB_OYA_HOST}`,
    dialect: 'mariadb'
});

// CORS
app.use(cors());

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

// Connexion à la base de données
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connexion à la base de données établie avec succès.');
    } catch (error) {
        console.error('Impossible de se connecter à la base de données:', error);
    }
})();

// Configuration des vues
app.use(express.urlencoded({ extended: true }));

// Routes API
app.get('/', (req, res) => {
    res.send(`
      <h1>Bienvenue sur notre API</h1>
      <p>Voici les routes disponibles :</p>
      <ul>
        <li><a href="/batiments">/batiments</a> - Récupère tous les bâtiments</li>
        <li><a href="/batiments/1">/batiments/:id</a> - Récupère un bâtiment par son ID (remplacez :id par un ID valide)</li>
        <li><a href="/capsules">/capsules</a> - Récupère toutes les capsules</li>
        <li><a href="/capsules/1">/capsules/:id</a> - Récupère une capsule par son ID (remplacez :id par un ID valide)</li>
        <li><a href="/comptes">/comptes</a> - Récupère tous les comptes</li>
        <li><a href="/comptes/1">/comptes/:id</a> - Récupère un compte par son ID (remplacez :id par un ID valide)</li>
        <li><a href="/messages">/messages</a> - Récupère tous les messages</li>
        <li><a href="/messages/compte/1">/messages/compte/:compteId</a> - Récupère tous les messages d'un compte (remplacez :compteId par un ID valide)</li>
        <li><a href="/messages/11">/messages/:id</a> - Récupère un message par son ID (remplacez :id par un ID valide)</li>
        <li><a href="/se_situe/capsule/1">/se_situe/capsule/:id</a> - Récupère le bâtiment d'une capsule (remplacez :id par un ID valide)</li>
        <li><a href="/reservations/compte/1">/reservations/compte/:compteId</a> - Récupère les réservations d'un compte (remplacez :compteId par un ID valide)</li>
        <li><a href="/roles/compte/1">/roles/compte/:compteId</a> - Récupère le rôle d'un compte (remplacez :compteId par un ID valide)</li>
        <li><a href="/factures/1/services">/factures/:id/services</a> - Récupère les services d'une facture (remplacez :id par un ID valide)</li>
      </ul>
    `);
  });
app.use('/batiments', batimentRouter);
app.use('/capsules', capsuleRouter);
app.use('/comptes', compteRouter);
app.use('/messages', messageRouter);
app.use('/se_situe', seSitueRouter);
app.use('/reservations', reservationRouter);
app.use('/roles', roleRouter);
app.use('/factures', factureRouter);

// Démarrage du serveur
server.listen(port, () => console.log(`Server running on http://localhost:${port}`));
