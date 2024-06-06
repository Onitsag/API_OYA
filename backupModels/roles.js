import {DataTypes, sequelize} from "../../sequelize.js";
const Roles = () => {
  return sequelize.define('roles', {
    id_role: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'roles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_role" },
        ]
      },
    ]
  });
};

export default Roles();