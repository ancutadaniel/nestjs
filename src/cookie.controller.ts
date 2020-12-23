import { Controller, Get, Req, Header, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('cookies')
export class CookiesController {
  @Get('set')
  @Header('Set-Cookie', 'cookieName = 12345') // "Using header decorator"
  setCookie(@Res() response: Response): Response {
    /*
     * If using express approach, pass @Res as param decorator
     */
    response.cookie('rememberme', '1'); // Using express res object.
    return response.send('Cookie has been set! :)');
  }

  @Get()
  checkCookie(@Req() request: Request): string {
    console.log(Object.keys(request.cookies));
    if (Object.keys(request.cookies).length > 0) {
      console.log('cookies =>', request.cookies);
      return 'Cookies are set :)';
    } else {
      return "Uh, oh! Cookie hasn't been set :'(";
    }
  }
}
