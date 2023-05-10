import { Component, inject } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css'],
})
export class CardsContainerComponent {
  cardsService: CardsService = inject(CardsService);

  cards: Card[] = [];

  constructor() {
    this.cardsService.getAllCards().then((data) => (this.cards = data));
  }
}
