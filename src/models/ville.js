import {DataTypes, sequelize} from "../../sequelize.js";
const Ville = () => {
  return sequelize.define('ville', {
    id_ville: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    code_postal: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    id_code_iso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'code_iso',
        key: 'id_code_iso'
      }
    }
  }, {
    sequelize,
    tableName: 'ville',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_ville" },
        ]
      },
      {
        name: "id_code_iso",
        using: "BTREE",
        fields: [
          { name: "id_code_iso" },
        ]
      },
    ]
  });
};

export default Ville();