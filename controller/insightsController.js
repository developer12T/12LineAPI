const {
  aggregationInfo,
  delivery,
  aggregationList,
  followers,
  demographic,
} = require("../api/insights");

exports.delivery = async (req, res, next) => {
  try {
    console.log(req.query.date);

    const response = await delivery(req.query.date);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

exports.followers = async (req, res, next) => {
  try {
    const response = await followers(req.query.date);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

exports.demographic = async (req, res, next) => {
  try {
    const response = await demographic();
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

exports.info = async (req, res, next) => {
  try {
    const response = await aggregationInfo();
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

exports.list = async (req, res, next) => {
  try {
    const response = await aggregationList();
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
