import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { GenresModule } from './genres/genere.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config'

@Module({
  imports: [
    MoviesModule, 
    GenresModule,

    ConfigModule.forRoot(),
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
