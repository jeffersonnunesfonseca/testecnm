module.exports = (sequelize, DataTypes) => {

    var cliente = sequelize.define('cliente', {
      nome: DataTypes.STRING
    },
      {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
        tableName: 'tb_cliente'
      
    });
  
    console.log(cliente);
    return cliente;
  }