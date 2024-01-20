import { Module } from '@nestjs/common';
import { VenteService } from './vente.service';
import { VenteController } from './vente.controller';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../auth/auth.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MobileSales } from './entities/mobile.entity';
import { FixeSales } from './entities/fixe.entity';

@Module({
  imports:[TypeOrmModule.forFeature([MobileSales, FixeSales])],
  controllers: [VenteController],
  providers: [VenteService,{
    provide: APP_GUARD,
    useClass: AuthGuard,
  },],
})
export class VenteModule {}
