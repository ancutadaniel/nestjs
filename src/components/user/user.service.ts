import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private usersService) {}
  /*
    Implementation that makes use of this.usersService
  */
}
