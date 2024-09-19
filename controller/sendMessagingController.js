const { sendMessage } = require('../api/message')
const { sendMessage2 } = require('../api/test')
exports.index = async (req, res, next) => {
  try {
    const { userID, message } = req.body
    const response = await sendMessage2({ userID, message })
    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}
