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
    id: number;

    name?: string;

    rate?: number;

    description?: string;

    category?: CategoryEnum;
}
