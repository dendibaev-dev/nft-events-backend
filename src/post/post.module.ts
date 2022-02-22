import {  Module, Post } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FilesModule } from 'src/files/files.module';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PostSchema } from './schemas/post.schema';

@Module({
  imports : [
    MongooseModule.forFeature([{name : 'Post', schema: PostSchema}]),
    FilesModule
  ],
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}
