const img1 = document.getElementById('produto1');
const img2 = document.getElementById('produto2');
const img3 = document.getElementById('produto3');
const img4 = document.getElementById('produto4');
let carrossel = true;

function carrosselF(){
    if(carrossel){
        img1.src = 'imgs/camisa5.jpg'
        img2.src = 'imgs/camisa6.jpg'
        img3.src = 'imgs/camisa7.jpg'
        img4.src = 'imgs/camisa8.jpg'
        carrossel = false;
    } else {
        img1.src = 'imgs/camisa1.jfif'
        img2.src = 'imgs/imagem3.jpg'
        img3.src = 'imgs/imagem4.jpg'
        img4.src = 'imgs/imagem2.jpg'
        carrossel = true;
    }
}