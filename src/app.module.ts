import { Module } from '@nestjs/common';
import { CsvParserModule } from './csv/csv.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './cereal/cereal.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        ThrottlerModule.forRoot({
            throttlers: [
                {
                    limit: 10, // Max requests allowed
                    ttl: 60000, // Time window in seconds
                },
            ],
        }),
        CsvParserModule,
        PrismaModule,
        ProductsModule,
        AuthModule,
        UsersModule,
    ],
})
export class AppModule { }
