import { Controller, Get, Request } from '@nestjs/common';
import { Request as ExpressRequest, Response } from 'express';

@Controller('players')
export class PlayersController {
  @Get('')
  getAllPlayers(@Request() request: ExpressRequest, response: Response) {
    response.json({
      data: 'hello world',
    });
  }
}
