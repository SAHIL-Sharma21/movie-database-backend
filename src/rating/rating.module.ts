import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RatingController } from './rating.controller';
import { Movie } from '../movies/movie.entity';
import { Rating } from "./rating.entity";
import { RatingService } from "./rating.service";

@Module({
    controllers: [RatingController],
    providers: [RatingService],
    imports: [TypeOrmModule.forFeature([Movie, Rating])],
})
export class RatingModule {}