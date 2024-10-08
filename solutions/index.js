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
//4 - ¿Cómo mejorarías el siguiente código y por qué? Arregla los tests si es necesario:

//Respuesta: Ahora mismo se procesan los archivos de forma síncrona, es decir el hilo primero procesa un fichero
//luego otro y luego otro. Para mejorar la eficiencia podemos hacer que el hilo procese los tres ficheros
//a la vez de forma asíncrona.
/*
import fs from 'node:fs';

export async function leerArchivos() {

    const archivo1 = fs.promises.readFile('../archivo1.txt', 'utf8')
    const archivo2 = fs.promises.readFile('../archivo2.txt', 'utf8')
    const archivo3 = fs.promises.readFile('../archivo3.txt', 'utf8')

    const [texto1, texto2, texto3] =
        await Promise.all([archivo1, archivo2, archivo3])
    return `${texto1} ${texto2} ${texto3}`
}

console.log(await leerArchivos())


 */

//5 - Escribe una funcion `delay` que retorne una promesa que se resuelva después de `n` milisegundos. Por ejemplo:

/*
export async function delay(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolved")
        }, time)
    })
}

delay(1000).then(() => console.log('Hola mundo'));

 */

//6. dotenv
/*
import {config} from './dotenv.js'

config()
console.log(process.env.PORT)
console.log(process.env.TOKEN)
*/

//7. API REST
import axios from 'axios'
/*
axios.patch("http://localhost:3000/items/4",  {"content":"Updated content"}).then(res => console.log(res.data)).catch(error => {
    console.error(error.message)
})

axios.get("http://localhost:3000/items/3").then(res => console.log(res.data)).catch(error => console.error(error.message))
axios.get("http://localhost:3000/items/4").then(res => console.log(res.data)).catch(error => console.error(error.message))

axios.put("http://localhost:3000/items/3", {"content":"put content"}).then(res => console.log(res.data)).catch(error => {
    console.error(error.message)
})



axios.post("http://localhost:3000/items", {id: 60, content: "Posted item"})
    .then(res => console.log(res.data)).catch(error => console.error(error.message))




axios.delete("http://localhost:3000/items/5").then(res => console.log(res.data)).catch(error => console.error(error.message))

axios.get("http://localhost:3000/items").then(res => console.log(res.data)).catch(error => console.error(error.message))

 */
