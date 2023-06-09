var v1, v2, v3, s, A, aux1, aux, aux2

function cap1() {
    v1 = document.getElementById("v1").value   /* Obtener el valor de v1 */
    v1 = Number.parseFloat(v1)            /* Convertir de tipo string a tipo float */
}

function cap2() {
    v2 = document.getElementById("v2").value
    v2 = Number.parseFloat(v2)

}
function cap3() {
    v3 = document.getElementById("v3").value
    v3 = Number.parseFloat(v3)
}


function area() {
    if (v1 + v2 > v3 && v1 + v3 > v2 && v2 + v3 > v1){
        s = (v1 + v2 + v3) / 2
        A = Math.sqrt( (s * (s - v1) * (s - v2) * (s - v3)) )
        crear('Area =' + A)
    }
    else {
        alert('Los datos son incorrectos')
    }
}

function semiperimetro() {

    if (v1 + v2 > v3 && v1 + v3 > v2 && v2 + v3 > v1) {
        s = ((v1 + v2 + v3) / 2)
        crear('semiperimetro = ' + s)
    }
    else {
        alert('Los datos estan incorrectos')
    }

}
function perimetro() {
    if (v1 + v2 > v3 && v1 + v3 > v2 && v2 + v3 > v1) {
        s = (v1 + v2 + v3)
        crear('Perimetro = ' + s)
    }
    else {
        alert('Los datos estan incorrectos')
    }
}


function crear(aux1) {
    var R = document.createElement('h3');
    R.textContent = aux1;
    R.id = 'Mahdi';
    document.getElementById("style").prepend(R);
}
function tipost(){
    if (v1 == v2 && v2 == v3){
        crear ('Triangulo equilatero')
    }
    else if (v1 == v2 && v2 != v3 || v3 == v1 && v1 != v2 || v2 == v3 && v3 != v1){ 
        crear('Triangulo isoceles')
    }
    else {
        crear ('Triangulo escaleno')
    }
    
}


function eliminartodo() {
    var Et = document.getElementById("style");
    Et.innerHTML = "";
}

function eliminar1() {
    var E1 = document.getElementById("Mahdi");
    if (E1 != null)
        document.getElementById("style").removeChild(E1)
}
