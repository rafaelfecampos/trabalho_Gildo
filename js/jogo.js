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
let vetorImg1 = [];
let vetorImg2 = [];

function aleatorio(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}



const img = document.querySelector(".imagem");


function iniciarImagens() {
    aleatorio(imagem);
    for (let i = 0; i < 15; i++) {
        const imagemElement = document.createElement('img');
        imagemElement.src = imagem[i];
        vetorImg1[i] = imagem[i];
        imagemElement.className = `img`;
        imagemElement.id = `imagem${i + 1}`;
        imagemElement.alt = `imagem ${i + 1}`;
        img.appendChild(imagemElement);
    }

}

function iniciarImagens2() {
    aleatorio(imagem);
    for (let i = 0; i < 15; i++) {
        const trocaImg = document.querySelector(`#imagem${i + 1}`);
        trocaImg.setAttribute('src', imagem[i]);
        vetorImg2[i] = imagem[i];
    }
}

//jogo
function removeIMG() {
    const imagens = document.querySelectorAll('.img');
    let cont = 0;
    console.log("iniciou");
    imagens.forEach(aimagem => {
        console.log('iniciou2');
        aimagem.addEventListener('click', event => {
            aimagem.remove();
            let fimDeJogo = true;
            for (let i = 0; i < 15; i++) {
                if (aimagem.getAttribute('src') == vetorImg1[i]) {
                    console.log(aimagem.src, vetorImg1[i]);
                    fimDeJogo = false;
                    cont++;
                    break;
                }
            }

            if (fimDeJogo) {
                alert(`Fim de jogo\nPontuação: ${cont} acertos!`);
                window.location.reload();
            }
        });
    });
}

//Cronômetro
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");
const milisegundos = document.querySelector("#milisegundos");
const botaoIniciar = document.querySelector("#iniciar");
const cronometro = document.querySelector(".container");
let min = 0, sec = 58, milisec = 0;
let intervalo;
let parar = false;
let start = true;

function iniciarJogo() {
    if (start) {
        iniciarImagens();
        botaoIniciar.remove();
        intervalo = setInterval(() => {
            if (parar == false) {

                milisec += 10;
                if (min < 1) {
                    if (milisec === 1000) {
                        sec++;
                        milisec = 0;
                    }
                    if (sec === 60) {
                        min++;
                        sec = 0;
                    }
                    minutos.textContent = formatoCronometro(min);
                    segundos.textContent = formatoCronometro(sec);
                    milisegundos.textContent = formatoMilisec(milisec);
                    if (min == 1) {
                        parar = true;
                        start = false;
                        iniciarImagens2();
                        removeIMG();
                    }
                }
            }
        }, 10)
    }
}

function formatoCronometro(tempo) {
    return (tempo < 10) ? `0${tempo}` : tempo;
}
function formatoMilisec(tempo) {
    return (tempo < 100) ? `${tempo}`.padStart(3, "0") : tempo;
}

