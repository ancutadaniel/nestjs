import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Type } from 'class-transformer';
import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';
import { ObjectId } from 'mongodb';

export class CatsDto {
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
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  age: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  breed: string;
}

export class UpdateCatsDto {
  id: number;
}

export class ListAllEntities {
  limit: any;
}
