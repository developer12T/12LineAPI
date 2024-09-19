const express = require('express')
const axios = require('axios')
const cors = require('cors')
const { LINE_ACCESS_TOKEN } = require('./config/index')

require('dotenv').config()

const app = express()
app.use(cors())
const port = 8888

const LINE_API_URL = 'https://api.line.me/v2/bot/message/push'

app.use(express.json())

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${LINE_ACCESS_TOKEN}`
}

const sendMessage = async (userID, message) => {
  const body = {
    to: userID,
    messages: [
      {
        type: 'text',
        text: message
      }
    ]
  }
  const response = await axios.post(LINE_API_URL, body, { headers })
  return response
}

app.post('/send-message', async (req, res) => {
  const { userUid, message } = req.body

  try {
    const response = await sendMessage(userUid, message)
    console.log('=== LINE log', response.data)
    res.json({
      message: 'Message OK'
    })
  } catch (error) {
    // console.log('error', error.response.data)
    res.status(400).json({
      error: error.response
    })
  }
})

app.listen(port, async () => {
  console.log(`Express app listening at http://localhost:${port}`)
})
