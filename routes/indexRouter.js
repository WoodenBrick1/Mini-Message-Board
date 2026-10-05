import { Router } from "express"
import indexController from '../controllers/indexController.js'

const indexRouter = Router()

indexRouter.get('/', async (req, res) => {
    const messages = indexController.getMessages()
    res.render('index', { messages: messages })
})

indexRouter.get('/new', async (req, res) => {
    res.render("form", {})
})

indexRouter.post('/new', async (req, res) => {
    const { messageText, messageUser } = req.body

    indexController.createMessage(messageText, messageUser)
    res.redirect('/')

})

indexRouter.get('/message/:id', async (req, res) => {
    const message = indexController.getMessageByIndex(req.params.id)

    if (!message) {
        const errorMessage = { title: "Not Found", user: "Not Found", added: "Not Found" }
        res.render('messageDetails', { message: errorMessage })
    } else {
        res.render('messageDetails', { message: message })
    }
})

export default indexRouter