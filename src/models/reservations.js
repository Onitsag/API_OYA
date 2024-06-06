import {DataTypes, sequelize} from "../../sequelize.js";
import capsules from "./capsules.js";
import factures from "./factures.js";
import TypeReservation from "./typereservation.js"
const Reservations = () => {
  const ReservationsModel = sequelize.define('reservations', {
    id_reservation: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dateDebut: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dateFin: {
      type: DataTypes.DATE,
      allowNull: false
    },
    id_typeReservation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'typereservation',
        key: 'id_typeReservation'
      }
    },
    id_facture: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'factures',
        key: 'id_facture'
      }
    },
    id_capsule: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'capsules',
        key: 'id_capsule'
      }
    },
    id_compte: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'comptes',
        key: 'id_compte'
      }
    }
  }, {
    sequelize,
    tableName: 'reservations',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_reservation" },
        ]
      },
      {
        name: "id_typeReservation",
        using: "BTREE",
        fields: [
          { name: "id_typeReservation" },
        ]
      },
      {
        name: "id_facture",
        using: "BTREE",
        fields: [
          { name: "id_facture" },
        ]
      },
      {
        name: "id_capsule",
        using: "BTREE",
        fields: [
          { name: "id_capsule" },
        ]
      },
      {
        name: "id_compte",
        using: "BTREE",
        fields: [
          { name: "id_compte" },
        ]
      },
    ]
  });

  ReservationsModel.belongsTo(TypeReservation, { foreignKey: 'id_typeReservation' });
  ReservationsModel.belongsTo(factures, { foreignKey: 'id_facture' });
  ReservationsModel.belongsTo(capsules, { foreignKey: 'id_capsule' });

  return ReservationsModel;
};

export default Reservations();