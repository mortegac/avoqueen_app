const express = require('express')
const router = express.Router()
const { verifiedAuth } = require('../midlewares')

router.use('/api/user', require('./user.routes'));
router.use('/api/client', verifiedAuth, require('./client.routes'));
router.use('/api/product', verifiedAuth, require('./product.routes'));


module.exports = router