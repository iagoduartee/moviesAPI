import { UpdateMovieDTO } from '@dtos/updateMovie.dto';
import { CategoryEnum } from '@entities/category.enum';
import { MovieEntity } from '@entities/movie.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { MoviesRepository } from '@repositories/movies.repository';

@Injectable()
export class ValidateCategoryService {
    execute(category: any): boolean {
        if (!Object.values(CategoryEnum).includes(category)) {
            return false;
        }

        return true;
    }
}
