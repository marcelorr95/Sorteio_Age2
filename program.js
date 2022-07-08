var atoron = {
  id: "Atoron",
  nome: "Cafajeste",
  rating: 0,
  indice: 0,
}

var bile = {
  id: "Bileh",
  nome: "Pathfinding",
  rating: 0,
  indice: 0,
}

var caio = {
  id: "Caio",
  nome: "Caio",
  rating: 0,
  indice: 0,
}

var crets = {
  id: "Crets",
  nome: "Zangado",
  rating: 0,
  indice: 0,
}

var duffy = {
  id: "Duffy",
  nome: "Caiu a Conexão",
  rating: 0,
  indice: 0,
}

var fabio = {
  id: "Fabio",
  nome: "Trikas",
  rating: 0,
  indice: 0,
}

var fabricio = {
  id: "Fabricio",
  nome: "Quietude do Abestado",
  rating: 0,
  indice: 0,
}

var leonel = {
  id: "Leonel",
  nome: "Sagat",
  rating: 0,
  indice: 0,
}

var lu = {
  id: "Lucas",
  nome: "Docente",
  rating: 0,
  indice: 0,
}

var marcelo = {
  id: "Marcelo",
  nome: "Standup Sentado",
  rating: 0,
  indice: 0,
}

var pastori = {
  id: "Pastori",
  nome: "Pai do Duff",
  rating: 0,
  indice: 0,
}

var penteadogui = {
  id: "Penteadogui",
  nome: "Coquedesamuraigui",
  rating: 0,
  indice: 0,
}

var ricardo = {
  id: "Ricardo",
  nome: "Hobbit",
  rating: 0,
  indice: 0,
}

var ruddah = {
  id: "Ruddah",
  nome: "Brastemp",
  rating: 0,
  indice: 0,
}

var tenca = {
  id: "Tenca",
  nome: "Owner of a Fusca",
  rating: 0,
  indice: 0,
}

var jogadores = [crets,ricardo,lu,fabio,duffy,atoron,ruddah,fabricio,bile,caio,tenca,leonel,pastori,penteadogui,marcelo]

var time1 = [],
  time2 = []

function sortear() {

  var diferenca = document.getElementById('diferenca'),
    tipoDeJogo,
    qtdadePlayers,
          tamTime1,
          tamTime2,
    tLen = 0,
    forcaT = 0,
    forcaT1Tot = 0,
    forcaT2Tot = 0,
    chanceT1 = 0,
    chanceT2 = 0,
          indiceMax = 0,
      j = 0, // Loop

   time1 = []
time2 = []

indiceMax = geraIndices() // Gera um indice para cada player com a força diferente de 0
  
with (verificaTipoJogo(tipoDeJogo, qtdadePlayers)) {tipoDeJogo = tipoDeJogoL; qtdadePlayers = qtdadePlayersL;}

  if ( indiceMax < ( qtdadePlayers * 2 ) ) {
      alert("Não há jogadores suficientes para o sorteio")		
      return
  }
  
while (j < 1000) { // Tentativa de criação dos times randomicamente

  j++ // Loop

  tamTime = time1.length
  
   j1 = 0, // Loop
   j2 = 0  // Loop
  
  if (tamTime < qtdadePlayers){
    
    while (j1 < 100) { // Tentativa de cração do time 1
      
      j1++ // Loop
      let numeroRandom = parseInt (Math.floor(Math.random() * (indiceMax)) + 1); //Gera player time 1
      tamTime = time1.length;
      for (j2 = 0; j2 < tamTime; j2++) { // Valida se o player ja está no time1
        if (numeroRandom == time1[j2]){
          numeroRandom = 0
        }
      }
      
      if (numeroRandom != 0){ // Se for uma player válido, salva na respectiva posição
        time1[j2] = numeroRandom
        forcaT = leForca(time1[j2])
        forcaT1Tot = forcaT1Tot + forcaT
      }
      
      tamTime = time1.length;
      if (tamTime >= qtdadePlayers){
        break; 
      }
    }
  }

  j1 = 0
  while (j1 < 1000) { // Tentativa de cração do time 2
    
    j1++
    numeroRandom = parseInt (Math.floor(Math.random() * (indiceMax)) + 1); //Gera player time 2
          
    tamTime = time1.length;
    for (j2 = 0; j2 < tamTime; j2++) { // Valida se o player ja está no time1
      if (numeroRandom == time1[j2]){
        numeroRandom = 0
      }
    }

    if (numeroRandom != 0){
      tamTime = time2.length;
      for (j2 = 0; j2 < tamTime; j2++) { // Valida se o player ja está no time2
        if (numeroRandom == time2[j2]){
          numeroRandom = 0
        }
      }
    }

    if (numeroRandom != 0){ // Se for uma player válido, salva na respectiva posição
      time2[j2] = numeroRandom
      forcaT = leForca(time2[j2])
      forcaT2Tot = forcaT2Tot + forcaT
    }

    tamTime = time2.length;
    if (tamTime >= qtdadePlayers){
      break; 
    }
  }

  tamTime = time1.length;
  tamTime2 = time2.length;
  forcaT1Tot = Math.round(forcaT1Tot/tamTime);
  forcaT2Tot = Math.round(forcaT2Tot/tamTime);
  
  if ( tamTime == qtdadePlayers && tamTime2 == qtdadePlayers ){
    var EA = 1/(1+10**((forcaT1Tot-forcaT2Tot)/400))
    chanceT2 = EA*100
    chanceT1 = (1 - EA)*100
    var resultDiferenca = Math.max(chanceT1, chanceT2)
    if ( ( resultDiferenca > 0 && resultDiferenca > diferenca.value ) || ( resultDiferenca < 0 && resultDiferenca < ( diferenca.value * -1 ) ) ) {
      time1 = []; time2 = []
      forcaT1Tot = 0; forcaT2Tot = 0
    } else {
      break; 
    }
  }
}
   
tamTime  = time1.length
tamTime2 = time2.length
  
  if ( tamTime == qtdadePlayers && tamTime2 == qtdadePlayers ){
    exibirJogadoresNaTela(jogadores,qtdadePlayers,time1,time2,forcaT1Tot,forcaT2Tot, chanceT1, chanceT2)
}
else {
       alert("Não foi possível montar times com a diferença mínima desejada")
  }
}

  function exibirJogadoresNaTela(jogadores,length,time1,time2,forcaT1Tot,forcaT2Tot,chanceT1, chanceT2) {
  var html = ""
    html += '<table style="width:400px;text-align:center;" border="1px">'
      html += "<tr><td>" + "Time 1 <br> Chance de Vitória: " + chanceT1.toFixed(2) + "%<br> Força Média: " + forcaT1Tot + "</td>" + "<td>" + "Time 2 <br> Chance de Vitória: " + chanceT2.toFixed(2) + "%<br> Força Média: " + forcaT2Tot + "</td></tr>"
      for (var i = 0; i < length; i++) {
          var jogador1 = leNome(time1[i])
          var jogador2 = leNome(time2[i])
          html += "<tr><td>" + jogador1 + "</td>" + "<td>" + jogador2 + "</td></tr>"
    }
      html += "</table>"
  
  var tabelaJogadores = document.getElementById('tabelaJogadores')
  tabelaJogadores.innerHTML = html
}

function verificaTipoJogo(tipoDeJogoL,qtdadePlayersL) {
let x0 = document.getElementById('x2')
if (x0.checked == true ) {
 tipoDeJogoL = "x2"
 qtdadePlayersL = 2
}
else {
 x0 = document.getElementById('x3')
 if (x0.checked == true) {
   tipoDeJogoL = "x3"
   qtdadePlayersL = 3
 }
 else{
   tipoDeJogoL = "x4"
   qtdadePlayersL = 4
 }
}
return {tipoDeJogoL:tipoDeJogoL, qtdadePlayersL:qtdadePlayersL}
}

function geraIndices() {
var cont = 0
for (i = 0; i < jogadores.length; i++) { 
     cont = lePlayer(jogadores[i],cont)
}
return cont 
}

function lePlayer(obj,cont) {
let player = document.getElementById(obj.id)
if (player) {
  obj.indice = 0
   if (player.value != 0){
       cont++
       obj.indice = cont
       obj.id = player.id
       obj.rating = player.value
      }
  }
return cont
}

function leForca(indice) {
  for (i = 0; i < jogadores.length; i++) { 
      if (jogadores[i].indice == indice) {
          return parseInt(jogadores[i].rating)
      }
  }
}

function leNome(indice) {
  for (i = 0; i < jogadores.length; i++) { 
      if (jogadores[i].indice == indice) {
          return jogadores[i].nome
      }
  }
}