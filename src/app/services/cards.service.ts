import { Injectable } from '@angular/core';
import { Card } from '../interfaces/card';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  url = 'http://localhost:3000';

  constructor() {}

  async getAllCards(): Promise<Card[]> {
    return (await (await fetch(`${this.url}/cards`)).json()) ?? [];
  }

  async postCard(
    title: string,
    descripntion: string,
    movieImageUrl: string
  ): Promise<boolean> {
    return true;
  }
}
