import {DataTypes, sequelize} from "../../sequelize.js";
const Capsules = () => {
  return sequelize.define('capsules', {
    id_capsule: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    etat: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'capsules',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_capsule" },
        ]
      },
    ]
  });
};

export default Capsules();