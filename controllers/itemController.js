const { db } = require('../server');

exports.itemIndex = (req, res) => {
  db('garage_item').select().orderBy('id', 'desc')
    .then(items => res.status(200).json(items))
    .catch(error => res.status(500).json({ error }));
};

exports.addItem = (req, res) => {
  const newItem = req.body;
  return db('garage_item')
    .insert(newItem, '*')
    .then(item => res.status(201).json(item))
    .catch(error => res.status(500).json({ error }));
};

exports.editItem = (req, res) => {
  const { id } = req.params;
  const patchedItem = req.body;
  db('garage_item')
    .where({ id })
    .select()
    .update(patchedItem, '*')
    .then(item => res.status(200).json(item))
    .catch(error => res.status(500).json({ error }));
};

exports.deleteItem = (req, res) => {
  const { id } = req.params;
  db('garage_item')
    .where({ id })
    .del()
    .then(() => res.status(200).json('You have removed the item'))
    .catch(error => res.status(500).json({ error }));
};
