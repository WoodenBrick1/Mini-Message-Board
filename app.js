import express from "express"
import { join } from "node:path"

import indexRouter from './routes/indexRouter.js'

const app = express()

app.set("views", join(import.meta.dirname, "views"))
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }))

app.use('/', indexRouter)

const PORT = 3001
app.listen(PORT, (error) => {
    if (error) {
        throw error
    }
    console.log(`listening on port ${PORT}!`)
})