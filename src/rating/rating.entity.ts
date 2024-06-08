import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { Movie } from 'src/movies/movie.entity';

@Entity()
export class Rating {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'int', width: 1})
    score: number;

    @Column({type: 'text'})
    feedback: string;

    @ManyToOne(() => Movie, (movie) => movie.rating)
    movie: Movie;

}