import {DataTypes, sequelize} from "../../sequelize.js";
const TypeMessage = () => {
  return sequelize.define('typemessage', {
    id_typeMessage: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING(15),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'typemessage',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_typeMessage" },
        ]
      },
    ]
  });
};

export default TypeMessage();