import {DataTypes, sequelize} from "../../sequelize.js";
const TypeMessage = () => {
  const TypeMessage = sequelize.define('typemessage', {
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

  TypeMessage.associate = function(models) {
    TypeMessage.hasMany(models.Message, { foreignKey: 'id_typeMessage', as: 'messages' });
  };

  return TypeMessage;
};

export default TypeMessage();