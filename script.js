let textoEncriptado;
let botonEncriptar = document.querySelector('#btn-encriptar')

botonEncriptar.addEventListener("click", (event) => {
    event.preventDefault()
    let textoUsuario = document.querySelector('#textoa-encriptar').value;
    let textoEncriptado = encriptar(textoUsuario.toLowerCase());
    let resultado = document.querySelector('#resultado')
    let remplazo;

});


function encriptar(textoUsuario) {
    if (textoUsuario != null || textoUsuario.length != 0 || /^[a-z]\s+$/.test(textoUsuario)) {
        resultado.value = textoUsuario.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        return false;
    }

    textoUsuario = textoEncriptado;

}


let botonDesencriptar = document.querySelector("#btn-desencriptar")

botonDesencriptar.addEventListener("click", (event) => {
    event.preventDefault()
    let textoUsuario = document.querySelector('#textoa-encriptar').value;
    let textoEncriptado = desencriptar(textoUsuario);
    let resultado = document.querySelector('#resultado')
    let remplazo;

});

function desencriptar(textoUsuario) {

    resultado.value = textoUsuario.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    textoUsuario = textoEncriptado;
}

let botonCopiar = document.querySelector("#btn-copiar");
botonCopiar.addEventListener("click", () => {
    let textoCopiado = document.querySelector("#resultado").value;
    navigator.clipboard.writeText(textoCopiado);
});