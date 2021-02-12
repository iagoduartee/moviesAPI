import { CreateMovieDTO } from '@dtos/createMovie.dto';
import { CategoryEnum } from '@entities/category.enum';
import { FakeMoviesRepository } from '@repositories/fakes/fakeMovies.repository';
import { MoviesRepository } from '@repositories/movies.repository';
import { FindAllService } from '@services/findAll.service';

describe('Find all Service', () => {
    let moviesRepository: MoviesRepository;
    let findAllService: FindAllService;
    beforeEach(() => {
        moviesRepository = new FakeMoviesRepository();
        findAllService = new FindAllService(moviesRepository);
    });

    it('findAll movies should return an Array', async () => {
        const entities = await findAllService.execute();
        expect(entities).toBeInstanceOf(Array);
    });
});
