const { getAllAudience } = require('../api/audience')

exports.create = async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
}

exports.allAudience = async (req, res, next) => {
  try {
    const data = await getAllAudience()
    res.status(200).json(data)
  } catch (error) {
    next(error)
  }
}
exports.data = async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
}
exports.rename = async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
}
exports.deleted = async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
}
