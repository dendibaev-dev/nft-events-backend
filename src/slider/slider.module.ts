import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SliderSchema } from './schemas/slider.schema';
import { SliderController } from './slider.controller';
import { SliderService } from './slider.service';

@Module({
  imports : [
    MongooseModule.forFeature([{name : 'Slider', schema: SliderSchema}])
  ],
  controllers: [SliderController],
  providers: [SliderService]
})
export class SliderModule {}
