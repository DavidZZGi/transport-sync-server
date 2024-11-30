import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/user.module';
import { RecipientsModule } from './recipients/recipients.module';
import { TransportRequestsModule } from './transport-requests/transport_request.module';
import { User } from './users/user.entity';
import { Recipient } from './recipients/recipients.entity';
import { TransportRequest } from './transport-requests/transport_request.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [User, Recipient, TransportRequest], // Agrega todas las entidades aquí
      synchronize: true, // Solo en desarrollo, no recomendado para producción
    }),
    UsersModule,
    RecipientsModule,
    TransportRequestsModule,
  ],
})
export class AppModule {}
