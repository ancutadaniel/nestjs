export class CatsDto {
  id: number;
  name: string;
  age: number;
  breed: string;
}

export class UpdateCatsDto {
  id: number;
}

export class ListAllEntities {
  limit: any;
}
