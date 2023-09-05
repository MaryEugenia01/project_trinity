import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { AnimalModule } from './animal/animal.module';
import { PersonaModule } from './persona/persona.module';

@Module({
  imports: [TasksModule, AnimalModule, PersonaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
