import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
  UseFilters,
  UsePipes,
} from '@nestjs/common';
import { CatsDto, UpdateCatsDto } from './dto/cats.dto';
import { CatsService } from './cats.service';
import { Cat } from './cat.interface';
import { HttpExceptionFilter } from '../filters/http-exception.filter';
import { JoiValidationPipe } from '../pipes/joi.validation.pipe';
import { ValidationPipe } from '../pipes/validation.pipe';

@Controller('cats')
export class CatsController {
  constructor(private catsServices: CatsService) {}

  @Post()
  // @UseFilters(HttpExceptionFilter)
  // @UsePipes(new JoiValidationPipe(createCatSchema))
  async create(@Body(new ValidationPipe()) catsDto: CatsDto) {
    this.catsServices.create(catsDto);
    // throw new ForbiddenException();
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    // return this.catsServices.findAll();
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      },
      HttpStatus.FORBIDDEN,
    );
  }

  @Get(':id')
  async findOne(
    @Param('id', new ParseIntPipe())
    id,
  ) {
    return this.catsServices.findOne(id);
  }

  @Get()
  async findQuery(@Query('id', ParseIntPipe) id: number) {
    return this.catsServices.findQuery(id);
  }

  @Get(':uuid')
  async findUuid(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    return this.catsServices.findUuid(uuid);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCatDto: UpdateCatsDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }

  // @Get()
  // findAll(@Query() query: ListAllEntities) {
  //   return `This action returns all cats (limit: ${query.limit} items)`;
  // }
}
