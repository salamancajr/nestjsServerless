import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { ret: string } {
    return { ret: 'Hello World!' };
  }
}
