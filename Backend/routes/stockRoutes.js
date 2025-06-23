const express=require('express')
const router=express.Router();
const { getStockDataAndTrack } = require('../controllers/stockController');
router.post('/track', getStockDataAndTrack);
module.exports = router;
