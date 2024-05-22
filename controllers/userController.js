const User = require('../models/user.model');
const dataResponse = require('../middleware/dataResponse')

// Controller for login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.json(dataResponse(true, { user, token }));
  } catch (error) {
    res.json(dataResponse(false, { error: error.message }));
  }
};

exports.logout = async (req, res) => {
  try {
    // Xóa token hiện tại khỏi danh sách các token của người dùng
    // req.user.tokens = req.user.tokens.filter(token => token !== req.token);
    // await req.user.save();

    res.json(dataResponse(true, { message: 'Logout successful' }));
  } catch (error) {
    res.json(dataResponse(false, { error: error.message }));
  }
};

exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      throw new Error('Email already exists');
    }

    // Create a new user
    const user = await User.create({
      username,
      email,
      password  // The password will be hashed automatically
    });
    const token = await user.generateAuthToken();
    res.json(dataResponse(true, { user, token }));

  } catch (error) {
    res.json(dataResponse(false, { error: error.message }));
  }
};
