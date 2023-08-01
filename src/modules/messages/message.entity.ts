import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "../users/user.entity";

@Entity({name: 'messages'})
export class MessageEntity {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;

    @Column('int')
    created_by: number;

    @UpdateDateColumn()
    updated_at: Date;

    @Column('int')
    updated_by: number;

    @DeleteDateColumn()
    deleted_at: Date;

    @Column('int')
    deleted_by: number;

    @ManyToOne(() => UserEntity, user => user.messages)
    user: UserEntity;

}