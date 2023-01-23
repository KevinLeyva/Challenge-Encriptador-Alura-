
function copiar_texto() {
    var copiartexto = document.getElementById("area_resultado");
    copiartexto.select();
    copiartexto.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copiartexto.value);
    document.getElementById("area_resultado").innerHTML = '';
}

function habilitar_deshabilitar() {
    var image = document.getElementById("imagen_fondo");
    var coipar = document.getElementById("copiar");
    var textArea = document.getElementById("area_resultado");
    var div = document.getElementById("desincriptar");

    copiar.style.display = "block";
    coipar.style.margin = "15px auto";
    image.style.display ="none";
}

function operacion_incriptar() {

    var mensaje_incriptar = document.getElementById("mensaje").value;

    var mensaje_array = mensaje_incriptar.split("");

    if (mensaje_incriptar == "") {
        alert("Es necesrio agregar un texto");
    } else {


        for (var i = 0; i < mensaje_array.length; i++) {

            if (mensaje_array[i] == "a") {
                mensaje_array[i] = ""
                resultado += a;

            } if (mensaje_array[i] == "e") {
                mensaje_array[i] = ""
                resultado += e;
            } if (mensaje_array[i] == "i") {
                mensaje_array[i] = ""
                resultado += imes;
            }
            if (mensaje_array[i] == "o") {
                mensaje_array[i] = ""
                resultado += o;
            }
            if (mensaje_array[i] == "u") {
                mensaje_array[i] = ""
                resultado += u;
            }
            resultado += mensaje_array[i];

        }
        document.getElementById("area_resultado").innerHTML = resultado;
        document.getElementById("mensaje").value = '';
        habilitar_deshabilitar();
        resultado = "";
    }
}

function operacion_desincriptar() {

    var desifrar_array = ["ai", "enter", "imes", "ober", "ufat"];
    var mensaje = document.getElementById("mensaje").value;

    resultado = mensaje;

    if (mensaje == "") {
        alert("Es necesario agregar un texto");
    } else {

        for (var i = 0; i < desifrar_array.length; i++) {

            var palabraClave = mensaje.matchAll(desifrar_array[i]);
            var palabrasClaves = palabraClave[Symbol.iterator]();

            let next = palabrasClaves.next();

            while (!next.done) {

                if (next.value == "ai") {
                    resultado = resultado.replace(next.value, "a");
                } if (next.value == "enter") {
                    resultado = resultado.replace(next.value, "e");
                } if (next.value == "imes") {
                    resultado = resultado.replace(next.value, "i");
                } if (next.value == "ober") {
                    resultado = resultado.replace(next.value, "o");
                } if (next.value == "ufat") {
                    resultado = resultado.replace(next.value, "u");
                }
                next = palabraClave.next();
            }
        }
        document.getElementById("area_resultado").innerHTML = resultado;
        document.getElementById("mensaje").value = '';
        resultado = "";
    }
}

var desincriptar = document.getElementById("desifrar");
var copiar = document.getElementById("copiar");
var areaResultado = document.getElementById("area_resultado").value;

var e = "enter";
var imes = "imes";
var a = "ai";
var o = "ober";
var u = "ufat";
var vocales = ["a", "e", "i", "o", "u"];
var resultado = "";

incriptar.addEventListener("click", operacion_incriptar);
desincriptar.addEventListener("click", operacion_desincriptar);
copiar.addEventListener('click', copiar_texto);