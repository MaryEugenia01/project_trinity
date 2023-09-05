import { TaskStatus } from "../task.entity"
import {IsNotEmpty,IsString,Min } from 'class-validator'

//datos que se transiferen del cliente al servidor
export class CreateTaskDto{
    @IsString()
    @IsNotEmpty()
    @Min(3)
    tittle: string
    description: string
}

export class UpdateTaskDto{
    tittle?: string
    description?: string
    status?: TaskStatus
}