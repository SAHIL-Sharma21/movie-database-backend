import { Controller, Get, Query} from '@nestjs/common';
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

    //new endpoint
    @Get('genre')
    async getMoviesByGenre(@Query('genre') genre: string): Promise<{movies: Movie[], message: string}> {
        if(!genre){
            return {
                movies: [],
                message: "No Genre is found"
            }
        }

        const movies = await this.movieService.getMoviesByGenere(genre);
        return {
            movies,
            message: "All movies are Fetched by their genre!"
        }
    }
}

