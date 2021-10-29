
function relogio() {
    function getTimeFromSeconds(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }
    
    const relogio = document.querySelector('.relogio');
    
    let segundos = 0;
    let timer;
    
    function iniciaRelogio(){
        timer = setInterval(function(){
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000);
    }
    
    document.addEventListener('click', function(event){
        const elemento = event.target;
    
        if(elemento.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }
    
        if(elemento.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);
        }
    
        if(elemento.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            relogio.classList.remove('pausado');
            segundos = 0;    
        }
    });
}
relogio();