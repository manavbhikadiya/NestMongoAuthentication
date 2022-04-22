import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('local/signin')
  async signInLocal(@Body() authDto: AuthDto) {
    return await this.authService.signInLocal(authDto);
  }
}
