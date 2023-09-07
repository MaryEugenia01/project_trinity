export class Persona {}
import { Column, Entity, PrimaryGeneratedColumn, } from "typeorm";

@Entity()
export class persona {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    firstname: string;

    @Column("text")//apellido papito
    lastname: string;

    @Column("text")
    edad: string;

    
};