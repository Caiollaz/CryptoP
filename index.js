$(document).ready(function() {

    console.log('JS Iniciado')
        
});

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
    return phrase.split(' ').map((word) => {
        const wordLetters = word.split('')
        return wordLetters.map((letter, index) => {

            const charCode = letter.charCodeAt(0);
            const binary = charCode.toString(2).padStart(8, 0)
            const prus = binary.replace(/0/g, 'pru, ').replace(/1/g, 'pruu, ').replace(/, $/, '')
 
            return prus

        }).join('-')
    }).join('~')
}

const decryptpru = (prurase) => {
    return prurase.split('~') .map((word) => {
        return word.split('-').map((letter) => {

            const binary = letter.replace(/pruu(, )*/g, '1').replace(/pru(, )*/g, '0')
            return String.fromCharCode(parseInt(binary, 2))

        }).join('')
    }).join(' ')
}
