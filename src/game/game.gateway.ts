import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { ClientEvents, ServerEvents } from './types';

@WebSocketGateway()
export class GameGateway {
  @SubscribeMessage(ClientEvents.Ping)
  onPing(client: Socket): void {
    client.emit(ServerEvents.Pong, {
      message: 'pong',
    });
  }
}
