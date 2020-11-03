import { Server } from 'http';
import { NestFactory } from '@nestjs/core';
import { Context } from 'aws-lambda';
import * as serverlessExpress from 'aws-serverless-express';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const lambdaWrapper = async AppModule => {
  let lambdaProxy: Server;

  async function bootstrap() {
    const expressServer = express();
    const nestApp = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressServer),
    );

    // nestApp.useGlobalPipes(
    //   new ValidationPipe({
    //     whitelist: true,
    //     transform: true,
    //     forbidNonWhitelisted: true,
    //     transformOptions: {
    //       enableImplicitConversion: true,
    //     },
    //   }),
    // );

    // const options = new DocumentBuilder()
    //   .setTitle('Iluvcoffee')
    //   .setDescription('Coffee application')
    //   .setVersion('1.0')
    //   .build();

    // const document = SwaggerModule.createDocument(nestApp, options);

    // SwaggerModule.setup('api', nestApp, document);

    await nestApp.init();

    return serverlessExpress.createServer(expressServer);
  }

  const handler = (event: any, context: Context) => {
    if (!lambdaProxy) {
      bootstrap().then(server => {
        lambdaProxy = server;
        serverlessExpress.proxy(lambdaProxy, event, context);
      });
    } else {
      serverlessExpress.proxy(lambdaProxy, event, context);
    }
  };
  return handler;
};
