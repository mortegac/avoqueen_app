const express = require('express');
const router = express.Router();
const { productCtrl } = require('../controllers');
const { verifiedAuth } = require('../midlewares')

router.get('/', verifiedAuth, productCtrl.readAll);
router.get('/:id', verifiedAuth, productCtrl.readOne);
router.post('/', verifiedAuth, productCtrl.create);
router.put('/:id', verifiedAuth, productCtrl.updateOne);
router.delete('/:id', verifiedAuth, productCtrl.deleteOne);


module.exports = router