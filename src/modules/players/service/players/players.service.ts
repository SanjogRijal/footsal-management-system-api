import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayersEntity } from '../../entities/index.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(PlayersEntity)
    private readonly playersRepository: Repository<PlayersEntity>,
  ) {}

  async getAllPlayers() {
    const players = await this.playersRepository.find();
    if (players.length === 0) throw new NotFoundException('No data found');
    else return players;
  }

  getOnePlayer(id: FindOneOptions) {
    return this.playersRepository.findOne(id);
  }
}
