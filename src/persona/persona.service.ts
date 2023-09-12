import { Injectable } from '@nestjs/common';  
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';

@Injectable()
export class PersonaService {
  create(createPersonaDto: CreatePersonaDto) {
    return 'Esto crea una nueva Persona';
  }

  findAll() {
    return `Retorna la lista de personas`;
  }

  findOne(id: number) {
    return `devuelve el #${id} de persona`;
  }

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    return `Actualiza el #${id} persona`;
  }

  remove(id: number) {
    return `Esto Quita el #${id} de persona`;
  }
}
