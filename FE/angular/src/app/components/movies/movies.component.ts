import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DataService, MovieComplete, MovieData } from '../../services/data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {
  public currDecade: number | undefined;
  // public decades: number[] = [];
  public filteredMovies: MovieComplete[] = [];
  public movies: MovieComplete[] = [];
  public moviesSubscription: Observable<MovieData> = {} as Observable<MovieData>;

  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.moviesSubscription = this.dataService.getMovies().pipe(
      tap((data) => {
        this.movies = data.Search;
        this.displayMovies();
      })
    );
  }

  public displayMovies(decade?: number): void {
    if (!this.movies?.length) {
      this.filteredMovies = [];
      return;
    }

    this.currDecade = decade;
    this.filteredMovies = this.dataService.getFilteredMovies(this.movies, decade);
  }
}
