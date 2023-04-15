const dia = document.getElementById('days')
const horas = document.getElementById('hours')
const minutos = document.getElementById('minutes')
const segundos = document.getElementById('seconds')



const lancamento = " 01 may 2023"

function countDown(){
    const dataLancamento = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLancamento - hoje) / 1000

    
    const finalDias = Math.floor(segTotal /60/60/24);
    const finalHoras = Math.floor(segTotal /60/60)%24;
    const finalMinutos = Math.floor(segTotal /60)%60;
    const finalSegundos = Math.floor(segTotal)%60;

    
    dia.innerHTML = finalDias + "D"
    horas.innerHTML = formatoTempo(finalHoras)+"H"
    minutos.innerHTML = formatoTempo(finalMinutos)+"M"
    segundos.innerHTML = finalSegundos+"s"

}

function formatoTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo
}
countDown();
setInterval(countDown,1000);




/*---CONFIG EVENTO DOS CARDS----**/

function highLightCard(selector){
    var element = document.querySelector(selector);
    element.classList.toggle("high-Light-Card");
}


// function checkKeyBoardsCode(){
//     document.addEventListener('keydown', (event) => {
//         var name = event.key;
//         var code = event.code;

//         alert(`Key pressed ${name} \r\n key code value: ${code}`);

//     },false);
// }


function addKeyBoardsEventListener() {
    document.addEventListener('keydown', (event) =>{

        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");


        var code = event.code;
        if(code == 'Digit1') {
            ingresso1.classList.toggle("high-Light-Card");
            ingresso2.classList.remove("high-Light-Card");
            ingresso3.classList.remove("high-Light-Card");
            ingresso4.classList.remove("high-Light-Card");
        }

        var code = event.code;
        if(code == 'Digit2') {
            ingresso1.classList.remove("high-Light-Card");
            ingresso2.classList.toggle("high-Light-Card");
            ingresso3.classList.remove("high-Light-Card");
            ingresso4.classList.remove("high-Light-Card");
        }


        var code = event.code;
        if(code == 'Digit3') {
            ingresso1.classList.remove("high-Light-Card");
            ingresso2.classList.remove("high-Light-Card");
            ingresso3.classList.toggle("high-Light-Card");
            ingresso4.classList.remove("high-Light-Card");
        }


        var code = event.code;
        if(code == 'Digit4') {
            ingresso1.classList.remove("high-Light-Card");
            ingresso2.classList.remove("high-Light-Card");
            ingresso3.classList.remove("high-Light-Card");
            ingresso4.classList.toggle("high-Light-Card");
        }


    })
}

addKeyBoardsEventListener();


