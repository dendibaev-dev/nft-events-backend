import { Type } from 'class-transformer';
import {IsArray,  IsBoolean,  IsDateString, IsEmail, IsInt, IsNumber, IsOptional, IsString, ValidateNested} from 'class-validator';


export class Links {
    @IsString()
    site: string;
    
    @IsString()
    discord: string;

    @IsString()
    @IsOptional()
    twitter?: string;

    @IsString()
    @IsOptional()
    market?: string;
}


export class CreatePostDto {
    @IsString()
	title: string;

    @IsString()
	picture: string;

    @IsString()
	shortDescription: string;

    @IsString()
	description: string;

    @IsDateString()
	date: Date;

    @IsString()
	blockchain: string;

    @IsBoolean()
    @Type(() => Boolean)
    promoted: boolean;

    @IsBoolean()
    @Type(() => Boolean)
    waiting: boolean;

    @IsArray()
    @IsString({each :true})
	tags: string[];

    @IsNumber()
	count: number;

    @IsInt()
    @Type(() => Number)
	price: number;

    @IsEmail()
	email: string;

    @ValidateNested()
    links : Links;

}

