import { TeamPlayersEntity } from 'src/modules/team_players/entities/team_player.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('teams')
export class TeamsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => TeamPlayersEntity, (teamPlayer) => teamPlayer.id)
  teamPlayers: TeamPlayersEntity[];

  @UpdateDateColumn()
  updatedAt: Date;
}
