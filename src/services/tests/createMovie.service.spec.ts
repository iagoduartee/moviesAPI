import { CreateMovieDTO } from '@dtos/createMovie.dto';
import { CategoryEnum } from '@entities/category.enum';
import { CreateMovieService } from '@services/createMovie.service';
import { FakeMoviesRepository } from 'src/repositories/fakes/fakeMovies.repository';
import { MoviesRepository } from 'src/repositories/movies.repository';

describe('Create Movie Service', () => {
    let moviesRepository: MoviesRepository;
    let createMovieService: CreateMovieService;
    let createDTO: CreateMovieDTO;
    beforeEach(() => {
        moviesRepository = new FakeMoviesRepository();
        createMovieService = new CreateMovieService(moviesRepository);
        createDTO = {
            category: CategoryEnum.ACTION,
            name: 'Velozes e Furiosos',
            rate: 5,
            description: 'Um filme bom de mais da conta!',
        };
    });

    it('Category should not be approved', async () => {
        expect(
            createMovieService.execute({
                ...createDTO,
                category: 97,
            }),
        ).rejects.toBeInstanceOf(Error);
    });
});
