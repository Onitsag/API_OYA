import { Router } from 'express';
import Coute from '../models/coute.js';
import Facture from '../models/factures.js';
import Service from '../models/services.js';
import factures from '../models/factures.js';
import { where } from 'sequelize';

export const factureRouter = Router();

// Route pour obtenir les services d'une facture par l'ID de la facture
factureRouter.get('/:id/services', async (req, res) => {
  try {
    const {id} = req.params;
    const facture = await Coute.findAll( {
      where: {
        id_facture: id
      },
      include: [
        {
          model: Facture,
        },
        {
          model: Service
        }
      ]
    });
    if (facture) {
      res.json(facture);
    } else {
      res.status(404).send('Facture non trouvée');
    }
  } catch (error) {
    res.status(500).send(error.message || 'Une erreur est survenue lors de la récupération des services de la facture');
  }
});
