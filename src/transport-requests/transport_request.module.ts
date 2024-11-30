import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransportRequestsController } from './transport_request.controller';
import { TransportRequestsService } from './transport_request.service';
import { TransportRequest } from './transport_request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TransportRequest])],
  controllers: [TransportRequestsController],
  providers: [TransportRequestsService],
  exports: [TransportRequestsService],
})
export class TransportRequestsModule {}
