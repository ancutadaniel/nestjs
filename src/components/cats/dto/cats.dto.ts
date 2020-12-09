import { IsString, IsNumber } from 'class-validator';

export class CatsDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  breed: string;
}

export class UpdateCatsDto {
  id: number;
}

export class ListAllEntities {
  limit: any;
}
