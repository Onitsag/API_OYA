import { Router } from 'express';
import Message from '../models/message.js';
import TypeMessage from '../models/typemessage.js';

export const messageRouter = Router();

// Route pour obtenir tous les messages
messageRouter.get('/', async (req, res) => {
  try {
    const messages = await Message.findAll({
      include: { model: TypeMessage }
    });
    res.json(messages);
  } catch (error) {
    res.status(500).send(error.message || 'Une erreur est survenue lors de la récupération des messages');
  }
});

// Route pour obtenir les messages d'un compte par l'ID du compte
messageRouter.get('/compte/:compteId', async (req, res) => {
  try {
    const messages = await Message.findAll({
      where: { id_compte: req.params.compteId },
      include: { model: TypeMessage }
    });
    res.json(messages);
  } catch (error) {
    res.status(500).send(error.message || 'Une erreur est survenue lors de la récupération des messages du compte');
  }
});

// Route pour obtenir un message par son ID
messageRouter.get('/:id', async (req, res) => {
  try {
    const message = await Message.findByPk(req.params.id, {
      include: { model: TypeMessage }
    });
    if (message) {
      res.json(message);
    } else {
      res.status(404).send('Message non trouvé');
    }
  } catch (error) {
    res.status(500).send(error.message || 'Une erreur est survenue lors de la récupération du message');
  }
});
