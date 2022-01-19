/*A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"*/


function pegaTexto() {

    var textoCapturado = document.querySelector('input').value;
    //console.log(textoCapturado);
    //console.log(textoCapturado.split(''));
    var arrayTexto = textoCapturado.split('');
    var textoCriptografado;


    for (var i = 0; i < arrayTexto.length; i++) {

        if (arrayTexto[i] == 'a') {
            arrayTexto[i] = 'ai'
        }
        if (arrayTexto[i] == 'e') {
            arrayTexto[i] = 'enter'
        }
        if (arrayTexto[i] == 'i') {
            arrayTexto[i] = 'imes'
        }
        if (arrayTexto[i] == 'o') {
            arrayTexto[i] = 'ober'
        }
        if (arrayTexto[i] == 'u') {
            arrayTexto[i] = 'ufat'
        }
    }

    textoCriptografado = arrayTexto.join('');
    console.log(textoCriptografado);

    let exibeCripto = document.getElementById('msg');
    console.log(exibeCripto)
    exibeCripto.value = textoCriptografado;

}


var btn = document.querySelector('button');

btn.addEventListener('click', function (e) {
    e.preventDefault();

    pegaTexto();
})