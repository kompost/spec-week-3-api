import { Module } from '@nestjs/common';
import { CerealService } from './cereal.service';
import { CerealController } from './cereal.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SearchQueryParserService } from './search-query-parser.service';

@Module({
    imports: [PrismaModule],
    providers: [CerealService, SearchQueryParserService],
    controllers: [CerealController],
})
export class ProductsModule { }
