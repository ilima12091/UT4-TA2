import { Component, Input, inject } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() card!: Card;
  moviesImagesBaseUrl: string = 'https://image.tmdb.org/t/p/w500';
  isEdittingModeEnabled: boolean = false;

  cardsService: CardsService = inject(CardsService);

  toggleEdittingMode = (): void => {
    this.isEdittingModeEnabled = !this.isEdittingModeEnabled;
  };

  deleteCard() {
    this.cardsService.deleteCard(this.card.id!).then((result) => {
      if (result) location.reload();
    });
  }
}
