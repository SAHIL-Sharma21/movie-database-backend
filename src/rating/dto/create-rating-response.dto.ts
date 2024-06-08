import { Rating } from '../rating.entity';

export interface CreateRatingResponseDto {
  success?: boolean;
  message?: string;
  rating?: Rating;
}