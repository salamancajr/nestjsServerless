import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateBaggageDto } from '../dto/create-baggage.dto';
import { BaggageService } from './baggage.service';

@Controller('baggage')
export class BaggageController {
  constructor(private readonly baggageService: BaggageService) {}
  @Get()
  findAll() {
    return this.baggageService.findAll();
  }

  @Get('hey')
  tester() {
    return 'hey';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return id;
    //return this.baggageService.findOne(id);
  }

  @Post()
  create(@Body() createBaggageDto: CreateBaggageDto) {
    return this.baggageService.createOne(createBaggageDto);
  }
}
