import { Injectable } from '@angular/core';
import { Card } from '../interfaces/card';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private cards: Card[] = [];

  constructor() {}

  getAllCards(): Promise<Card[]> {
    return Promise.resolve(this.cards);
  }

  postCard(title: string, description: string, movieImageUrl: string): Promise<boolean> {
    const newCard: Card = {
      title,
      description,
      movieImageUrl
    };

    this.cards.push(newCard);

    return Promise.resolve(true);
  }
}
