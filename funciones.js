function sumar(a,b){

    return a+b;
}
module.exports=sumar


function arreglar(){
// Arreglo:listado de datos, variables, objetsos, funciones
    let compras = ["pan", "carne","huevos","galletas"];
// para referirme a un elemento uso la posicion relativa
   console.log(compras[0]);
   compras[2]= "carne de res";
   console.log(compras);
}
arreglar();

function arregloVariado(){

        let miArreglo = [ 1, "a", true, 3.78, " Hola mundo",[1,5,"pepe_grillo"]];
        console.log(miArreglo);
        console.log(miArreglo[5][2]);
        // un arreglo es inmutable ejemplo
        miArreglo[4][2]="X";
        // el valor que quiero reaccignar no se genera
        // para saber la longitud de un arreglo
        let tamañoArreglo = miArreglo.length;
        console.log(tamañoArreglo)
        // se pueden cambiar la cantidad de los arreglos puedo agregar y quitar

        miArreglo.push("gato", "perro",); // puedo agragar la cantidad de elementos deseados
        console.log(miArreglo);
        // para devolver ele valor de push
        console.log(miArreglo.push("gatillo"));// muestra la cantidad de elementos
        console.log(miArreglo);
        // para elliminar o extraer un elemento
        miArreglo.pop();//eliminar el último elemento
        console.log(miArreglo.length);

        //eliminar el primer elemento de un arreglo
        miArreglo.shift();//eliminar el último elemento
        console.log(miArreglo.length);

        //eliminar r elemento de un arreglo en un indice expecífico
        miArreglo.splice(1,2);//apartir de la posición que indico el el primer valor, borrará la cantida de elementos que le indique
        console.log(miArreglo.length);
         // agregamos elementos pues ya se an eliminado varios

         miArreglo.push("gato", "perro", 1, 5 , false, "queso"); // puedo agragar la cantidad de elementos deseados
         console.log(miArreglo);
        
        // como recorrer un arreglo
        // forma básica y menos usada ciclo while
        // let i =0;
        // while(i<miAreglo.length){
        //    console.log(miAreglo[i]);
        //    i++;
        // }
        // recorrer con un cliclo for
        // for (const conjunto of miAreglo){
        //     console.log(conjunto);
        // }
        }
arregloVariado();

function mapeado (){
    let otropArreglo = [1,2,3,5,5,6,7,8,9,0]
    // crear un arreglo que contenga el doble de cada uno de los elementos
    // multiplicar cada uno por el doble
    // forma uno
    // let a =[];
    // for(const item of otropArreglo){
    //     a.push(item*2);
    // }
    // console.log(a)
}
mapeado ();


