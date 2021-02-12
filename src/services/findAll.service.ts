import { CreateMovieDTO } from '@dtos/createMovie.dto';
import { CategoryEnum } from '@entities/category.enum';
import { MovieEntity } from '@entities/movie.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { MoviesRepository } from '@repositories/movies.repository';

@Injectable()
export class FindAllService {
    constructor(private moviesRepository: MoviesRepository) {}

    async execute(): Promise<MovieEntity[]> {
        const movie = await this.moviesRepository.findAll();

        return movie;
    }
}
