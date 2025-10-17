import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAllTasks() {
    return this.tasksService.findall();
  }

  @Get(":id")
  findOneTasks(@Param("id") id: string) {
    return this.tasksService.findOne(id);
  }

  @Post()
  createTask(@Body() body: any) {
    console.log(body)
    return this.tasksService.create(body);
  }

  @Patch(":id")
  updateTask(@Param("id") id: string, @Body() body: any) {
    console.log("id: ", id);
    console.log("Body: ", body);
    return "Atualizando tarefas";
  }

  @Delete(":id")
  deleteTasks(@Param("id") id: string) {
    console.log("ID ENVIADO");
    return "deleta a tarefa com id" + id;
  }
}
