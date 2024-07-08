import { Module } from '@nestjs/common';
import { RegionModule } from './region/region.module';
import { CityController } from './city/city.controller';
import { CityModule } from './city/city.module';

@Module({
  imports: [
    RegionModule,
    CityModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
