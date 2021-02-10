import { CategoryEnum } from 'src/entities/category.enum';
import { MovieEntity } from 'src/entities/movie.entity';

export class UpdateMovieDTO implements MovieEntity {
    id: number;

    name: string;

    rate: number;

    description?: string;

    category: CategoryEnum;
}
