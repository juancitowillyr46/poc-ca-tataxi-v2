import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'users'})
export class UserEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  fullname: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;
}
