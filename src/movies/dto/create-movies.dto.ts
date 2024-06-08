import {IsNotEmpty, IsString, IsDate, IsNumber} from 'class-validator'

export class CreateMovieDto {
    @IsNotEmpty()
    @IsString()
    title: string;
    
    @IsNotEmpty()
    @IsString()
    genre: string;

    @IsNotEmpty()
    @IsNumber()
    rating: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsDate()
    releaseDate: Date;
}