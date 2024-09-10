import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';

import { PlayersService } from '../service/players/players.service';
import CreatePlayersDTO from '../dto/players.dto';

@Controller('players')
export class PlayersController {
  constructor(private readonly service: PlayersService) {}
  @Get()
  async getAllPlayers() {
    try {
      const players = await this.service.getAllPlayers();
      const distributedTeams =
        await this.service.distributePlayers('Friday Footsal');
      console.log(distributedTeams);
      return {
        status: 200,
        data: players,
      };
    } catch (err) {
      throw new HttpException('error' + err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post()
  async addPlayer(@Body() body: CreatePlayersDTO) {
    try {
      const addedPlayer = await this.service.addPlayer(body);
      return addedPlayer;
    } catch (error) {
      throw new HttpException(
        'Server Error ' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
