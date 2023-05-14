import { Component, Input } from '@angular/core';
import { Card } from 'src/app/interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() card!: Card;
  moviesImagesBaseUrl: string = 'https://image.tmdb.org/t/p/w500';
  isEdittingModeEnabled: boolean = false;

  toggleEdittingMode = (): void => {
    this.isEdittingModeEnabled = !this.isEdittingModeEnabled;
  };
}
