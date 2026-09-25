import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import rutasdenavegacion from './routes/index.js'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(join(__dirname, '/views'))

app.listen(10)
console.log('Hola Mundo')
console.log('El servidor es:', 10)

app.use(express.static(join(__dirname, 'public')))
app.set('views', join(__dirname, '/views'))
app.set('view engine', 'ejs')
app.use(rutasdenavegacion)