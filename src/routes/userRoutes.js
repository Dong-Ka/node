const express = require('express');
const router = express.Router();
const UserController = require('../app/controllers/userController');

router.get('/', UserController.showUsers);
router.post('/', UserController.addUser);
router.post('/update/:id', UserController.updateUser);
router.post('/delete/:id', UserController.deleteUser);

module.exports = router;
