import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Rating } from "./rating.entity";
import { CreateRatingDto } from "./dto/create-rating.dto";
import { Movie } from "../movies/movie.entity";

@Injectable()
export class RatingService {
  constructor(
    @InjectRepository(Rating)
    private ratingRepository: Repository<Rating>,
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  async createRating(createRatingDto: CreateRatingDto): Promise<{success?: boolean, message?: string, data?: Rating}> {
   try {
     const { score, feedback, movieId } = createRatingDto;
     console.log(score);
     
     const movie = await this.movieRepository.findOne({where: {id: movieId}});
 
     if (!movie) {
       throw new Error("Movie not found");
     }
 
     const rating = new Rating();
     rating.score = Number(score);
     rating.feedback = feedback;
     rating.movie = movie;
 
     const ratings = await this.ratingRepository.save(rating);

     return {
        success: true,
        message: "Ratings added succesfully",
        data: ratings,
     }
   } catch (error) {
    return {
        success: false,
        message: "Cannot get the movie"
    }
   }
  }

  async getMovieRatings(movieId: number): Promise<{success?: boolean, data?: Rating[], message?: string}> {
    try {
        const moviesRating =  await this.ratingRepository.find({
          where: { movie: { id: movieId } },
          relations: ['movie'],
        });
    
        if(moviesRating.length === 0) {
            return {
                success: false,
                data: [],
                message: "Movies rating did not found",
            }
        }
    
        return {
            success: true,
            data: moviesRating,
            message: "Movies Fetched Successfuly"
        }
    } catch (error) {
        return {
            success: false,
            message: "Error while getting movies rating"
        }
    }
  }
}