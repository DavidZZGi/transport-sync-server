import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Recipient } from '../recipients/recipients.entity';

@Entity('transport_requests')
export class TransportRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  userId: String;

  @ManyToOne(() => Recipient, (recipient) => recipient.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'recipientId' })
  recipientId: String;

  @Column({ type: 'int' })
  status: number;

  @Column({ type: 'text' })
  createdAt: string;

  @Column({ type: 'text', nullable: true })
  notes: string;
}
