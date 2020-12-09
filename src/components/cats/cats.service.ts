import { Injectable } from '@nestjs/common';
import { Cat } from './cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: number) {
    return Promise.resolve(undefined);
  }

  findQuery(id: number) {
    return Promise.resolve(undefined);
  }

  findUuid(uuid: string) {
    return Promise.resolve(undefined);
  }
}
