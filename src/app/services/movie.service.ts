import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '8957f5f8f34a49441a27c556adb5a068';
  private MOVIES_IMAGES_BASE_URL = "https://image.tmdb.org/t/p/w500"

  constructor() { }

  async getTopRatedMovies() {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}`;
    const response = await fetch(url);
      return await response.json();
  }
}
