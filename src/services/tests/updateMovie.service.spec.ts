import { CreateMovieDTO } from '@dtos/createMovie.dto';
import { UpdateMovieDTO } from '@dtos/updateMovie.dto';
import { CategoryEnum } from '@entities/category.enum';
import { FakeMoviesRepository } from '@repositories/fakes/fakeMovies.repository';
import { MoviesRepository } from '@repositories/movies.repository';
import { CreateMovieService } from '@services/createMovie.service';
import { UpdateMovieService } from '@services/updateMovie.service';
import { ValidateCategoryService } from '@services/validateCategory.service';

describe('Update Movie Service', () => {
    let moviesRepository: MoviesRepository;
    let updateMovieService: UpdateMovieService;
    let validateCategory: ValidateCategoryService;
    let updateDTO: UpdateMovieDTO;
    beforeEach(async () => {
        moviesRepository = new FakeMoviesRepository();
        validateCategory = new ValidateCategoryService();
        updateMovieService = new UpdateMovieService(
            moviesRepository,
            validateCategory,
        );

        const savedMovie = await moviesRepository.create({
            category: CategoryEnum.ACTION,
            name: 'Velozes e Furiosos 5',
            rate: 5,
            description: 'Um filme bom de mais da conta!',
        });

        updateDTO = {
            ...savedMovie,
            name: 'Oliver bonitao',
        };
    });

    it('category should not be approved', async () => {
        await expect(
            updateMovieService.execute({
                ...updateDTO,
                category: 97,
            }),
        ).rejects.toBeInstanceOf(Error);
    });

    it('Category is correct, update done', async () => {
        await expect(
            updateMovieService.execute({
                ...updateDTO,
            }),
        ).resolves.toMatchObject(updateDTO);
    });
});
