const express = require('express');
const router = express.Router();
const choresCtrl = require('../../controllers/api/chores');

router.get('/', choresCtrl.index);
router.post('/', choresCtrl.create);
router.put('/:id', choresCtrl.update);

module.exports = router;