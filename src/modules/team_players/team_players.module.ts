import { Module } from '@nestjs/common';
import { TeamPlayersService } from './team_players.service';
import { TeamPlayersController } from './team_players.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamPlayersEntity } from './entities/team_player.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TeamPlayersEntity])],
  controllers: [TeamPlayersController],
  providers: [TeamPlayersService],
})
export class TeamPlayersModule {}
