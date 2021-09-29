import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return new Intl.DateTimeFormat('en-IN').format(
      new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738)),
    );
  }
}
