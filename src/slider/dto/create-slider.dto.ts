import {IsDate, IsDateString, IsOptional, IsString} from 'class-validator';

export class CreateSliderDto {
      @IsString()
      title: string;

      @IsString()
      picture: string;

      @IsString()
      description: string;

      @IsString()
      link: string;

      @IsOptional()
      @IsDateString()
      date?: Date;
}