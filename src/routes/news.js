const express = require('express');
const router = express.Router();
const NewsController = require('../app/controllers/NewsController');

// Trang tin tức
router.get('/', NewsController.index);

module.exports = router;
