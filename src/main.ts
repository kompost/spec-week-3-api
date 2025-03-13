import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix('v1');

    const rootConfig = new DocumentBuilder()
        .setTitle('Products API - week 3')
        .setDescription('Nice')
        .setVersion('1.0')
        .addTag('Spec API')
        .build();

    const rootDocument = SwaggerModule.createDocument(app, rootConfig);
    SwaggerModule.setup('api', app, rootDocument);
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
