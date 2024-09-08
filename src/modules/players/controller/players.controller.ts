import { Controller, Get } from '@nestjs/common';
// import {
//   Request as ExpressRequest,
//   Response as ExpressResponse,
// } from 'express';
import { PlayersService } from '../service/players/players.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly service: PlayersService) {}
  @Get()
  async getAllPlayers() {
    try {
      const players = await this.service.getAllPlayers();
      return {
        status: 200,
        data: players,
      };
    } catch (err) {
      return { status: 400, err: err?.response?.message };
    }
  }
}
