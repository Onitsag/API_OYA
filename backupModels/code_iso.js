import {DataTypes, sequelize} from "../../sequelize.js";
const CodeIso = () => {
  return sequelize.define('code_iso', {
    id_code_iso: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'code_iso',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_code_iso" },
        ]
      },
    ]
  });
};

export default CodeIso();