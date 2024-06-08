import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    genre: string;

    @Column({default: 0})
    rating: string;

    @Column()
    description: string;

    @Column({type: 'date'})
    releaseDate: Date
}