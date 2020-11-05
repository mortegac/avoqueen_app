const express = require('express');
const router = express.Router();
const { clientCtrl } = require('../controllers');
const { verifiedAuth } = require('../midlewares')

router.get('/', verifiedAuth, clientCtrl.readAll);
router.get('/:id', verifiedAuth, clientCtrl.readOne);
router.post('/', verifiedAuth, clientCtrl.create);
router.put('/:id', verifiedAuth, clientCtrl.updateOne);
router.delete('/:id', verifiedAuth, clientCtrl.deleteOne);


module.exports = router