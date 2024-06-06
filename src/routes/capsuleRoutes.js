import { Router } from 'express';
import Capsule from '../models/capsules.js'

export const capsuleRouter = Router();

capsuleRouter.get('/', async (req, res) => {
  try {
    const capsules = await Capsule.findAll();
    res.json(capsules);
  } catch (error) {
    res.status(500).send(error.message || 'Une erreur est survenue lors de la récupération des capsules');
  }
});

capsuleRouter.get('/:id', async (req, res) => {
  try {
    const capsule = await Capsule.findByPk(req.params.id);
    if (capsule) {
      res.json(capsule);
    } else {
      res.status(404).send('Capsule non trouvée');
    }
  } catch (error) {
    res.status(500).send(error.message || 'Une erreur est survenue lors de la récupération de la capsule');
  }
});
