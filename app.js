const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const sequelize = require('sequelize');

const Q = require('Q')

const init = () => {
  Q.fcall(async () => {
    let mysqlConnectionAcademia = require("./src/config/mysql_api")
    global.sequelizeAcademia = await mysqlConnectionAcademia()
  }).then(async () => {

    app.use(bodyParse.urlencoded({
      extended: false
    }));

    app.use(bodyParse.json());

    app.use(function(req, res, next) {

      // Site que você deseja permitir a conexão
      res.setHeader('Access-Control-Allow-Origin', '*');
      // Solicitar métodos que você deseja permitir
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      // Solicitar cabeçalhos que você deseja permitir
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      // Defina como verdadeiro se você precisar que o site inclua cookies nas solicitações enviadas
      // para a API (por exemplo, caso você use sessões)
      res.setHeader('Access-Control-Allow-Credentials', true);
      // Passe para a próxima camada de middleware
      next();
    });

    //Rota para cadastrar matricula
    let matriculaRoutes = require('./src/modules/matriculas/routes/index')
    app.use('/clientes', matriculaRoutes)

    // Rota para cadastrar funcionario
    let funcionarioRoutes = require('./src/modules/Funcionario/Routes/index')
    app.use('/funcionario', funcionarioRoutes)

    //Rota para validar login 
    let loginRoutes = require('./src/modules/login/routes/index')
    app.use('/login', loginRoutes)

    //Rota para buscar matricula
    let buscarRoutes = require('./src/modules/pesquisarMatricula/routes/index')
    app.use('/buscarMatricula' , buscarRoutes)

    //Rota para alterar matricula
    let alterarRoutes = require('./src/modules/alterarMatricula/routes/index')
    app.use('/updateMatricula' , alterarRoutes)

    // Rota para cadastar fornecedor
    let fornecedor = require('./src/modules/cadastraFornecedor/Routes/index')
    app.use('/fornecedor' , fornecedor)

    //Rota so para TESTES 
    let testeRoutes = require('./src/modules/testes/routes/index')
    app.use('/soParaTeste' , testeRoutes)

    // Porta
    app.listen(3000)

  }).catch(err => {
    console.log(err)
  })
}


init()
