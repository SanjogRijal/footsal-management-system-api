import { Injectable } from '@nestjs/common';
import { CreateTeamPlayerDto } from './dto/create-team_player.dto';
import { UpdateTeamPlayerDto } from './dto/update-team_player.dto';
// import { PlayersService } from '../players/service/players/players.service';
// import { TeamsService } from '../teams/teams.service';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { TeamPlayersEntity } from './entities/team_player.entity';

@Injectable()
export class TeamPlayersService {
  constructor() {} // private readonly teamService: TeamsService, // private readonly playerService: PlayersService, // private readonly teamPlayerRepository: Repository<TeamPlayersEntity>, // @InjectRepository(TeamPlayersEntity)
  create(_createTeamDto: CreateTeamPlayerDto) {
    console.log(_createTeamDto);
    return 'This action adds a new teamPlayer';
  }

  findAll() {
    return `This action returns all teamPlayers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teamPlayer`;
  }

  update(id: number, updateTeamPlayerDto: UpdateTeamPlayerDto) {
    console.log(updateTeamPlayerDto);
    return `This action updates a #${id} teamPlayer`;
  }

  remove(id: number) {
    return `This action removes a #${id} teamPlayer`;
  }

  // async distributePlayers(title: string) {
  //   const players = (await this.playerService.getAllPlayers()).sort(
  //     (a, b) => b.rating - a.rating,
  //   );

  //   const teams = await this.teamService.findAll();
  //   // Create a list of positions
  //   const positions = Array.from(
  //     new Set(players.map((player) => player.preferredPosition)),
  //   );

  //   // Initialize team assignments
  //   const teamAssignments = this.teamService.findAll();
  //   const teamSizes: Record<number, number> = {};

  //   teams.forEach((team) => {
  //     teamAssignments[team.id] = {};
  //     positions.forEach((pos) => {
  //       teamAssignments[team.id][pos] = [];
  //     });
  //     teamSizes[team.id] = 0;
  //   });

  //   // Shuffle players to ensure randomness
  //   const shuffledPlayers = players.sort(() => Math.random() - 0.5);

  //   // Round-robin assignment of players to teams
  //   const teamIds = teams.map((team) => team.id);
  //   let currentTeamIndex = 0;

  //   for (const player of shuffledPlayers) {
  //     const pos = player.preferredPosition;
  //     const teamId = teamIds[currentTeamIndex];

  //     if (teamAssignments[teamId][pos].length === 0) {
  //       // Assign player to the current team
  //       teamAssignments[teamId][pos].push(player);
  //       teamSizes[teamId]++;
  //       currentTeamIndex = (currentTeamIndex + 1) % teamIds.length; // Move to the next team
  //     }
  //   }

  //   for (const [teamId, positions] of Object.entries(teamAssignments)) {
  //     for (const [pos, players] of Object.entries(positions)) {
  //       (players as Array<any>).forEach((player) => {
  //         this.teamPlayerRepository.save({
  //           playerId: player.id,
  //           teamId: Number(teamId),
  //           position: pos,
  //         });
  //       });
  //     }
  //   }

  //   return { message: 'Saved' };
  // }
}
