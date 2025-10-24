import { PartialType } from "@nestjs/mapped-types";
import { IsBoolean, IsOptional, } from "class-validator";
import { CreateTaskDto } from "./create-tasks.dto";

export class UpdateTaskDto extends PartialType(CreateTaskDto){

  @IsBoolean()
  @IsOptional()
  readonly completed?: boolean;
}