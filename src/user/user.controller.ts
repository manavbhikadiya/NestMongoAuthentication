import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { ApiOperation } from '@nestjs/swagger';
import { UserServiceDto } from './dtos/user-service.dto';
import { JwtAuthGuard } from 'src/guards/jwt-guard.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/createUser')
  @ApiOperation({ description: 'create user' })
  async createdUser(
    @Res() res: Response,
    @Body() createUserDto: UserServiceDto,
  ) {
    const data = await this.userService.createUser(createUserDto);
    res.status(200).send(data);
  }
}
