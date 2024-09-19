const axiosInstance = require('../middleware/axios')

async function sendMessage2 (data) {
  try {
    const response = await axiosInstance.post('/message/push', {
      to: data.userID,
      messages: [
        {
          type: 'text',
          text: data.message
        }
      ]
    })
    return response.data
  } catch (error) {
    console.error('Error fetching order type:', error)
    throw error // Re-throw the error if needed
  }
}
// async function fetchCustomer (customerNo) {
//   try {
//     const response = await axiosInstance.post('/customer/single', {
//       customerNo: customerNo
//     })
//     return response.data[0]
//   } catch (error) {
//     console.error('Error fetching order type:', error)
//     throw error // Re-throw the error if needed
//   }
// }
module.exports = { sendMessage2 }
