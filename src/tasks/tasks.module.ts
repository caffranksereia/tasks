import { Module } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { TasksController } from "./tasks.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Tasks, TaksSchema } from "src/schemas/tasks.schemas";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Tasks.name,
        schema: TaksSchema,
      },
    ]),
    HttpModule,
  ],
  providers: [TasksService],
  controllers: [TasksController],
})
export class TasksModule {}
