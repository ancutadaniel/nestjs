import { HttpService, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable } from 'rxjs';
import { Cat, CatDocument } from '../../schemas/cat.schema';
import { CatsDto } from './dto/cats.dto';

@Injectable()
export class CatsService {
  private httpService: any;
  constructor(
    @InjectModel(Cat.name)
    private readonly catModel: Model<CatDocument>,
    httpService: HttpService
  ) {}

  async create(catsCatDto: CatsDto): Promise<Cat> {
    const createdCat = new this.catModel(catsCatDto);
    return createdCat.save();
  }

  findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  // findAll(): Observable<AxiosResponse<Cat[]>> {
  //   return this.httpService.get('http://localhost:3000/cats');
  // }

  findSecond() {
    return this.catModel.find();
  }

  findOne(id: number) {
    return this.catModel.findById(id);
  }

  findQuery(id: number) {
    return this.catModel.findById(id);
  }

  findUuid(uuid: string) {
    return this.catModel.findById(uuid);
  }
}
