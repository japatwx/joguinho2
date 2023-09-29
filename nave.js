let xNave = 85;
let yNave = 366;
let colisao = false; // Variável global
let meusPontos = 0; // Inicializa a variável meusPontos com zero



function mostraNave() {
  image(imagemDaNave, xNave, yNave, 30, 30);
}

function movimentaNave() {
  if (keyIsDown(UP_ARROW)) {
    yNave -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yNave += 3;
    }
  }
}

function verificaColisao() {
  // collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xNave, yNave, 15);
    
    if (colisao) {
      voltaNaveParaPosicaoInicial();
      
      if (pontosMaiorQueZero()) {  
        meusPontos -= 1;
      }
    }
  }
}

function voltaNaveParaPosicaoInicial() {
  yNave = 366;
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 27);
}

function marcaPonto() {
  if (yNave < 15) {
    meusPontos += 1;
    voltaNaveParaPosicaoInicial();
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}

function podeSeMover() {
  return yNave < 366;
}


//movimenta nave

function movimentaNave(){
  if (keyIsDown(UP_ARROW)){
    yNave -= 3 ;
}
   if (keyIsDown(DOWN_ARROW)){
    yNave += 3 ;
}
  
  if (keyIsDown(RIGHT_ARROW)){
    xNave += 5 ;
}
  if (keyIsDown(LEFT_ARROW)){
    xNave -= 5 ;
}
}
