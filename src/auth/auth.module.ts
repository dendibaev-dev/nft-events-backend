import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getJWTConfig } from 'src/configs/jwt.config';
import { PassportModule } from '@nestjs/passport';
import { JwtStratagy } from './strategies/jwt.stratagy';
;


@Module({
	controllers: [AuthController],
	imports : [
	MongooseModule.forFeature([{name : 'User', schema: UserSchema}]),
    ConfigModule,
	JwtModule.registerAsync({
       imports: [ConfigModule],
	   inject: [ConfigService],
	   useFactory: getJWTConfig
	}),
	PassportModule
],
	providers: [AuthService, JwtStratagy]
})
export class AuthModule { }
