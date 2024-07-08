import { Injectable, NotFoundException } from '@nestjs/common';
import { findOnePayload } from 'src/interfaces/region.interface';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CityService {
  constructor(private readonly prisma: PrismaService) {} // Inject PrismaService

  async findAll() {
    return await this.prisma.tbl_city.findMany();
  }

  async findOne(data: findOnePayload) {
    const { id } = data;
    const city = await this.prisma.tbl_city.findUnique({
      where: { city_id: +id },
    });
    if (!city) {
      throw new NotFoundException(400,`City not found`);
    }
    return city;
  }
}
