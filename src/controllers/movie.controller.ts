import { CreateMovieDTO } from '@dtos/createMovie.dto';
import { UpdateMovieDTO } from '@dtos/updateMovie.dto';
import { MovieEntity } from '@entities/movie.entity';
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CreateMovieService } from '@services/createMovie.service';
import { DeleteMovieService } from '@services/deleteMovie.service';
import { FindAllService } from '@services/findAll.service';
import { FindMovieByIdService } from '@services/findMovie.service';
import { UpdateMovieService } from '@services/updateMovie.service';

@Controller('movies')
export class MovieController {
    constructor(
        private createMovieService: CreateMovieService,
        private findAllService: FindAllService,
        private updateMovieService: UpdateMovieService,
        private deleteMovieService: DeleteMovieService,
        private findMovieById: FindMovieByIdService,
    ) {}

    @Get()
    async FindAllService(): Promise<MovieEntity[]> {
        const moviesList = await this.findAllService.execute();
        return moviesList;
    }

    @Post()
    async createMovie(@Body() data: CreateMovieDTO): Promise<MovieEntity> {
        const savedMovie = await this.createMovieService.execute(data);
        return savedMovie;
    }

    @Put()
    async updateMovie(@Body() data: UpdateMovieDTO): Promise<MovieEntity> {
        const updatedMovie = await this.updateMovieService.execute(data);
        return updatedMovie;
    }

    @Delete(':id')
    async deleteMovie(@Param('id') id: number) {
        this.deleteMovieService.execute(Number(id));
    }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<MovieEntity> {
        const movie = await this.findMovieById.execute(Number(id));
        return movie;
    }
}
