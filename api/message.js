const axiosInstance = require('../middleware/axios')

async function sendMessage (data) {
  return makePostRequest('/message/push', {
    to: data.userID,
    messages: [
      {
        type: 'text',
        text: data.message
      }
    ]
  })
}
async function makePostRequest (endpoint, data) {
  try {
    const response = await axiosInstance.post(endpoint, data)
    return response.data
  } catch (error) {
    console.error(`Error making POST request to ${endpoint}:`, error)
    throw error
  }
}

module.exports = { sendMessage }
