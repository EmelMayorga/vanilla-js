// Inserte el código aquí

//1//
function clonarArreglo() {
    const arreglo = [1,2,3]
    const nuevoArreglo = [... arreglo]
    return nuevoArreglo

}

//2//
function clonarObjeto() {
    let objeto = {
        nombre: "Maria",
        edad: 20
    }
    const nuevoObjeto = {... objeto}
    return nuevoObjeto
}

//3//
const numeros = [1,2,3,4]
function sumar(... numeros) {
    return numeros.reduce((acumulador, valorActual)=>{
        return acumulador + valorActual
    }, 0)
    
}
sumar(1,2,3,4)
//4//

function saludar(nombre2 = "Desconocido") {
    return ("Hola", nombre2)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
}


// NO MODIFICAR
export { clonarArreglo, clonarObjeto, sumar, saludar };                                                                                                  