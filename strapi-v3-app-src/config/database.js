module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'db_v3'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi_project'),
        username: env('DATABASE_USERNAME', 'user_strapi_project'),
        password: env('DATABASE_PASSWORD', 'strapiproject123'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
