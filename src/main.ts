import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  //app.useGlobalFilters(new HttpExceptionFilter());
  // app.useGlobalInterceptors(
  //   new WrapResponseInterceptor(),
  //   new TimeoutInterceptor(),
  // );

  const options = new DocumentBuilder()
    .setTitle('Iluvcoffee')
    .setDescription('Coffee application')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
