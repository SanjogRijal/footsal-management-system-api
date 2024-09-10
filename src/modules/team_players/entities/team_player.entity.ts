import { PlayersEntity } from 'src/modules/players/entities/index.entity';
import { TeamsEntity } from 'src/modules/teams/entities/team.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('team_players')
export class TeamPlayersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  teamTitle: string;

  @ManyToOne(() => PlayersEntity, (player) => player.teamPlayers)
  player: PlayersEntity;

  @ManyToOne(() => TeamsEntity, (team) => team.teamPlayers)
  team: TeamsEntity;

  @Column()
  position: string;
}
