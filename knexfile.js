module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/garage_bin_dev',
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds/dev',
    },
  },

  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/garage_bin_test',
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/test/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`,
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds/dev',
    },
  },
};
