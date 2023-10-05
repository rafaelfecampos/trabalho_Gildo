let imagem = [
    './assets/images/1.jpg',
    './assets/images/2.jpg',
    './assets/images/3.jpg',
    './assets/images/4.jpg',
    './assets/images/5.jpg',
    './assets/images/6.jpg',
    './assets/images/7.jpg',
    './assets/images/8.jpg',
    './assets/images/9.jpg',
    './assets/images/10.jpg',
    './assets/images/11.jpg',
    './assets/images/12.jpg',
    './assets/images/13.jpg',
    './assets/images/14.jpg',
    './assets/images/15.jpg',
    './assets/images/16.jpg',
    './assets/images/17.jpg',
    './assets/images/18.jpg',
    './assets/images/19.jpg'

];

function aleatorio(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

aleatorio(imagem);

const img = document.querySelector(".imagem");


for(let i = 0; i<15;i++){
    const imagemElement = document.createElement('img');
    imagemElement.src = imagem[i];
    imagemElement.className = `img`;
    imagemElement.id=`imagem${i+1}`;
    imagemElement.alt = `imagem ${i+1}`;
    img.appendChild(imagemElement);
}   

const imagens = document.querySelectorAll('.img');


imagens.forEach((aimagem) => {
    aimagem.addEventListener('click', () => {
       aimagem.remove();
    });
});
