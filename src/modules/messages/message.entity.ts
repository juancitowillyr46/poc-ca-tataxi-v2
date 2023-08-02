import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "../users/user.entity";

@Entity({name: 'messages'})
export class MessageEntity {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    message: string;

    @CreateDateColumn({nullable: true})
    created_at: Date;

    @Column('int', {nullable: true})
    created_by: number;

    @UpdateDateColumn({nullable: true})
    updated_at: Date;

    @Column('int', {nullable: true})
    updated_by: number;

    @DeleteDateColumn({nullable: true})
    deleted_at: Date;

    @Column('int', {nullable: true})
    deleted_by: number;

    @ManyToOne(() => UserEntity, user => user.messages)
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;

}