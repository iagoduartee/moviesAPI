import { MovieController } from '@controllers/movie.controller';
import { UpdateMovieDTO } from '@dtos/updateMovie.dto';
import { Module } from '@nestjs/common';
import { FakeMoviesRepository } from '@repositories/fakes/fakeMovies.repository';
import { MoviesRepository } from '@repositories/movies.repository';
import { DeleteMovieService } from '@services/deleteMovie.service';
import { FindAllService } from '@services/findAll.service';
import { FindMovieByIdService } from '@services/findMovie.service';
import { UpdateMovieService } from '@services/updateMovie.service';
import { ValidateCategoryService } from '@services/validateCategory.service';
import { CreateMovieService } from './services/createMovie.service';

@Module({
    imports: [],
    controllers: [MovieController],
    providers: [
        CreateMovieService,
        UpdateMovieService,
        ValidateCategoryService,
        FindAllService,
        DeleteMovieService,
        FindMovieByIdService,
        { provide: MoviesRepository, useClass: FakeMoviesRepository },
    ],
})
export class AppModule {}
