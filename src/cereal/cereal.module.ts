import { Module } from '@nestjs/common';
import { CerealService } from './cereal.service';
import { CerealController } from './cereal.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SearchService } from './search-query-parser.service';

@Module({
    imports: [PrismaModule],
    providers: [CerealService, SearchService],
    controllers: [CerealController],
})
export class ProductsModule { }
