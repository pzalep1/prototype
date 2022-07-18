import { Body, Controller, Get, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Board } from 'src/entities/board/board';
import { BoardCreateDTO } from 'src/entities/board/create-board';
import { User } from '../../entities/user/user';
import { UserWriteDTO } from '../../entities/user/userWriteDTO';

@Controller()

export class BoardController {
    constructor(
        @InjectModel(Board.name) private boardModel: Model <any>
    ) {}

@Post ('/board')
@UsePipes(ValidationPipe)
async createBoard(@Body() BoardCreateDTO :BoardCreateDTO): Promise<string>{
const board = new this.boardModel(BoardCreateDTO);
await board.save();
return 'Board Created!'
}
}
