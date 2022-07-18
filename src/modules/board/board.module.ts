import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardController } from './board.controller';
import { Board, BoardSchema } from '../../entities/board/board'

@Module({
  imports: [
      MongooseModule.forFeature([{ name: Board.name, schema: BoardSchema}])
  ],
  controllers: [BoardController],
  providers: [],
  
})
export class BoardModule {}