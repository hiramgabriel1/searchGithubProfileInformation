export default () => ({
  port: parseInt(process.env.PORT, 10),
  database: {
    host: process.env.DATABASE_URI,
  },
});
