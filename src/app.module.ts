import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { User, UserSchema } from './Schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nestMongo'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
