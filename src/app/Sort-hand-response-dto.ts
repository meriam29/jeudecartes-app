import { CardDto } from './card-dto';

export interface SortHandResponseDto {
  sortedCards: CardDto[];
  colorOrder: string[];
  valueOrder: string[];
}
