import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

type FunctionConstructor =
  | StringConstructor
  | BooleanConstructor
  | NumberConstructor
  | ArrayConstructor
  | ObjectConstructor;

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype as any)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return value;
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException('Validation failed');
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return value;
  }

  private toValidate(metatype: FunctionConstructor): boolean {
    const types: FunctionConstructor[] = [
      String,
      Boolean,
      Number,
      Array,
      Object,
    ];
    return !types.includes(metatype);
  }
}
