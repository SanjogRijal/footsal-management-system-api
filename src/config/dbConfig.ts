import { registerAs } from '@nestjs/config';

const dbConfig = () => ({
  type: process.env.DB_TYPE as 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  synchronize: process.env.DB_SYNCHRONIZE || false,
});

export default registerAs('dbConfig', dbConfig);
