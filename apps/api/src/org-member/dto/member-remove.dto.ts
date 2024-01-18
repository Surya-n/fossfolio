import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RemoveMember {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    organisationId: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    memberId: string;
}
