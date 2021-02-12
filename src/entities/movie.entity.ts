import { ApiProperty } from '@nestjs/swagger';
import { CategoryEnum } from './category.enum';

export class MovieEntity {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    rate: number;

    @ApiProperty()
    description?: string;

    @ApiProperty({ enum: [0, 1], description: '0 = ação e 1 = terror' })
    category: CategoryEnum;
}
