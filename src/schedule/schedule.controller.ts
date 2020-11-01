import { Controller, Get } from '@nestjs/common';

@Controller('schedule')
export class ScheduleController {
  @Get()
  findAll() {
    return { schedules: 'this gets your schedules' };
  }
}
