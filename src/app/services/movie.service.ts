import { Injectable } from '@angular/core';
import { Card } from '../interfaces/card';
import { CardComponent } from '../components/card/card.component';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

    MOVIES_BASE_URL = "https://api.themoviedb.org/3";
    MOVIES_IMAGES_BASE_URL = "https://image.tmdb.org/t/p/w500"
    API_KEY = "8957f5f8f34a49441a27c556adb5a068";

    async loadMovies() {
        try {
            const response = await (await fetch(`${this.MOVIES_BASE_URL}/movie/top_rated?api_key=${this.API_KEY}`)).json();
            return response;        
        } catch(error) {
            alert("Ocurrió un error al cargar las películas")
            return null;
        }
    }

    submitApplication() {

    }
}