import { Injectable } from "@nestjs/common";

@Injectable()
export class TasksService {
  findall() {
    return [{ id: 1, task: "Comprar pão" }];
  }
  findOne(id: string) {
    return "Buscar Tarefa com ID" + id;
  }

  create(body: any) {
    console.log("Tarefa criada com sucesso!");
    return body
  }
}
