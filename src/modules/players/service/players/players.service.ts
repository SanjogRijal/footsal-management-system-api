import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayersEntity } from '../../entities/index.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(PlayersEntity)
    private readonly playersRepository: Repository<PlayersEntity>,
  ) {}

  getAllPlayers() {
    return this.playersRepository.find();
  }
}
