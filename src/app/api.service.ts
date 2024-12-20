import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardDto } from './card-dto';
import { SortHandResponseDto } from './sort-hand-response-dto';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/api/game';

  constructor(private http: HttpClient) {}

  generateRandomHand(size: number): Observable<CardDto[]> {
    return this.http.get<CardDto[]>(`${this.baseUrl}/generate-hand?cardNumber=${size}`);
  }

  sortHand(hand: CardDto[]): Observable<SortHandResponseDto> {
    return this.http.post<SortHandResponseDto>(`${this.baseUrl}/sorthand`, hand);
  }
}
