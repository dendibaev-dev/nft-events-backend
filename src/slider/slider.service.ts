import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSliderDto } from './dto/create-slider.dto';
import { Slider, SliderDocument } from './schemas/slider.schema';

@Injectable()
export class SliderService {
    constructor(@InjectModel('Slider') private sliderModel: Model<SliderDocument>) {}

    async findAll(): Promise<Slider[]> {
        return await this.sliderModel.find().exec();
    }


    async create(createSliderDto : CreateSliderDto): Promise<Slider> {
        const createdSlider = new this.sliderModel(createSliderDto);
        return createdSlider.save();
    }


    
    async delete(id: string): Promise<Slider> {
        return await this.sliderModel.findByIdAndDelete(id).exec();
      }
}
