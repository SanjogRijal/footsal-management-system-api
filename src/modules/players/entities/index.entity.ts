import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('players')
export class Players {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'string',
  })
  name: string;

  @Column()
  preferredPosition: string;

  @Column()
  joiningDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
