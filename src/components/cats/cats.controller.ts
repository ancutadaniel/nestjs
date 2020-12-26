import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { Role } from '../../enums/role.enum';
import { Cat } from '../../schemas/cat.schema';

import { CatsService } from './cats.service';
import { Roles } from './decorators/roles.decorator';
import { CatsDto, UpdateCatsDto } from './dto/cats.dto';
import { TimeoutInterceptor } from './interceptors/timeout.interceptor';
import { ValidationPipe } from './pipes/validation.pipe';

@Controller('cats')
// @UseGuards(RolesGuard)
// @UseInterceptors(LoggingInterceptor)
// @UseInterceptors(TransformInterceptor)
// @UseInterceptors(CacheInterceptor)
@UseInterceptors(TimeoutInterceptor)
export class CatsController {
  constructor(private readonly catsServices: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsServices.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id', new ParseIntPipe())
    id
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

  @Post()
  @Roles(Role.Admin)
  // @SetMetadata('enums', ['admin'])
  // @UseFilters(HttpExceptionFilter)
  // @UsePipes(new JoiValidationPipe(createCatSchema))
  async create(@Body(new ValidationPipe()) catsDto: CatsDto) {
    await this.catsServices.create(catsDto);
    // throw new ForbiddenException();
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
