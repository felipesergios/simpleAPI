module.exports = {


    development: {
        client: 'mysql2',
        connection: {
          database: process.env.DATABASE,
          user:     process.env.DATABASE_USER,
          password: process.env.DATABASE_PASSWORD
        },
        migrations:{
          directory:'./src/database/migrations'
        },
        seeds:{
          directory:'./src/database/seeds'
        },
        pool: {
          min: 2,
          max: 10
        },
        useNullAsDefault:true,
      },
  
  
    staging: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    },
  
    production: {
      client: 'mysql',
      connection: {
        database: 'erp',
        user:     'adonis',
        password: 'adonis123'
      },
      migrations:{
        directory:'./src/database/migrations'
      },
      seeds:{
        directory:'./src/database/seeds'
      },
      pool: {
        min: 2,
        max: 10
      },
    }
  
  };