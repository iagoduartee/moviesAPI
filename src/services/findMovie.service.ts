import { UpdateMovieDTO } from '@dtos/updateMovie.dto';
import { CategoryEnum } from '@entities/category.enum';
import { MovieEntity } from '@entities/movie.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { MoviesRepository } from '@repositories/movies.repository';

@Injectable()
export class FindMovieByIdService {
    constructor(private moviesRepository: MoviesRepository) {}

    async execute(id: number): Promise<MovieEntity> {
        const movie = await this.moviesRepository.findById(id);
        if (!movie) {
            throw new BadRequestException('Movie does not exists');
        }
        return movie;
    }
}
