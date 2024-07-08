import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { RegionService } from './region.service';
import { errorResponse, successResponse } from 'src/utils/response';

@Controller('regions')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Get()
  async findAll() {
    try {
      const regions = await this.regionService.findAll();
      return successResponse(regions, 'Find All Regions Successfully');
    } catch (error) {
      return errorResponse(null, error.message, error.code ? error.code : 500);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      const data = { id };
      const region = await this.regionService.findOne(data);
      return successResponse(region, 'Find One Region Successfully');
    } catch (error) {
      return errorResponse(null, error.message, error.code ? error.code : 500);
    }
  }
}
