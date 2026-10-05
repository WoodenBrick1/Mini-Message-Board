
const express = require("express")
const app = express()
const path = require("node:path")

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }))

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
]



app.get('/', async (req, res) => {
    res.render('index', { title: 'Mini Message Board', messages: messages })
})

app.get('/new', async (req, res) => {
    res.render("form", { title: 'New Message' })
})

app.post('/new', async (req, res) => {
    const { messageText, messageUser } = req.body

    messages.push({ text: messageText, user: messageUser, added: new Date() })

    res.redirect('/')

})

const PORT = 3001
app.listen(PORT, (error) => {
    if (error) {
        throw error
    }
    console.log(`listening on port ${PORT}!`)
})