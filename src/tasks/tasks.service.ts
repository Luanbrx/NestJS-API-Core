import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Task } from "./entities/tasks.entities";
import { CreateTaskDto } from "./dto/create-tasks.dto";
import { UpdateTaskDto } from "./dto/uptade-tasks.dto";

@Injectable()
export class TasksService {

   private tasks: Task[] = [
    {
      id: 1,
      name: "estudando programação",
      description: "Apredendo muito sobre nest.js",
      completed: false,
    }
   ]

   findall() {
    return this.tasks;
  }
  findOne(id: string) {
    const task = this.tasks.find( tasks=> tasks.id === Number(id))

    if (task) return task;

    throw new HttpException("Essa tarefa não existe.", HttpStatus.NOT_FOUND)


  }

  create(createTaskDto: CreateTaskDto) {
    const newId = this.tasks.length + 1

    const newTask = {
      id: newId,
      ...createTaskDto,
      completed: false
    }

    this.tasks.push(newTask)

    return newTask
  }
    
  update(id: string, updateTaskDto: UpdateTaskDto){
    const taskIndex = this.tasks.findIndex( task=> task.id === Number(id))

    if (taskIndex < 0){
       throw new HttpException("Essa tarefa não existe.", HttpStatus.NOT_FOUND)
    }
      
     const taskItem = this.tasks[taskIndex]

      this.tasks [taskIndex] = {
        ...taskItem,
        ...updateTaskDto,
      }

    return this.tasks[taskIndex]
  }

  delete(id: string){
    const taskIndex = this.tasks.findIndex(task=> task.id === Number(id))

    if(taskIndex<0){
      throw new HttpException("Essa tarefa não existe.", HttpStatus.NOT_FOUND )
    }

    this.tasks.splice(taskIndex, 1)
    return {
      message: "Tarefa excluida com sucesso!"
    }
  }

   }
 
