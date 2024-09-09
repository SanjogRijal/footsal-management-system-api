import { PlayersEntity } from 'src/modules/players/entities/index.entity';
import { TeamsEntity } from 'src/modules/teams/entities/team.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('team_players')
export class TeamPlayersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PlayersEntity, (player) => player.teamPlayers)
  player: PlayersEntity;

  @ManyToOne(() => TeamsEntity, (team) => team.teamPlayers)
  team: TeamsEntity;
}
