import app from './app.js' //cuando es importe interno siempre con la extension ej:".js"
import {connectDB} from './db.js'

connectDB()
app.listen(4000)
console.log("Server on port ", 4000)