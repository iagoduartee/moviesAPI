import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNumber, IsString, isString } from 'class-validator';
import { CategoryEnum } from 'src/entities/category.enum';
import { MovieEntity } from 'src/entities/movie.entity';

export class CreateMovieDTO implements Omit<MovieEntity, 'id'> {
    @ApiProperty()
    @IsDefined()
    @IsString()
    name: string;

    @ApiProperty()
    @IsDefined()
    @IsNumber()
    rate: number;

    @ApiProperty()
    @IsString()
    description?: string;

    @ApiProperty()
    @IsDefined()
    @IsNumber()
    category: CategoryEnum;
}
