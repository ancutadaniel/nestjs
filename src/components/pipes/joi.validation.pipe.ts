import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { ObjectSchema } from '@hapi/joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: any, metadata: ArgumentMetadata): any {
    const { error } = this.schema.valid(value);
    if (error) {
      throw new BadRequestException('Validation Failed');
    } else {
      return value;
    }
  }
}
