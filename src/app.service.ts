import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './Schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getUserData(userID: number) {
    try {
      const user = await this.userModel.findOne({ _id: userID });
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}
