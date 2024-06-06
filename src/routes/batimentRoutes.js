import { Router } from 'express';
import Batiment from '../models/batiment.js'
export const batimentRouter = Router();

batimentRouter.get('/', async (req, res) => {
  try {
    const batiments = await Batiment.findAll();
    res.json(batiments);
  } catch (error) {
    res.status(500).send(error.message || 'Une erreur est survenue');
  }
});

batimentRouter.get('/:id', async (req, res) => {
  try {
    const batiment = await Batiment.findByPk(req.params.id);
    if (batiment) {
      res.json(batiment);
    } else {
      res.status(404).send('Bâtiment non trouvé');
  }
  } catch (error) {
    res.status(500).send(error.message || 'Une erreur est survenue');
  }
});
