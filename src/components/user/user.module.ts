import { Global, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesGuard } from '../../enums/roles.guard';
import { User, UserSchema } from '../../schemas/user.schema';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';

@Global()
@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }], 'users')],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  exports: [UsersService],
})
export class UserModule {}
