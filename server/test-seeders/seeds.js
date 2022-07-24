const db = require('../config/connection');
const { User, BookFilms } = require('../models');
const printf = require('util').format;

db.once('open', async () => {
  await User.deleteMany({});
  await BookFilms.deleteMany({});
  await User.collection.insertOne({
    username: 'test',
    email: 'test@test.com',
    password: 'test',
    savedBooks: [],
  });
  await BookFilms.collection.insertMany([
    {
      book: 'Rapunzel',
      film: 'Tangled (2010)',
    },
    {
      book: 'The Snow Queen',
      film: 'Frozen (2013)',
    },
    {
      book: 'Northern Lights',
      film: 'The Golden Compass (2007)',
    },
    {
      book: 'We Can Remember It For You Wholesale',
      film: 'Total Recall (1990)',
    },
  ]);

  const bgGreen = '\x1b[32m',
    colorReset = '\x1b[0m',
    queryHint = `
        
query {
    bookFilms {
        book
        film
    }
}

Also, all users removed. Recreated user "test" with no saved books.
`;

  console.info(
    printf(
      '%sBookFilms all seeded for testing purposes! Run in GraphQL playground: %s'
    ),
    bgGreen,
    queryHint,
    colorReset
  );
  process.exit(0);
});
