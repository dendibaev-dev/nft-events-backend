import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SliderDocument = Slider & Document;

@Schema()
export class Slider {
  @Prop()
  id: string;

  @Prop()
  title: string;

  @Prop()
  picture: string;

  @Prop()
  description: string;

  @Prop()
  link: string;

  @Prop()
  date?: Date
}

export const SliderSchema = SchemaFactory.createForClass(Slider);