import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, ValidationPipe } from '@nestjs/common';
import { User } from '../../schemas/user.schema';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersServices: UsersService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
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
  remove(
    @Param('id', new ParseIntPipe())
    id
  ) {
    return this.usersServices.remove(id);
  }
}
