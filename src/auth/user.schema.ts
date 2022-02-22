import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";



export type UserDocument = User & Document;

@Schema()
export class User {

    @Prop({ unique: true })
	email: string;

	@Prop()
	passwordHash: string;

 
}

export const UserSchema = SchemaFactory.createForClass(User);