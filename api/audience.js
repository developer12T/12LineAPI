const axiosInstance = require('../middleware/axios')

async function getAllAudience () {
  try {
    const response = await axiosInstance.get('/audienceGroup/list')
    return response.data
  } catch (error) {
    console.error('Error fetching order type:', error)
    throw error // Re-throw the error if needed
  }
}

module.exports = { getAllAudience }
