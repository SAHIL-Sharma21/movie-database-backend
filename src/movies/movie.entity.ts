import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    genere: string;

    @Column({default: 0})
    rating: number;

}