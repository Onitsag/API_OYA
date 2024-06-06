import {DataTypes, sequelize} from "../../sequelize.js";
const Batiment = () => {
  return sequelize.define('batiment', {
    id_batiment: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    adresse: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    id_ville: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ville',
        key: 'id_ville'
      }
    },
    latitude: {
      type: DataTypes.DECIMAL(20,15),
      allowNull: false
    },
    longitude: {
      type: DataTypes.DECIMAL(20,15),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'batiment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_batiment" },
        ]
      },
      {
        name: "id_ville",
        using: "BTREE",
        fields: [
          { name: "id_ville" },
        ]
      },
    ]
  });
};

export default Batiment();