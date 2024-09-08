import { registerAs } from '@nestjs/config';
import { PlayersEntity } from 'src/modules/players/entities/index.entity';

const dbConfig = () => ({
  type: process.env.DB_TYPE as 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  synchronize: process.env.DB_SYNCHRONIZE || false,
  entities: [PlayersEntity],
});

export default registerAs('dbConfig', dbConfig);
