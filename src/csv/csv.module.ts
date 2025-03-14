import { Module } from '@nestjs/common';
import { CsvParserService } from './csv.service';
import { FileUploadController } from './csv.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    providers: [CsvParserService],
    controllers: [FileUploadController],
})
export class CsvParserModule {}
