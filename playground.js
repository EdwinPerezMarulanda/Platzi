var multiplos = [3, 4, 5, 6, 7, 8];
var resultado = [27,36,45,54,63,72];
var tamano = multiplos.length;


for (var i = 0; i < tamano; i++) {
    var x = resultado[i] / multiplos[i];
    console.log(multiplos[i] + " * " + x + " = " + resultado[i]);
    if (resultado[i] % multiplos[i] == 0) {
        console.log(x);
    }else{
        console.log(false)
    }
}
 