import { UpdateMovieDTO } from '@dtos/updateMovie.dto';
import { CategoryEnum } from '@entities/category.enum';
import { MovieEntity } from '@entities/movie.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { MoviesRepository } from '@repositories/movies.repository';
import { ValidateCategoryService } from './validateCategory.service';

@Injectable()
export class UpdateMovieService {
    constructor(
        private moviesRepository: MoviesRepository,
        private validateCategory: ValidateCategoryService,
    ) {}

    async execute(data: UpdateMovieDTO): Promise<MovieEntity> {
        const isCategoryValid = this.validateCategory.execute(data.category);
        if (!isCategoryValid) {
            throw new BadRequestException('A categoria deve ser válida');
        }

        const movie = await this.moviesRepository.update(data);

        return movie;
    }
}
