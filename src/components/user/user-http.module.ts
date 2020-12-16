import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';

@Module({
  imports: [UserModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UserHttpModule {}
