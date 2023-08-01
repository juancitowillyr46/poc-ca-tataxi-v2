import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { MessageEntity } from '../messages/message.entity';

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

  @OneToMany(() => MessageEntity, message => message.user)
  messages: MessageEntity[];
}
