import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users') // Nombre de la tabla
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', unique: true })
  username: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'text', name: 'passwordHash' })
  passwordHash: string;
}
