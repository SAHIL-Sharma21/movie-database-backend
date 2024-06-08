import { Body, Controller, Get, Post, Query} from '@nestjs/common';
import {MoviesService} from './movies.services' 
import { Movie } from './movie.entity';
import { CreateMovieDto } from './dto/create-movies.dto';


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


    //add  ovie
    @Post()
    async createMovie(@Body() createMovieDto: CreateMovieDto): Promise<{succes?: boolean, data?: Movie, message?: string}> {
        try {
            const {title, description, genre, rating, releaseDate} = createMovieDto;
    
            if(![title, description, genre, rating, releaseDate].some(field => field !== undefined)) {
                return {
                    succes: false,
                    message: "Please enter all the required field"
                }
            } 
    
            const data = {
                title: title,
                description,
                genre,
                rating: rating, 
                releaseDate,
            }

            console.log(data);
            
            //if all the filds are given thennwe wil make the entry in data base
            const addedMovie = await this.movieService.createMovie(data);
            
            if(!addedMovie){
                return {
                    succes: false,
                    message: "error while creating the entry."
                }
            }
    
            //if everytrhing is correct then we will retun the response
            return {
                succes: true,
                data: addedMovie,
                message: "Movie Added Successfully!"
            }
        } catch (error) {
            return {
                succes: false,
                message: "Error while creating entry in database."
            }
        }
    }
}
