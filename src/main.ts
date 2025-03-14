import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { patchNestJsSwagger, ZodValidationPipe } from 'nestjs-zod';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    patchNestJsSwagger();

    // Apply ZodValidationPipe globally
    app.useGlobalPipes(new ZodValidationPipe());
    app.setGlobalPrefix('v1');

    const rootConfig = new DocumentBuilder()
        .setTitle('Products API - week 3')
        .setDescription(
            'This is the API for the cereal lookup service - week 3',
        )
        .setVersion('1.0')
        .addTag('Specialisterne - week 3 - API')
        .build();

    const rootDocument = SwaggerModule.createDocument(app, rootConfig);
    SwaggerModule.setup('api', app, rootDocument);
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
