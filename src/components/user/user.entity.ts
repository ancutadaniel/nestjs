import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UserDto } from './dto/create-user.dto';

@Entity()
export class UserEntity extends UserDto {
  @Column()
  age: number;

  @Column()
  sex: string;

  @Exclude()
  @Column({ default: true })
  isActive: boolean;
}
