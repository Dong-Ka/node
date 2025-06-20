const express = require('express');
const router = express.Router();

// Sub-routes
const siteRoutes = require('./site');
const newsRoutes = require('./news');
const userRoutes = require('./userRoutes');

// Ưu tiên định tuyến cụ thể trước
router.use('/news', newsRoutes);
router.use('/users', userRoutes);
router.use('/', siteRoutes); // Route gốc nên để sau cùng

module.exports = router;
