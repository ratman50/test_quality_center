import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constant';

@Module({
  imports:[TypeOrmModule.forFeature([User]),
  JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '35000000s' },
  }),],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
