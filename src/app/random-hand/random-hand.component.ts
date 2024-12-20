import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { CardDto } from '../card-dto';
import { SortHandResponseDto } from '../sort-hand-response-dto';

@Component({
  selector: 'app-random-hand',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './random-hand.component.html',
  styleUrls: ['./random-hand.component.css'],
})
export class RandomHandComponent {
  handSize = 0; // Input value
  randomHand: CardDto[] = [];
  sortedHand: CardDto[] = [];
  colorOrder: string[] = [];
  valueOrder: string[] = [];
  errorMessage = '';

  constructor(private apiService: ApiService) {}

  generateHand() {
    if (this.handSize < 1 || this.handSize > 52) {
      this.errorMessage = 'Please enter a number between 1 and 52.';
      return;
    }
    this.errorMessage = '';

    this.apiService.generateRandomHand(this.handSize).subscribe((response) => {
      this.randomHand = response;
      this.sortedHand = [];
      this.colorOrder = [];
      this.valueOrder = [];
    });
  }

  sortHand() {
    this.apiService.sortHand(this.randomHand).subscribe((response: SortHandResponseDto) => {
      this.sortedHand = response.sortedCards;
      this.colorOrder = response.colorOrder;
      this.valueOrder = response.valueOrder;
    });
  }

  getSymbol(color: string): string {
    switch (color) {
      case 'CARREAUX':
        return '♦';
      case 'COEUR':
        return '♥';
      case 'TREFLE':
        return '♣';
      case 'PIQUE':
        return '♠';
      default:
        return '';
    }
  }

  getColorStyle(color: string): string {
    switch (color) {
      case 'CARREAUX':
      case 'COEUR':
        return 'red';
      case 'TREFLE':
      case 'PIQUE':
        return 'black';
      default:
        return 'black';
    }
  }
 getValue(value: string | number): string {
   const valueMap: { [key: string]: string } = {
     AS: 'A',
     DEUX: '2',
     TROIS: '3',
     QUATRE: '4',
     CINQ: '5',
     SIX: '6',
     SEPT: '7',
     HUIT: '8',
     NEUF: '9',
     DIX: '10',
     VALET: 'J',
     DAME: 'Q',
     ROI: 'K',
   };

   // Convert number to string, then map
   return valueMap[String(value)] || String(value);
 }


}
