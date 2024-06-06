import { Router } from 'express';
import Compte from '../models/comptes.js';

export const compteRouter = Router();

// Route pour obtenir tous les comptes
compteRouter.get('/', async (req, res) => {
  try {
    const comptes = await Compte.findAll();
    res.json(comptes);
  } catch (error) {
    res.status(500).send(error.message || 'Une erreur est survenue lors de la récupération des comptes');
  }
});

// Route pour obtenir un compte par son ID
compteRouter.get('/:id', async (req, res) => {
  try {
    const compte = await Compte.findByPk(req.params.id);
    if (compte) {
      res.json(compte);
    } else {
      res.status(404).send('Compte non trouvé');
    }
  } catch (error) {
    res.status(500).send(error.message || 'Une erreur est survenue lors de la récupération du compte');
  }
});
