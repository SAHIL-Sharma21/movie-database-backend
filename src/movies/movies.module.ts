import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesServices } from './movies.services';

@Module({
  controllers: [MoviesController],
  providers: [MoviesServices],
})
export class MoviesModule {}