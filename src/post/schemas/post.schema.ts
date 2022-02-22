import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document; 

@Schema ()
export class Links {
    @Prop()
    site: string;
    
    @Prop()
    discord: string;

    @Prop()
    twitter?: string;

    @Prop()
    market?: string;
}


@Schema()
export class Post {
    @Prop()
    id: string;

    @Prop()
	title: string;

    @Prop()
	picture: string;

    @Prop()
	shortDescription: string;

    @Prop()
	description: string;

    @Prop()
	date: Date;

    @Prop()
	blockchain: string;

    @Prop()
	tags: string[];

    @Prop()
	count: number;

    @Prop()
	price: number;

    @Prop({default: false})
    waiting: boolean;

    @Prop({default: false})
    promoted: boolean;

    @Prop()
	email: string;

    @Prop({type : Links , required : true})
    links : Links;

}


export const PostSchema = SchemaFactory.createForClass(Post)


