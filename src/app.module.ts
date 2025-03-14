import { Module } from '@nestjs/common';
import { CsvParserModule } from './csv/csv.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './cereal/cereal.module';

@Module({
    imports: [
        CsvParserModule,
        PrismaModule,
        ProductsModule
    ],
})
export class AppModule { }
