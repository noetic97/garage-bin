const express = require('express');
const item = require('./controllers/itemController');

const router = express.Router();

// Garage Items
router.get('/items', item.itemIndex);
router.post('/items', item.addItem);
router.patch('/items/:id', item.editItem);
router.delete('/items/:id', item.deleteItem);

module.exports = router;
