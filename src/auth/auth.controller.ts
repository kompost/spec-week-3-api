import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation } from '@nestjs/swagger';
import { SignInDto } from './dto/sign-in.dto';
import { AuthGuard } from './auth.guard';
import { Public } from './public.decorator';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Public()
    @ApiOperation({ summary: 'Sign in here' })
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: SignInDto) {
        return this.authService.signIn(signInDto.username, signInDto.password);
    }
}
