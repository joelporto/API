const Sequelize = require("sequelize")

const pesquisarMatriculas = sequelizeAcademia.define('clientes', {
    Nome:{
        type: Sequelize.STRING,
        allowNull: true,
        primaryKey: true
    },
    Cpf:{
        type: Sequelize.STRING,
        allowNull: true
    },
    Nascimento:{
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    Sexo:{
        type: Sequelize.STRING,
        allowNull: true
    },
    Telefone: {
        type: Sequelize.STRING,
        allowNull: true
    },
    CEP: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    Endereco: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Numero: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    Bairro: {
        type: Sequelize.STRING,
        allowNull: true
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
    Email:{
        type: Sequelize.STRING,
        allowNull: true
    },
    plano:{
        type: Sequelize.STRING,
        allowNull: true
    },
    vigencia:{
        type: Sequelize.STRING,
        allowNull: true
    },

})

module.exports = pesquisarMatriculas