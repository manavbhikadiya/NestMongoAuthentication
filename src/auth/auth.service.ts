import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signInLocal(authDto: AuthDto) {
    const user: any = await this.userService.findOne(authDto.email);
    if (!user) {
      throw new UnauthorizedException('Credentials are incorrect');
    }
    if (user && user.password !== authDto.password) {
      throw new UnauthorizedException('Credentials are incorrect');
    }
    return this.signUser(user._id, user.email, 'user');
  }

  signUser(userId: number, email: string, type: string) {
    return this.jwtService.sign({
      sub: userId,
      email,
      claim: type,
    });
  }
}
