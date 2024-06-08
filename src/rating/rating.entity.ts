import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Movie } from 'src/movies/movie.entity';

@Entity()
export class Rating {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' }) // Adjusted column type
    score: number;

    @Column({ type: 'text' })
    feedback: string;

    @ManyToOne(() => Movie, movie => movie.rating, { cascade: true }) // Added cascade option
    @JoinColumn({ name: 'movieId' }) // Specify the foreign key column
    movie: Movie;
}
