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


const getMessages = () => {
    return messages
}

const createMessage = (messageText, messageUser) => {
    messages.push({ text: messageText, user: messageUser, added: new Date() })
}

const getMessageByIndex = (index) => {
    const message = messages[index]

    if (!message) return null

    return message
}

export default { getMessages, createMessage, getMessageByIndex }