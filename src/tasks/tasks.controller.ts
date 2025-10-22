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
import { CreateTaskDto } from "./dto/create-tasks.dto";
import { UpdateTaskDto } from "./dto/uptade-tasks.dto";

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
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Patch(":id")
  updateTask(@Param("id") id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto)
  }

  @Delete(":id")
  deleteTasks(@Param("id") id: string) {
    return this.tasksService.delete(id)
  }
}
