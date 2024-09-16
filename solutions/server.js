/*
7 - Diseña una API REST utilizando Express que permite a los usuarios crear, leer, modificar, actualizar y eliminar elementos de una lista.

La lista tendrá objetos que tienen la siguiente forma:

```javascript
{
  id: 1,
  content: 'Item 1'
}
```

Haz la solución en el archivo `solutions/server.js` y exporta el `app` y `server` creado.
Instala Express con `npm install express`. No te preocupes por CORS.
 */

import express from 'express'

export const app = express()
const port = 3000;


// Iniciar el servidor
export const server = app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
});

const list = [{
    id: 1,
    content: 'Item 1'
}, {
    id: 2,
    content: 'Item 2'
}, {
    id: 3,
    content: 'Item 3'
}, {
    id: 4,
    content: 'Item 4'
}, {
    id: 5,
    content: 'Item 5'
}, {
    id: 6,
    content: 'Item 6'
},]

app.use(express.json())


app.get("/items/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const item = list.find((itemList) => itemList.id === id)

    if (item) {
        res.json(item)
    } else {
        res.status(404).send("Item not found")
    }
})

app.get("/items", (req, res) => {
    res.json(list)
})

app.patch("/items/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const content = req.body.content
        list.map(item => {
            if (item.id === id) item.content = content
        })
        res.json("Updated succesfully")
    } catch (error) {
        res.send("Error :(")
    }
})

app.put("/items/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const content = req.body.content
        const index = list.findIndex(item => item.id === id)

        list[index] = {id: id, content: content}
        res.json("Updated successfully")
    } catch (error) {
        res.send("Error :(")
    }
})

app.post("/items", (req, res) => {
    try {
        const newItem = req.body
        list.push(newItem)
        res.status(200).send("Posted successfully")
    } catch (error) {
        res.send("Error")
    }
})

app.delete("/items/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const index = list.findIndex(item => item.id === id)
        if (index !== -1) {
            const deletedItem = list.splice(index, 1)
            res.status(200).send("Deleted successfully. Item: " + deletedItem.id)
        }
    } catch (error) {
        res.send("Error")
    }
})
