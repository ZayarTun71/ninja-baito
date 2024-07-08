import { Controller, Get, Param } from '@nestjs/common';
import { CityService } from './city.service';
import { errorResponse, successResponse } from 'src/utils/response';

@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  async findAll() {
    try {
      const cities = await this.cityService.findAll();
      return successResponse(cities, 'Find All Cities Successfully');
    } catch (error) {
      return errorResponse(null, error.message, error.code ? error.code : 500);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      const data = { id };
      const city = await this.cityService.findOne(data);
      return successResponse(city, 'Find One City Successfully');
    } catch (error) {
      return errorResponse(null, error.message, error.code ? error.code : 500);
    }
  }
}
