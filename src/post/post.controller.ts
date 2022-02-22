import { Body, Controller,UseGuards, Delete, Get, Param, Post, UsePipes, ValidationPipe, Patch } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostService } from './post.service';


@Controller('posts')
export class PostController {
  constructor(private readonly service: PostService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @UsePipes(new ValidationPipe())
  @Post('create')
  async create(@Body() postCreateDto: CreatePostDto) {
    return await this.service.create(postCreateDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdatePostDto) {
    return await this.service.update(id, updateTodoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}