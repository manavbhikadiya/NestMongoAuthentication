import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsMobilePhone, IsNumber, IsString } from 'class-validator';

export class UserServiceDto {
  @ApiProperty({ description: 'Name of the user', type: 'string' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Email of the user', type: 'string' })
  @IsEmail()
  @IsString()
  email: string;

  @ApiProperty({ description: 'Phone number of the user', type: 'number' })
  @IsNumber()
  @IsMobilePhone()
  mobile: number;

  @ApiProperty({ description: 'password of the user', type: 'string' })
  @IsString()
  password: string;
}
