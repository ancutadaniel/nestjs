import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './components/cats/filters/all-exception.filter';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });

  const configServices = app.get(ConfigService);

  const options = new DocumentBuilder() // create Swagger page '/spec'
    .setTitle('API Documentation')
    .setDescription('API documentation for Cats :)')
    .setVersion('0.0.1')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('spec', app, document);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.use(helmet());
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    })
  );

  app.useGlobalFilters(new AllExceptionFilter(httpAdapter));
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: true,
    })
  );
  app.enableCors();

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
