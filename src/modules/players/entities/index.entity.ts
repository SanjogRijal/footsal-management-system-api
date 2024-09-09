import { TeamPlayersEntity } from 'src/modules/team_players/entities/team_player.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('players')
export class PlayersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  preferredPosition: string;

  @Column()
  joiningDate: Date;

  @OneToMany(() => TeamPlayersEntity, (teamPlayer) => teamPlayer.id)
  teamPlayers: TeamPlayersEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
