import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CatsDto, UpdateCatsDto, ListAllEntities } from './dto/cats.dto';
import { CatsService } from './cats.service';
import { Cat } from './cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsServices: CatsService) {}

  @Post()
  async create(@Body() catsDto: CatsDto) {
    this.catsServices.create(catsDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatsDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }

  // @Get()
  // findAll(@Query() query: ListAllEntities) {
  //   return `This action returns all cats (limit: ${query.limit} items)`;
  // }
}
