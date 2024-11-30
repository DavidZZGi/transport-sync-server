import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { RecipientsService } from './recipients.service';
import { Recipient } from './recipients.entity';

@Controller('recipients')
export class RecipientsController {
  constructor(private readonly recipientsService: RecipientsService) {}

  @Get()
  findAll(): Promise<Recipient[]> {
    return this.recipientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Recipient | null> {
    return this.recipientsService.findOne(id);
  }

  @Post()
  create(@Body() recipientData: Partial<Recipient>): Promise<Recipient> {
    return this.recipientsService.create(recipientData);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.recipientsService.delete(id);
  }
}
