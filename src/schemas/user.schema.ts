import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop([String])
  name: string[];

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  sex: string;

  @Prop()
  age: number;

  @Prop()
  isActive: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
