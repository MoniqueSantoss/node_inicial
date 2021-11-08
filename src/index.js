const express = require('express');
const app = express();

app.use(express.json());

app.get('/home', (req , res)=> {
    res.send('Olá. Nossa primeira API!');
});

app.get('/mensagem', (req , res)=> {
    res.json( { mensagem: "Olá . Nossa primeira API!" });
});

app.post('/mensagem2', (req, res)=> {
    const {msg} = req.body;
    res.send('você enviou o texto : ' + msg);
});

app.post('/anuncio/:id', (req, res)=> {
    const {id} = req.params;
    res.send('o parâmetro de rota enviado foi : ' + id);
    console.log(id);
});

app.post('/pedido', (req, res)=> {
    const {titulo} = req.query;
    res.send('O query param enviado foi : ' + titulo);
});

app.post('/pedido2', (req, res)=> {
    const {titulo,categoria} = req.query;
    res.send('O query param enviado foi : ' + titulo + ' e também ' + categoria);
});

app.get('/dadospessoais', (req , res)=> {
    res.send( { nome: 'Monique', 
    idade: 18,
    email: 'email@gmail.com',
    profissao: 'Estudante'});
});

app.get('/formacao', (req , res)=> {
    res.send( { ensinoMedio: 'Olga Cury ',
    ensinoSuperior: 'Universidade Paulista' });
});

app.get('/projetos', (req , res)=> {
    res.send( { projetos: 0 });
});

app.get('/experiencia', (req , res)=> {
    res.send( { experiencia: 0 });
});

app.get('/lazer', (req , res)=> {
    res.send( { atividade1: 'muay thai',
atividade2: 'dançar',
atividade3: 'Escutar música',
atividade4: 'Usar o celular',
atividade5: "Brincar com o meu sobrinho"});
});

app.post('/cliente', (req, res)=> {
    const {nome, telefone, idade, profissao ,email} = req.body;
    res.send('Nome: ' + nome + ', tel: ' + telefone + ', idade: ' + idade + ', profissão: ' + profissao + ', email: '+ email );
});


app.put('/atualiazarCliente/:id', (req, res) => {
    const {id} = req.params;
 
    res.send("Cliente ID " + id + " foi atualizado com sucesso!");
});

app.delete('/excluirCliente/:id', (req, res) => {
    const {id} = req.params;
    res.send("Cliente ID " + id + " foi excluído com sucesso!");
});

app.listen(3333, () => {
    console.log('servidor on');
});
