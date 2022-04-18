const { Model, DataTypes } = require("sequelize");

class Cliente extends Model {
  static init(conexao) {
    super.init(
      {
        nome: DataTypes.STRING,
        telefone: DataTypes.STRING,
        data: DataTypes.STRING,
        cpf: DataTypes.STRING,
      },
      { sequelize: conexao, freezeTableName: true, tableName: "clientes" }
    );
  }
}

module.exports = Cliente;
