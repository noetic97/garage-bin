
exports.seed = (knex) => {
  return knex('garage_item').del()
    .then(() => {
      return knex('garage_item').insert([
        {
          name: 'Comic Books',
          reason_to_store: 'These will be worth so much money one day!',
          cleanliness: 'Sparkling',
        },
        {
          name: 'Shoe',
          reason_to_store: 'I know the other one is around here somewhere.',
          cleanliness: 'Rancid',
        },
        {
          name: 'Duster',
          reason_to_store: 'I can use this to clean the cobwebs!',
          cleanliness: 'Dusty',
        },
        {
          name: 'Tackle Box',
          reason_to_store: 'I can use these worms next time I go fishing!',
          cleanliness: 'Rancid',
        },
        {
          name: 'Can of paint',
          reason_to_store: 'This is perfect for touching up the hallway.',
          cleanliness: 'Dusty',
        },
        {
          name: 'Tesla Model 3',
          reason_to_store: 'OMG!!! I own a TESLA!!!!',
          cleanliness: 'Sparkling',
        },
      ]);
    });
};
