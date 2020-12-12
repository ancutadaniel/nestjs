import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
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
  app.useGlobalFilters(new AllExceptionFilter(httpAdapter));

  await app.listen(3000);

  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(configServices);
}

bootstrap();
