import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Entity()
export class UserEntity extends CreateUserDto {
  @Column()
  age: number;

  @Column()
  sex: string;

  @Column({ default: true })
  isActive: boolean;
}
