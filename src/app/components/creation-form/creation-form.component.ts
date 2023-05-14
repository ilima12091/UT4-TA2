import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'; // Corregido: importar Router
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

  movies: any[] = [];

  constructor(
    private cardsService: CardsService,
    private movieService: MovieService,
    private router: Router // Corregido: inyectar Router
  ) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.getTopRatedMovies().then((data) => {
      this.movies = data.results;
    });
  }

  submitCard() {
    const { title, description, movieImageUrl } = this.creationForm.value;

    if (title && description && movieImageUrl) {
      this.cardsService.postCard(title, description, movieImageUrl)
        .then(success => {
          if (success) {
            this.router.navigate(['/cards']);
          } else {
            console.log('Error al agregar la tarjeta.');
          }
        });
    } else {
      console.log('Faltan datos en el formulario.');
    }
  }
}
