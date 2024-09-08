import { Controller, Get } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('players')
export class PlayersController {
  @Get('')
  getAllPlayers(request: Request, response: Response) {
    response.json({
      data: 'hello world',
    });
  }
}
