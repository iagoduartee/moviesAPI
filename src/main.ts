import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors();
    app.use(
        helmet({
            contentSecurityPolicy: {
                directives: {
                    defaultSrc: ['self'],
                    styleSrc: ['self', 'unsafe-inline'],
                    imgSrc: ['self', 'data:', 'validator.swagger.io'],
                    scriptSrc: ['self', `http: 'unsafe-inline'`],
                },
            },
        }),
    );

    app.useGlobalPipes(new ValidationPipe());

    const config = new DocumentBuilder()
        .setTitle('Movie API')
        .setDescription('Esta API foi criada para teste tecnico de estagio.')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('doc', app, document);

    await app.listen(process.env.PORT || 3000);
}
bootstrap();
