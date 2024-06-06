import {DataTypes, sequelize} from "../../sequelize.js";
import comptes from "./comptes.js";
import Services from "./services.js";
const Factures = () => {
  const FacturesModel = sequelize.define('factures', {
    id_facture: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    montant_total: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
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
    tableName: 'factures',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_facture" },
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
  FacturesModel.belongsTo(comptes, { foreignKey: 'id_compte' });

  return FacturesModel;
};

export default Factures();