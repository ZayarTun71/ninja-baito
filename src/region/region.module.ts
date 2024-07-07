import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/pirsma.module';
import { RegionController } from './region.controller';
import { RegionService } from './region.service';


@Module({
  imports:[PrismaModule],
  controllers: [RegionController],
  providers: [RegionService],
})
export class RegionModule {}