import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersEntity } from './entities/index.entity';
import { PlayersService } from './service/players/players.service';
import { PlayersController } from './controller/players.controller';
// import { TeamPlayersEntity } from '../team_players/entities/team_player.entity';
import { TeamsModule } from '../teams/teams.module';
import { TeamsService } from '../teams/teams.service';
import { TeamPlayersModule } from '../team_players/team_players.module';
import { TeamPlayersEntity } from '../team_players/entities/team_player.entity';
import { TeamsEntity } from '../teams/entities/team.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PlayersEntity, TeamPlayersEntity, TeamsEntity]),
    TeamsModule,
    TeamPlayersModule,
  ],
  providers: [PlayersService, TeamsService],
  controllers: [PlayersController],
})
export class PlayersModule {}
