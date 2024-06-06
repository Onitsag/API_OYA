import { Router } from 'express';
import Compte from '../models/comptes.js';
import Role from '../models/roles.js';

export const roleRouter = Router();

// Route pour obtenir le rôle d'un compte par l'ID du compte
roleRouter.get('/compte/:compteId', async (req, res) => {
  try {
    const compte = await Compte.findByPk(req.params.compteId, {
      include: { model: Role, as: 'role' }
    });
    if (compte) {
      res.json(compte.role);
    } else {
      res.status(404).send('Compte non trouvé');
    }
  } catch (error) {
    res.status(500).send(error.message || 'Une erreur est survenue lors de la récupération du rôle du compte');
  }
});
