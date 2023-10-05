import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, map, mergeMap, switchMap } from 'rxjs';
import { DataService, MovieComplete, MovieData } from '../../services/data.service';

interface MovieState {
  selectedDecade: number;
  decades: number[];
  filteredMovies: MovieComplete[];
  allMovies: MovieComplete[];
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {
  public state$: Observable<MovieState> = {} as Observable<MovieState>;
  public selectedDecade$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.state$ = this.selectedDecade$.pipe(
      switchMap((selectedDecade: number) => {
        return this.dataService.getMovies().pipe(
          map((movieData: MovieData): MovieState => {
            return {
              allMovies: movieData.Search,
              selectedDecade: selectedDecade,
              decades: movieData.Decades,
              filteredMovies: this.dataService.getFilteredMovies(movieData.Search, selectedDecade)
            };
          })
        );
      })
    );
  }
}
