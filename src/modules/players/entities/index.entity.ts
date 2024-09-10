import { TeamPlayersEntity } from 'src/modules/team_players/entities/team_player.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
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

  @Column({
    nullable: true,
    type: 'int',
  })
  rating: number;

  @OneToMany(() => TeamPlayersEntity, (teamPlayer) => teamPlayer.id)
  @JoinColumn()
  teamPlayers: TeamPlayersEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
