import { Controller, Get} from '@nestjs/common';
import {MoviesService} from './movies.services' 
import { Movie } from './movie.entity';


@Controller('api/movies')
export class MoviesController {
    constructor(private readonly movieService: MoviesService) {}
    @Get()
       async getAllMovies(): Promise<{movies: Movie[], message: string}>{
            const movies = await this.movieService.getAllMovies();

            if(movies.length !== 0){
                return {
                    movies,
                    message: "all movies are fetched successfully!"
                }
            }
            return {
                message: "No movies found in the databse, Please Add them",
                movies
            } 
        }
}

