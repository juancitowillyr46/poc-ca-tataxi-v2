import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
import { UserModel } from 'src/domain/models/user.model';

export class CreateUserDto {

    id?: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiProperty()
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password: string;

    public toModel(userEntity: CreateUserDto): UserModel {
        let userModel = new UserModel();
        userModel.id = userEntity.id;
        userModel.username = userEntity.username;
        userModel.email = userEntity.email;
        userModel.name = userEntity.name;
        return userModel;
    }
}