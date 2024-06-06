import {DataTypes, sequelize} from "../../sequelize.js";
const Comptes = () => {
  return sequelize.define('comptes', {
    id_compte: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    prenom: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    adresse: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    telephone: {
      type: DataTypes.BIGINT,
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
    id_role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'roles',
        key: 'id_role'
      }
    }
  }, {
    sequelize,
    tableName: 'comptes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_compte" },
        ]
      },
      {
        name: "id_ville",
        using: "BTREE",
        fields: [
          { name: "id_ville" },
        ]
      },
      {
        name: "id_role",
        using: "BTREE",
        fields: [
          { name: "id_role" },
        ]
      },
    ]
  });
};

export default Comptes();