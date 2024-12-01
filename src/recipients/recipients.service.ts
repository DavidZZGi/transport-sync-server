import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipient } from './recipients.entity';

@Injectable()
export class RecipientsService {
  constructor(
    @InjectRepository(Recipient)
    private readonly recipientRepository: Repository<Recipient>,
  ) {}

  findAll(): Promise<Recipient[]> {
    return this.recipientRepository.find({ relations: ['userId'] });
  }

  findOne(id: number): Promise<Recipient | null> {
    return this.recipientRepository.findOne({
      where: { id },
      relations: ['user'],
    });
  }

  create(recipientData: Partial<Recipient>): Promise<Recipient> {
    const recipient = this.recipientRepository.create(recipientData);
    return this.recipientRepository.save(recipient);
  }

  async delete(id: number): Promise<void> {
    await this.recipientRepository.delete(id);
  }
}
