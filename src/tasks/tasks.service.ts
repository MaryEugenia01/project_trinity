import { Injectable } from '@nestjs/common';
import { Task,TaskStatus }  from './task.entity';
import {v4} from 'uuid'
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
    //simula el database
    private tasks = [{
        id: '1',
        tittle:'Datos_Persona',
        description: 'Datos_Persona1',
        status: TaskStatus.PENDING
    }]

    getAllTasks() {
        return this.tasks;
    }

    createTasks(tittle: string, description: string) {
        const task = {
            id: v4(),
            tittle,
            description,
            status: TaskStatus.PENDING
        }
        this.tasks.push(task);

        return task;
    }
    updateTasks(id: string, updateFields: UpdateTaskDto): Task {
        const task = this.getTaskById(id);
        const newTask = Object.assign(task,updateFields);
        this.tasks = this.tasks.map((task) => (task.id === id ? newTask: task));
        return newTask;
    }
        
    getTaskById(id: string) {
        return this.tasks.find(task => task.id === id)
    }
    deleteTasks(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id)
    }
}

