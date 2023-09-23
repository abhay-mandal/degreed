import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { DataService, MovieComplete } from '../../services/data.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent implements OnInit {
  public movieSubscription: Observable<MovieComplete>;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) {}

  public ngOnInit() {
    this.movieSubscription = this.activatedRoute.params.pipe(
      switchMap(({ id }) => {
        return this.dataService.getMovie(id as string);
      })
    );
  }
}
