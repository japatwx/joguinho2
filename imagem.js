let imagemDoEspaco;
let imagemDaNave;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let somDaTrilha;
let somDaColisao;
let somDoPonto;


function preload(){
imagemDoEspaco = loadImage("imagem/Espaco.jpeg");
imagemDaNave = loadImage("imagem/Nave.png");
imagemCarro = loadImage("imagem/Carro.png");
imagemCarro2 = loadImage("imagem/Carro2.png");
imagemCarro3 = loadImage("imagem/Carro3.png");
imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3];

somDoPonto = loadSound("imagem/colidiu.mp3");
somDaTrilha = loadSound("imagem/trilha.mp3");
}


