import { Controller, Post, UseGuards, Get, Request, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { GetCurrentUserById } from './utils/get-user-by-id.decorator';
import { Response } from 'express';
import { JwtAuthGuard } from './guards/jwt-guard.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/protected')
  async getIntialData(
    @Res() res: Response,
    @GetCurrentUserById() userId: number,
  ) {
    const user = await this.appService.getUserData(userId);
    res.send(user);
  }
}
