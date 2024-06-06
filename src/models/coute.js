import {DataTypes, sequelize} from "../../sequelize.js";
import Factures from "./factures.js";
import Services from "./services.js";
const Coute = () => {
  const CouteModel = sequelize.define('coute', {
    id_service: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'services',
        key: 'id_service'
      }
    },
    id_facture: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'factures',
        key: 'id_facture'
      }
    }
  }, {
    sequelize,
    tableName: 'coute',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_service" },
          { name: "id_facture" },
        ]
      },
      {
        name: "id_facture",
        using: "BTREE",
        fields: [
          { name: "id_facture" },
        ]
      },
    ]
  });
  CouteModel.belongsTo(Factures, { foreignKey: 'id_facture' });
  CouteModel.belongsTo(Services, { foreignKey: 'id_service' });

  return CouteModel;
};

export default Coute();