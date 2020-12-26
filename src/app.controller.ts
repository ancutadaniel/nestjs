import {
  CacheInterceptor,
  Controller,
  Get,
  Post,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
// import { Request } from 'express';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
@UseInterceptors(CacheInterceptor)
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  findAll() {
    return [{ id: 1, name: 'Nest' }];
  }

  // @Get(':id')
  // findOne(@Req() request: Request) {
  //   // console.log(request.cookies); // or "request.cookies['cookieKey']"
  //   // or console.log(request.signedCookies);
  // }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file) {
    console.log(file);
  }

  // @Get()
  // findAll(@Session() session: Record<string, any>) {
  //   session.visits = session.visits ? session.visits + 1 : 1;
  // }
}
