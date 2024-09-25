const { sendMessage } = require("../api/message");
exports.index = async (req, res, next) => {
  try {
    const { userID, message } = req.body;
    const response = await sendMessage({ userID, message });
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

exports.boardcast = async (req, res, next) => {
  try {
    const users = req.body.users;
    let data = [];
    for (const user of users) {
      const response = await sendMessage({
        userID: user.userID,
        message: user.message,
      });
      data.push(response);
    }
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
