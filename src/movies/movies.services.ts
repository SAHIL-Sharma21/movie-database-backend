import { Injectable } from "@nestjs/common";
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm'
import {Movie} from './movie.entity'

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

    getAllMovies(): Promise<Movie[]>{
        return this.moviesRepository.find();
    }
}