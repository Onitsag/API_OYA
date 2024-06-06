import {DataTypes, sequelize} from "../../sequelize.js";
const Relie = () => {
  return sequelize.define('relie', {
    id_compte: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'comptes',
        key: 'id_compte'
      }
    },
    id_batiment: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'batiment',
        key: 'id_batiment'
      }
    }
  }, {
    sequelize,
    tableName: 'relie',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_compte" },
          { name: "id_batiment" },
        ]
      },
      {
        name: "id_batiment",
        using: "BTREE",
        fields: [
          { name: "id_batiment" },
        ]
      },
    ]
  });
};

export default Relie();