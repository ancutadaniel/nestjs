import { Injectable } from '@nestjs/common';
import { UsersService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}
  /*
    Implementation that makes use of this.usersService
  */
}
