// Generar numero aleatorio entre 1 y 3 OK

// Función para cuenta atrás de 5 segundos: PISTAS:Puedes usar `setTimeout()` para generar la asincronía de 5 segundos
//          - Puedes usar `setInterval()` para generar el contador de 5 segundos (recuerda que es del 5 al 0, por tanto el intervalo debería ser uno más) 5, 4, 3, 2, 1, 0 ...

// Averiguar cómo hacer que empiece el juego (al dar enter o clickar fuera del cuadrado)


// Averiguar cómo capturar el valor que elige el usuario OK

// Capturar botón reinicio de juego. PISTA: Crea un botón de reinicio del juego 
//              volviendo a iniciar la función inicial o reiniciando la página al pulsarlo.


//Capturamos el input, el area del resultado y de la cuenta

//Pasos del juego:
// 1- introduzco el valor
// 2- empieza la cuenta atrás
// 3- cuando acabe la cuenta atás muestra los resultados.


// Numero aleatorio OK

// Funcion cuenta atrás OK



// Valor usuario cuando presiono Enter OK

// Botón restablecer partida OK

// Necesitamos una variable de control para ver si el juego está en curso o no: let juegoEnCurso = false;

const resultArea    = document.getElementById('result');
const countdownArea = document.getElementById('countdown');
const inputArea     = document.getElementById('userInput');
const resetBtn      = document.getElementById('restart');

let randomNum;
let userNum;
let juegoEnCurso = false;
let intervalID;
let timeOutID;

function countdown() {
    resultArea.innerHTML = '';
    let number = 6;
    intervalID = setInterval(() => {
        number--
        number >= 0 ? countdownArea.innerHTML = number : clearInterval(intervalID)
    }
    ,1000)
};

function valorUsuario(e) {
    if (juegoEnCurso) {
        return
    };
    userNum = document.getElementById('userInput').value;
    randomNum = Math.floor(Math.random() * 3 + 1);
    

    if ((e.type === 'keydown' && e.key === 'Enter') || 
        (e.type === 'click' && e.target !== inputArea && e.target !== resetBtn))
        {
        if (parseInt(userNum) !== 1 && parseInt(userNum) !== 2 && parseInt(userNum) !== 3) {
        resultArea.innerHTML = `¡Selecciona un número entre el 1 y el 3!`;
        return
        }
        juegoEnCurso = true;
        countdown();
        timeOutID = setTimeout(() => {
            resultArea.innerHTML = `Has seleccionado el ${userNum},
            y el ordenador ha seleccionado ${randomNum}. Por lo tanto...
            `      
            opcionGanadora();  
            juegoEnCurso = false;
        }, 6000);
        
    }  
};

function opcionGanadora() {
    if (parseInt(userNum) === randomNum) {
        resultArea.innerHTML += `<br><span class="green">🎉 🎉 ¡¡Has salvado al mundo!! 🎉 🎉</span>`
    } else {
        resultArea.innerHTML += `<br><span class="red">💥 💥 💣 💣 ¡¡La bomba ha estallado!! 💥 💥 💣 💣</span>`
    }
    resetBtn.classList.add('animar');
}

document.addEventListener('click', valorUsuario);
document.addEventListener('keydown', valorUsuario);

resetBtn.addEventListener('click', () =>{
    clearInterval(intervalID);
    clearTimeout(timeOutID);
    juegoEnCurso            = false;
    resultArea.innerHTML    = '';
    countdownArea.innerHTML = '';
    inputArea.value         = null;
    resetBtn.classList.remove('animar');
})
