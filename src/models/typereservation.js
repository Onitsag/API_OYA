import {DataTypes, sequelize} from "../../sequelize.js";
const TypeReservation = () => {
  return sequelize.define('typereservation', {
    id_typeReservation: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    prix: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    duree: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'typereservation',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_typeReservation" },
        ]
      },
    ]
  });
};

export default TypeReservation();