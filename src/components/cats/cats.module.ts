import { Global, HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from '../../schemas/cat.schema';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Global()
@Module({
  imports: [HttpModule, MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }], 'cats')],
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}
