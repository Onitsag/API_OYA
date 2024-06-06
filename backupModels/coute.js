import {DataTypes, sequelize} from "../../sequelize.js";
const Coute = () => {
  return sequelize.define('coute', {
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
};

export default Coute();