import {DataTypes, sequelize} from "../../sequelize.js";
const Services = () => {
  return sequelize.define('services', {
    id_service: {
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
    description: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'services',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_service" },
        ]
      },
    ]
  });
};

export default Services();