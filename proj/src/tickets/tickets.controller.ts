import { Controller, Get } from '@nestjs/common';

@Controller('tickets')
export class TicketsController {
  @Get()
  findAll() {
    return { tickets: 'this gets your tickets' };
  }
}
