import { EntitySchema } from 'typeorm';
import { UserEntity } from './user.entity';

export const UserSchema = new EntitySchema<UserEntity>({
  name: 'User',
  target: UserEntity,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
});
