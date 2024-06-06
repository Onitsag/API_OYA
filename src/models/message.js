import {DataTypes, sequelize} from "../../sequelize.js";
import typemessage from "./typemessage.js";
const Messages = () => {
  const Message = sequelize.define('message', {
    id_message: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contenu: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    date_msg: {
      type: DataTypes.DATE,
      allowNull: false
    },
    id_compte: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'comptes',
        key: 'id_compte'
      }
    },
    id_typeMessage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'typemessage',
        key: 'id_typeMessage'
      }
    }
  }, {
    sequelize,
    tableName: 'message',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_message" },
        ]
      },
      {
        name: "id_compte",
        using: "BTREE",
        fields: [
          { name: "id_compte" },
        ]
      },
      {
        name: "id_typeMessage",
        using: "BTREE",
        fields: [
          { name: "id_typeMessage" },
        ]
      },
    ]
  });
  Message.belongsTo(typemessage, { foreignKey: 'id_typeMessage' });
  return Message;
};

export default Messages();