import { Router } from 'express';
import SeSitue from '../models/se_situe.js';
import Batiment from '../models/batiment.js';

export const seSitueRouter = Router();


// Route pour obtenir le bâtiment dans lequel se situe une capsule
seSitueRouter.get('/capsule/:id', async (req, res) => {
  try {
    const seSitue = await SeSitue.findOne({
      where: { id_capsule: req.params.id },
      include: { model: Batiment, as: 'batiment' }
    });
    if (seSitue) {
      res.json(seSitue.batiment);
    } else {
      res.status(404).send('Bâtiment non trouvé pour cette capsule');
    }
  } catch (error) {
    res.status(500).send(error.message || 'Une erreur est survenue lors de la récupération du bâtiment');
  }
});
