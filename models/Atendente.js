const { Model, DataTypes } = require("sequelize");

class Atendente extends Model {
  static init(conexao) {
    super.init(
      {
        nome: DataTypes.STRING,
        funcao: DataTypes.STRING,
        carga: DataTypes.STRING,
        foto: DataTypes.STRING,
      },
      { sequelize: conexao, freezeTableName: true, tableName: "atendentes" }
    );
  }
}

module.exports = Atendente;
