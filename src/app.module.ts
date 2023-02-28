import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { UsersService } from "./users/users.service";
import { UsersModule } from "./users/users.module";
import { TasksModule } from "./tasks/tasks.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TasksModule,
    MongooseModule.forRoot("mongodb://localhost:27017"),
  ],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
