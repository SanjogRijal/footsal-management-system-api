import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayersEntity } from '../../entities/index.entity';
import { FindOneOptions, Repository } from 'typeorm';
import CreatePlayersDTO from '../../dto/players.dto';
import { TeamPlayersEntity } from 'src/modules/team_players/entities/team_player.entity';
import { TeamsService } from 'src/modules/teams/teams.service';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(PlayersEntity)
    private readonly playersRepository: Repository<PlayersEntity>,
    @InjectRepository(TeamPlayersEntity)
    private readonly teamPlayerRepository: Repository<TeamPlayersEntity>,
    private readonly teamService: TeamsService,
  ) {}

  async getAllPlayers() {
    const players = await this.playersRepository.find();
    return players;
  }

  async getOnePlayer(id: FindOneOptions) {
    return await this.playersRepository.findOne(id);
  }

  async addPlayer(player: CreatePlayersDTO) {
    return await this.playersRepository.save(player);
  }

  async distributePlayers(title: string) {
    const players = (await this.getAllPlayers()).sort(
      (a, b) => b.rating - a.rating,
    );

    const teams = await this.teamService.findAll();
    const positions = Array.from(
      new Set(players.map((player) => player.preferredPosition)),
    );

    const teamAssignments = this.teamService.findAll();
    const teamSizes: Record<number, number> = {};

    teams.forEach((team) => {
      teamAssignments[team.id] = {};
      positions.forEach((pos) => {
        teamAssignments[team.id][pos] = [];
      });
      teamSizes[team.id] = 0;
    });

    const shuffledPlayers = players.sort(() => Math.random() - 0.5);

    const teamIds = teams.map((team) => team.id);
    let currentTeamIndex = 0;

    for (const player of shuffledPlayers) {
      const pos = player.preferredPosition;
      const teamId = teamIds[currentTeamIndex];

      if (teamAssignments[teamId][pos].length === 0) {
        teamAssignments[teamId][pos].push(player);
        teamSizes[teamId]++;
        currentTeamIndex = (currentTeamIndex + 1) % teamIds.length; // Move to the next team
      }
    }

    for (const [teamId, positions] of Object.entries(teamAssignments)) {
      for (const [pos, players] of Object.entries(positions)) {
        (players as Array<any>).forEach((player) => {
          this.teamPlayerRepository.save({
            playerId: player.id,
            teamTitle: title,
            teamId: Number(teamId),
            position: pos,
          });
        });
      }
    }

    return { message: 'Saved' };
  }
}
