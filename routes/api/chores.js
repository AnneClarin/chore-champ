const express = require('express');
const router = express.Router();
const choresCtrl = require('../../controllers/api/chores');

router.get('/', choresCtrl.index);
router.post('/', choresCtrl.create);

module.exports = router;