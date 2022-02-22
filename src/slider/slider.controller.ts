import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { CreateSliderDto } from './dto/create-slider.dto';
import { SliderService } from './slider.service';

@Controller('slider')
export class SliderController {
    constructor(private readonly service: SliderService) {}

    @Get()
    async index() {
      return await this.service.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() sliderCreateDto: CreateSliderDto) {
      return await this.service.create(sliderCreateDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string) {
    return await this.service.delete(id);
   }
}
