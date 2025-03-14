import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from './auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';

@Module({
    imports: [
        UsersModule,
        JwtModule.registerAsync({
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('SECRET'),
                signOptions: { expiresIn: '3600s' },
            }),
            inject: [ConfigService],
        }),
    ],
    providers: [
        AuthService,
        {
            provide: APP_GUARD,
            useClass: AuthGuard
        },
        {
            provide: APP_GUARD,
            useClass: ThrottlerGuard,
        }
    ],
    controllers: [AuthController],
})
export class AuthModule { }
