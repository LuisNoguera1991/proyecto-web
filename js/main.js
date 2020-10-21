let slider = document.querySelector('.slider-contenedor');
let sliderInd = document.querySelectorAll('.slider-test');
let contador = 1
let tamanoWidht = sliderInd[0].clientWidth;
let intervalo = 2000;

window.addEventListener("resize", () => {
    tamanoWidht = sliderInd[0].clientWidth;

});

slides();

setInterval(function tiempo(){
    slides();
},intervalo);

function slides(){
    slider.style.transform = 'translate('+(-tamanoWidht * contador)+ 'px)';
    slider.style.transition = 'transform 1s';
    contador++;

    if(contador === sliderInd.length){
        contador = 0;
        setTimeout(() => {
            slider.style.transform = 'translate(0px)';
            slider.style.transition = 'transform 0s';
        },intervalo)

    }
}