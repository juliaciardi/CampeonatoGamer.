const express = require ("express");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());


let PARTIDAS = [{
    id: 1,
    jogo: "Falcões",
    timaA: "Lobos",
    timeB: "Dragões",
    pontoA: 3,
    pontoB: 2,
    status: "Finalizada"
},
  {
    id: 2,
    jogo: "Corrida turbo",
    timaA: "Lobos",
    timeB: "Dragões",
    pontoA: 0,
    pontoB: 0,
    status: "Agendada"
  },
];




app.get("/",(req, res)=>{
    res.status(200).json({mensagem: "Campeonato Gamer no ar!"});
});


app.get("/partidas", (req,res)=>{
    res.status(200).json(PARTIDAS);
});


app.get("/partidas/:id", (req,res)=>{
    const id = Number(req.params.id);
    const partida = PARTIDAS.find(p => p.id === id);


    if(!partida) return res.status(400).json({mensagem: "Partida não encontrada"});


    res.status(200).json(partida);


    




})








const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});