import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from './post/post.module';
import { SliderModule } from './slider/slider.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { FilesModule } from './files/files.module';




@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://admin:admin@mongo_db:27017', {
      dbName: 'my_db'
   }),
    AuthModule,
    PostModule,
    SliderModule,
    FilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}