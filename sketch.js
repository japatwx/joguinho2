//Sketch
function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDoEspaco);
  mostraNave();
  mostraCarro();
  movimentaCarro();
  movimentaNave();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}