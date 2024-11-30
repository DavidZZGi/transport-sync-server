import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { TransportRequestsService } from './transport_request.service';
import { TransportRequest } from './transport_request.entity';

@Controller('transport-requests')
export class TransportRequestsController {
  constructor(
    private readonly transportRequestsService: TransportRequestsService,
  ) {}

  @Get()
  findAll(): Promise<TransportRequest[]> {
    return this.transportRequestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<TransportRequest | null> {
    return this.transportRequestsService.findOne(id);
  }

  @Post()
  create(
    @Body() requestData: Partial<TransportRequest>,
  ): Promise<TransportRequest> {
    return this.transportRequestsService.create(requestData);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.transportRequestsService.delete(id);
  }
}
