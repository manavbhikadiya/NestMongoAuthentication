import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/Schemas/user.schema';
import { Model } from 'mongoose';
import { UserServiceDto } from './dtos/user-service.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(createUserDto: UserServiceDto) {
    try {
      const userCreate = new this.userModel(createUserDto);
      await userCreate.save();
      return userCreate;
    } catch (error) {
      return { message: 'Something went wrong. Please try again later.' };
    }
  }

  async getUserData() {
    try {
      const getUser = await this.userModel.find();
      return getUser;
    } catch (error) {
      return { message: 'Something went wrong. Please try again later.' };
    }
  }

  async findOne(email: string) {
    try {
      const user = await this.userModel.find({ email: email });
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}
