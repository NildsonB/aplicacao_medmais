const express = require ('express');
const app = express();

app.get('/', function (req, res) {
    res.send("Bem vindo a página inicial da MedMais.")
});

app.get('/cadastro_paciente', function(req,res) {
    res.send("Insira abaixo as informações para cadastro do paciente.")
});

app.get('/cadastro_medicos', function(req,res) {
    res.send("Insira abaixo as informações para cadastro do médico.")
});

app.get('/cadastro_plano', function(req, res) {
    res.send("Insira abaixo as informações para cadastro do plando de saúde.")
});

app.get('/agendamento', function(req, res) {
    res.send()
});

var servidor = app.listen(8089, function() {
    var porta = servidor.address().port;
    console.log("Servidor rodando na porta %s", porta);
});