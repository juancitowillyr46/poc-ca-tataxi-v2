import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class SearchFilterMessageDto {

    @ApiProperty({ required: false })
    @IsString()
    nameUser?: string;

    @ApiProperty({ required: false })
    date?: Date;
}