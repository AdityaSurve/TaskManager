/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

@Schema()
export class NewUser {
  @Prop({ required: true, unique: true })
  @IsString()
  @IsNotEmpty()
  public username: string;

  @Prop({ required: true, unique: true })
  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  public password: string;
}

export const NewUserSchema = SchemaFactory.createForClass(NewUser);
