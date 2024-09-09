import { Injectable } from '@nestjs/common';
import { CreateTeamPlayerDto } from './dto/create-team_player.dto';
import { UpdateTeamPlayerDto } from './dto/update-team_player.dto';

@Injectable()
export class TeamPlayersService {
  create(createTeamPlayerDto: CreateTeamPlayerDto) {
    return 'This action adds a new teamPlayer';
  }

  findAll() {
    return `This action returns all teamPlayers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teamPlayer`;
  }

  update(id: number, updateTeamPlayerDto: UpdateTeamPlayerDto) {
    return `This action updates a #${id} teamPlayer`;
  }

  remove(id: number) {
    return `This action removes a #${id} teamPlayer`;
  }
}
