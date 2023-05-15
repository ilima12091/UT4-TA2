import { Component, Input, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Card } from 'src/app/interfaces/card';
import { Movie } from 'src/app/interfaces/movie';
import { CardsService } from 'src/app/services/cards.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.css'],
})
export class CreationFormComponent {
  @Input() isEditting: boolean = false;
  @Input() toggleEdittingMode!: () => void;
  @Input() card!: Card;

  cardsService: CardsService = inject(CardsService);
  moviesService: MoviesService = inject(MoviesService);

  creationForm = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    movieImageUrl: new FormControl(),
  });

  movies: Movie[] = []; // Variable para almacenar las películas

  constructor() {}

  ngOnInit() {
    const movieImageUrl = `${this.card?.selectedMovieId}|${this.card?.movieImageUrl}`;
    this.creationForm.setValue({
      title: this.card?.title ?? '',
      description: this.card?.description ?? '',
      movieImageUrl: this.card?.selectedMovieId ? movieImageUrl : '',
    });
    this.loadMovies(); // Llama al método para obtener las películas al inicializar el componente
  }

  loadMovies() {
    this.moviesService.getTopRatedMovies().then((data) => {
      this.movies = data.results;
    });
  }

  submitCard() {
    const { title, description } = this.creationForm.value;
    const [selectedMovieId, movieImageUrl] =
      this.creationForm.value.movieImageUrl.split('|');
    let card: Card = {
      title,
      description,
      selectedMovieId,
      movieImageUrl,
    };
    if (!this.isEditting) {
      this.cardsService.postCard(card).then((result) => {
        if (result) location.reload();
      });
    } else {
      card.id = this.card.id;
      this.cardsService.putCard(card).then((result) => {
        if (result) location.reload();
      });
    }
  }
}
