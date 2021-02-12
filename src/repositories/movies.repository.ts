import { CreateMovieDTO } from '@dtos/createMovie.dto';
import { UpdateMovieDTO } from '@dtos/updateMovie.dto';
import { MovieEntity } from '@entities/movie.entity';

export abstract class MoviesRepository {
    abstract findById(id: number): Promise<MovieEntity>;

    abstract create(data: CreateMovieDTO): Promise<MovieEntity>;

    abstract update(data: UpdateMovieDTO): Promise<MovieEntity>;

    abstract delete(id: number): Promise<void>;

    abstract findAll(): Promise<MovieEntity[]>;
}
