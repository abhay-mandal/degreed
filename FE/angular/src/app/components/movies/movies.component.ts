import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { DataService, MovieComplete } from '../../services/data.service';

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
    this.state$ = combineLatest([this.dataService.getMovies(), this.selectedDecade$]).pipe(
      map(([movieData, selectedDecade]) => {
        return {
          allMovies: movieData.Search,
          selectedDecade: selectedDecade,
          decades: movieData.Decades,
          filteredMovies: this.dataService.getFilteredMovies(movieData.Search, selectedDecade)
        };
      })
    );
  }
}
