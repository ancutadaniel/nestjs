import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './components/cats/cats.module';
import { logger } from './components/cats/helpers/logger.middleware';
import { CatsController } from './components/cats/cats.controller';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(logger)
      // .exclude({ path: 'cats', method: RequestMethod.GET })
      .forRoutes(CatsController);
  }
}
