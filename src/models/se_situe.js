import {DataTypes, sequelize} from "../../sequelize.js";
import batiment from "./batiment.js";
const SeSitue = () => {
  const SeSitueModel = sequelize.define('se_situe', {
    id_capsule: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'capsules',
        key: 'id_capsule'
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
    tableName: 'se_situe',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_capsule" },
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
  SeSitueModel.belongsTo(batiment, { foreignKey: 'id_batiment' });
  
  return SeSitueModel;
};

export default SeSitue();