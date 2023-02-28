import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { Tasks, TasksDocuments } from "src/schemas/tasks.schemas";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Tasks.name)
    private TaskModel: Model<TasksDocuments>
  ) {}
}
