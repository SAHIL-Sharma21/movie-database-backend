import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { RatingService } from './rating.service';
import { Rating } from './rating.entity';


@Controller('api/rating')
export class RatingController {
    constructor(private readonly ratingService: RatingService){}

    @Post()
    async createRating(@Body() createReatingDto: CreateRatingDto): Promise<{success?: boolean, data?: Rating}> {
        return this.ratingService.createRating(createReatingDto);
    }


    @Get(':movieId')
    async getMovieRating(@Param('movieId') movieId: number): Promise<{success?: boolean, data?: Rating[]}> {
        return this.ratingService.getMovieRatings(movieId);
    }
}
