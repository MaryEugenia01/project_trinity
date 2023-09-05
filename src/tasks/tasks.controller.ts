import { Body, Controller,Delete, Get,Param, Post,Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto'
@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService){}

    @Get()
    getAllTasks(){
        return this.tasksService.getAllTasks(); 
    }

    @Post()
    createTask(@Body() newTask:CreateTaskDto ){
        return this.tasksService.createTasks(newTask.tittle,newTask.description);   
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string){
        this.tasksService.deleteTasks(id)

    }

    @Patch(":id")//entpoint
    updateTask(@Param("id")id: string,@Body()updateFields: UpdateTaskDto){
        return this.tasksService.updateTasks(id, updateFields)
    }
   
}

