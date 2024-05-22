const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route để đăng ký tài khoản người dùng mới
router.post('/register', userController.register);

// Route để đăng nhập
router.post('/login', userController.login);
// Route để đăng xuất
router.post('/logout', userController.logout);


module.exports = router;
