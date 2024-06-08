import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { GenresModule } from './genres/genere.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config'
import { RatingModule } from './rating/rating.module';

@Module({
  imports: [
    MoviesModule, 
    GenresModule,
    RatingModule,

    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.DB_USER_NAME,
      password: process.env.DB_USER_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true
    }),
  ],
})
export class AppModule {}
