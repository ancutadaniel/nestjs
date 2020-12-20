import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Type } from 'class-transformer';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { ObjectId } from 'mongodb';

export class CreateUserDto {
  @ApiProperty({ readOnly: true, required: false, example: new ObjectId() })
  id?: ObjectId;

  @ApiProperty({ readOnly: true, required: false })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  @Exclude({ toClassOnly: true })
  createdAt?: Date;

  @ApiProperty({ readOnly: true, required: false })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  @Exclude({ toClassOnly: true })
  updatedAt?: Date;

  @ApiProperty({ readOnly: true, required: false })
  @IsOptional()
  @Exclude({ toClassOnly: true })
  createdBy?: string;

  @ApiProperty({ readOnly: true, required: false })
  @IsOptional()
  @Exclude({ toClassOnly: true })
  updatedBy?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  lastName: string;
}
