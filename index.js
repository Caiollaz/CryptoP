function Encrypt(){
    let descricao = $("#descricao").val();
    let crypt = cryptpru(descricao);
    
    $("#resultado").val(crypt);

}

function Decrypt(){
    let descricao = $("#descricao").val();
    let crypt = decryptpru(descricao);
    
    $("#resultado").val(crypt);
    
}

const cryptpru = (phrase) => {
    const vogais = 'aeiouáéíóúãõâêîôûàèìòùy';
    let result = '';
    let palavra = phrase.toLowerCase();
    
    for (let i = 0; i < palavra.length; i++) {
        if (i === 0 || palavra[i-1] === ' ') {
            result += 'p';
        }
        else if (vogais.includes(palavra[i]) && 
                !vogais.includes(palavra[i-1])) {
            result += 'p';
        }
        result += palavra[i];
    }
    return result;
}

const decryptpru = (prurase) => {
    return prurase.replace(/p(?=[a-zçáéíóúãõâêîôûàèìòùy])/g, '');
}

function speakText() {
    let resultado = $("#resultado").val();

    const speechSynthesisUtterance = new SpeechSynthesisUtterance(resultado);
    window.speechSynthesis.speak(speechSynthesisUtterance);
}
