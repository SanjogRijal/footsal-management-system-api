import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamsEntity } from './entities/team.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TeamsEntity])],
  controllers: [TeamsController],
  providers: [TeamsService],
})
export class TeamsModule {}
