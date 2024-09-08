import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Players } from './entities/index.entity';
import { PlayersService } from './service/players/players.service';
import { PlayersController } from './controller/players/players.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Players])],
  providers: [PlayersService],
  controllers: [PlayersController],
})
export class PlayersModule {}
