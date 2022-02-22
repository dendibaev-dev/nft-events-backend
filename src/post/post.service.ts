import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {Post, PostDocument} from './schemas/post.schema'

@Injectable()
export class PostService {
    // constructor(@InjectModel(Post.name) private  postModel : Model<PostDocument>){}
    constructor(
      @InjectModel('Post') private postModel: Model<PostDocument>
      ) {}

    async findAll(): Promise<Post[]> {
        return await this.postModel.find().exec();
      }
    
      async findOne(id: string): Promise<Post> {
        return await this.postModel.findById(id).exec();
      }
    
      async create(createPostDto: CreatePostDto): Promise<Post> {
        
        const createdPost = new this.postModel(createPostDto);
        return createdPost.save();
      }

      async update(id: string, updateTodoDto: UpdatePostDto): Promise<Post> {
        return await this.postModel.findByIdAndUpdate(id, updateTodoDto).exec();
      }
    
      async delete(id: string): Promise<Post> {
        return await this.postModel.findByIdAndDelete(id).exec();
      }
}
