import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransportRequest } from './transport_request.entity';

@Injectable()
export class TransportRequestsService {
  constructor(
    @InjectRepository(TransportRequest)
    private readonly transportRequestRepository: Repository<TransportRequest>,
  ) {}

  findAll(): Promise<TransportRequest[]> {
    return this.transportRequestRepository.find({
      relations: ['userId', 'recipientId'],
    });
  }

  findOne(id: number): Promise<TransportRequest | null> {
    return this.transportRequestRepository.findOne({
      where: { id },
      relations: ['userId', 'recipientId'],
    });
  }

  create(requestData: Partial<TransportRequest>): Promise<TransportRequest> {
    const request = this.transportRequestRepository.create(requestData);
    return this.transportRequestRepository.save(request);
  }

  async delete(id: number): Promise<void> {
    await this.transportRequestRepository.delete(id);
  }
}
