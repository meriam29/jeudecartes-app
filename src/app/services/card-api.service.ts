import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardApiService {
  private baseUrl = 'http://localhost:8080/api/game'; // Update this to match your backend API

  constructor(private http: HttpClient) {}

  // Generate a random hand
  generateRandomHand(cardNumber: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/generate-hand?cardNumber=${cardNumber}`);
  }

  // Sort the hand
  sortHand(cards: any[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/sorthand`, cards);
  }
}
