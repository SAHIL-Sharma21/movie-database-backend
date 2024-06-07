import { Controller, Get} from '@nestjs/common';
import {MoviesServices} from './movies.services' 

@Controller('api/movies')
export class MoviesController {
    constructor(private readonly movieService: MoviesServices) {}
    @Get()
        getAllMovies(): {movies: any[], message: string}{
            const movies = this.movieService.getAllMovies();
            return {
                movies,
                message: "all movies are fetched successfully!"
            }
        }
}

