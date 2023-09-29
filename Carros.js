let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [6, 4.5, 4.0, 6, 3.9, 3.0];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < - 50;
}


function verificaColisao(){
//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
for (let i = 0; i < imagemCarros.length; i++){
colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xNave, yNave, 15)
if (colisao){
voltaNaveParaPosicaoInicial();
}
}
}

function voltaNaveParaPosicaoInicial(){
yNave = 366;
}

function incluiPontos(){
textAlign(CENTER);
textSize(25);
fill(color(255, 240, 60))
text(meusPontos, width / 5, 27);
}

function marcaPonto(){
if (yNave < 15){
meusPontos += 1;
voltaNaveParaPosicaoInicial();
}
}