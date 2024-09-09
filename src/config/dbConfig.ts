import { registerAs } from '@nestjs/config';
import { PlayersEntity } from 'src/modules/players/entities/index.entity';
import { TeamPlayersEntity } from 'src/modules/team_players/entities/team_player.entity';
import { TeamsEntity } from 'src/modules/teams/entities/team.entity';

const dbConfig = () => ({
  type: process.env.DB_TYPE as 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  synchronize: process.env.DB_SYNCHRONIZE || false,
  entities: [PlayersEntity, TeamsEntity, TeamPlayersEntity],
});

export default registerAs('dbConfig', dbConfig);
