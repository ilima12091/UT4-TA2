import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CardsService } from 'src/app/services/cards.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.css'],
})
export class CreationFormComponent {
  creationForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    movieImageUrl: new FormControl(''),
  });

  movies: any[] = []; // Variable para almacenar las películas

  constructor(
    private cardsService: CardsService,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.loadMovies(); // Llama al método para obtener las películas al inicializar el componente
  }

  loadMovies() {
    this.movieService.getTopRatedMovies().then((data) => {
      this.movies = data.results;
    });
  }

  submitCard() {
    console.log('crear');
  }
}
