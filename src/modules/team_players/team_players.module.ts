import { Module } from '@nestjs/common';
import { TeamPlayersService } from './team_players.service';
import { TeamPlayersController } from './team_players.controller';

@Module({
  controllers: [TeamPlayersController],
  providers: [TeamPlayersService],
})
export class TeamPlayersModule {}
