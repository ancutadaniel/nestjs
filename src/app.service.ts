import { Injectable } from '@nestjs/common';
import { ConfigService } from './config/config.service';

@Injectable()
export class AppService {
  private helloMessage: string;

  constructor(configServices: ConfigService) {
    this.helloMessage = configServices.get('HELLO_MESSAGE');
  }

  getHello(): string {
    return 'Hello World!';
  }
}
