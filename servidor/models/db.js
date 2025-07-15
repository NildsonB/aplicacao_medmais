const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "medmais",
    "root",
    "",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

sequelize.authenticate().then((function(){
    console.log("Banco de dados conectado com sucesso!")
})).catch(function(erro){
    console.log("Erro ao se conectar ao banco de dados= " + erro)
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}