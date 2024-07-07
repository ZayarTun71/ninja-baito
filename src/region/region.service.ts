import { Injectable, NotFoundException } from '@nestjs/common';
import { findOnePayload } from 'src/interfaces/region.interface';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RegionService {
  constructor(private readonly prisma: PrismaService) {} // Inject PrismaService

  async findAll() {
    return await this.prisma.tbl_region.findMany();
  }

  async findOne(data: findOnePayload) {
    const { id } = data;
    const region = await this.prisma.tbl_region.findUnique({
      where: { region_id: +id },
    });
    if (!region) {
      throw new NotFoundException(`Region with ID ${id} not found`);
    }
    return region;
  }
}
