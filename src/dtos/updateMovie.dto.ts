import { ApiProperty } from '@nestjs/swagger';
import {
    IsDefined,
    IsNumber,
    isNumber,
    IsString,
    isString,
} from 'class-validator';
import { CategoryEnum } from 'src/entities/category.enum';
import { MovieEntity } from 'src/entities/movie.entity';

export class UpdateMovieDTO {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name?: string;

    @ApiProperty()
    rate?: number;

    @ApiProperty()
    description?: string;

    @ApiProperty()
    category?: CategoryEnum;
}
