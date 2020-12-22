import {
  Body,
  CACHE_MANAGER,
  CacheInterceptor,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { User } from '../../schemas/user.schema';
import { UserEntity } from './user.entity';
import { UsersService } from './user.service';
import { UserDto } from './dto/create-user.dto';

@Controller('users')
@UseInterceptors()
export class UsersController {
  constructor(private readonly usersServices: UsersService) {}

  @Post()
  async create(@Body() createUserDto: UserDto) {
    await this.usersServices.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersServices.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe())
    id
  ) {
    return this.usersServices.findOne(id);
  }

  @Delete(':id')
  async remove(
    @Param('id', new ParseIntPipe())
    id
  ) {
    await this.usersServices.remove(id);
  }
}
