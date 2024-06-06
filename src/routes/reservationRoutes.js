import { Router } from 'express';
import Reservation from '../models/reservations.js';
import TypeReservation from '../models/typereservation.js';
import Facture from '../models/factures.js';
import Capsule from '../models/capsules.js';

export const reservationRouter = Router();

// Route pour obtenir les réservations d'un compte par l'ID du compte
reservationRouter.get('/compte/:compteId', async (req, res) => {
  try {
    const reservations = await Reservation.findAll({
      where: { id_compte: req.params.compteId },
      include: [
        { model: TypeReservation },
        { model: Facture, as: 'facture' },
        { model: Capsule, as: 'capsule' }
      ]
    });
    res.json(reservations);
  } catch (error) {
    res.status(500).send(error.message || 'Une erreur est survenue lors de la récupération des réservations du compte');
  }
});
