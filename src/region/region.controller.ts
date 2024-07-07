import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { RegionService } from './region.service';

@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  // GET /region
  @Get()
  async findAll() {
    return await this.regionService.findAll();
  }

  // GET /region/:id
  @Get(':id')
  async findOne(@Param('id') id: number) {
    const data ={id};
    const region = await this.regionService.findOne(data);
    if (!region) {
      throw new NotFoundException(`Region with ID ${id} not found`);
    }
    return region;
  }

}
