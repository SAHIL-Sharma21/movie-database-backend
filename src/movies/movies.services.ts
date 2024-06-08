import { Injectable } from "@nestjs/common";
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm'
import {Movie} from './movie.entity'
import { CreateMovieDto } from "./dto/create-movies.dto";

// interface Movies {
//     id:number;
//     title: string;
//     genere?: string
// }

// @Injectable()
// export class MoviesServices{
//     private movies: Movies[] = [
//         {id: 1, title: "Movie 1", genere: "Action"},
//         {id: 2, title: "Movie 2", genere: "Rom-com"},
//         {id: 3, title: "Movie 3", genere: "Horror"},
//         {id: 4, title: "Movie 4", genere: "Action"},
//         {id: 5, title: "Movie 5", genere: "Adventure"},
//     ];
//     getAllMovies(): Movies[] {
//         // return this.movies;
//         return this.mo
//     }

// }

@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(Movie)
        private moviesRepository: Repository<Movie>
    ){}

    async getAllMovies(): Promise<Movie[]>{
        return await this.moviesRepository.find();
    }

    //filter movie by genere
   async getMoviesByGenere(genre: string): Promise<Movie[]> {
        return await this.moviesRepository.find({where: {genre}})
    }

    //create Movie
    async createMovie(createMovieDto: CreateMovieDto): Promise<Movie | null> {
        try {
            const movie = this.moviesRepository.create(createMovieDto);
            return  await this.moviesRepository.save(movie);
        } catch (error) {
            console.error("Error while creating movie:", error);
            return null; // Return null if there's an error
        }
    }
}