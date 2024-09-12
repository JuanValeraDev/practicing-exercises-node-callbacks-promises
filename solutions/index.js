//1.  Arrelgar función
/*
import net from 'node:net'

export const ping = (ip, callback) => {
    const startTime = process.hrtime()

    const client = net.connect({port: 80, host: ip}, () => {
        client.end()
        callback(null, {time: process.hrtime(startTime), ip})
    })

    client.on('error', (err) => {
        client.end()
        callback(err)
    })
}

ping('google.com', (err, info) => {
    if (err) console.error(err)
    else console.log(info)
})

 */

//2. Pasar a promesas
/*
export async function obtenerDatosPromise() {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve({data: 'datos importantes'})
            }, 2000)
        } catch (error) {
            reject(error)
        }
    })
}

console.log(await obtenerDatosPromise())

 */


//3 - Explica qué hace la funcion. Identifica y corrige los errores en el siguiente código. Si ves algo innecesario, elimínalo.
// Luego mejoralo para que siga funcionando con callback y luego haz lo que consideres para mejorar su legibilidad.

//Respuesta: Lo que hace la función es leer un fichero de entrada, pasar su contenido a mayúsculas y escribirlo en un fichero de salida.

//Así con callbacks
/*
import fs from 'node:fs';


export function procesarArchivo(callback) {
    fs.readFile('../input.txt', 'utf8', callback)
}

procesarArchivo((error, info) => {
    if (error) {
        console.error("Error leyendo el archivo " + error)
    } else {
        fs.writeFile('../output.txt', info.toUpperCase(), error => {
            if (error) console.error("Error al escribir archivo " + error)
            else console.log("Archivo procesado correctamente ")
        })
    }
})

 */

//Así con promesas
/*
import  fs  from 'node:fs';

async function procesarArchivo() {
    let contenido;
    try {
        contenido = await fs.promises.readFile('../input.txt', 'utf8');
    } catch (error) {
        console.error('Error al leer el fichero:', error.message);
        return;
    }

    try {
        await fs.promises.writeFile('../output.txt', contenido.toUpperCase(), 'utf8');
        console.log('Archivo procesado correctamente');
    } catch (error) {
        console.error('Error al escribir el fichero:', error.message);
    }
}
procesarArchivo();

 */


