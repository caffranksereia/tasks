import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type TasksDocuments = HydratedDocument<Tasks>;

@Schema()
export class Tasks {
  @Prop()
  id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  task: string;

  @Prop({ required: true })
  concluded: boolean;

  @Prop({ required: true })
  date: Date;
}
export const TaksSchema = SchemaFactory.createForClass(Tasks);
