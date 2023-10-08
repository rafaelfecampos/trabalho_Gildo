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



const img = document.querySelector(".imagem");

function iniciarImagens() {
    for (let i = 0; i < 15; i++) {
        const imagemElement = document.createElement('img');
        imagemElement.src = imagem[i];
        imagemElement.className = `img`;
        imagemElement.id = `imagem${i + 1}`;
        imagemElement.alt = `imagem ${i + 1}`;
        img.appendChild(imagemElement);
    }
    aleatorio(imagem);
}
function iniciarImagens2() {
    const imagemElement = document.createElement('img');
    img.remove();
    for (let i = 0; i < 15; i++) {
        const imagemElement = document.createElement('img');
        imagemElement.src = imagem[i];
        imagemElement.className = `img`;
        imagemElement.id = `imagem${i + 1}`;
        imagemElement.alt = `imagem ${i + 1}`;
        img.appendChild(imagemElement);
    }
    
}


const imagens = document.querySelectorAll('.img');

function removeIMG (){
    imagens.forEach((aimagem) => {
        aimagem.addEventListener('click', () => {
            aimagem.remove();
        });
    });
}



const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");
const milisegundos = document.querySelector("#milisegundos");
const botaoIniciar = document.querySelector("#iniciar");

let min = 0, sec = 58, milisec = 0;
let intervalo;




function iniciarTimer(){
    
    intervalo = setInterval(()=>{
        
        milisec+=10;
        if(min<1){  
            if(milisec === 1000){
                sec++;
                milisec=0;
            }
            if(sec===60){
                min++;
                sec=0;
            }
            minutos.textContent = formatoCronometro(min);
            segundos.textContent = formatoCronometro(sec);
            milisegundos.textContent = formatoMilisec(milisec);
            }
           if(min == 1){ 
            setInterval(setInterval,60000)
            iniciarImagens()
           }
                
    },10)
   
        
   
}

function formatoCronometro(tempo){
    return tempo<10? `0${tempo}`: tempo;
}
function formatoMilisec(tempo){
    return tempo<100? `${tempo}`.padStart(3, "0"): tempo;
}

 