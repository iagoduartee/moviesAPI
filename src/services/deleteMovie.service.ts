import { UpdateMovieDTO } from '@dtos/updateMovie.dto';
import { CategoryEnum } from '@entities/category.enum';
import { MovieEntity } from '@entities/movie.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { MoviesRepository } from '@repositories/movies.repository';

@Injectable()
export class DeleteMovieService {
    constructor(private moviesRepository: MoviesRepository) {}

    async execute(id: number): Promise<void> {
        await this.moviesRepository.delete(id);
    }
}
