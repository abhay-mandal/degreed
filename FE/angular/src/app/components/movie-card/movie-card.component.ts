import { Component, Input } from '@angular/core';
import { MovieComplete } from 'src/app/services/data.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() movie: MovieComplete = {} as MovieComplete;
  @Input() isMovieDetails = false;

  onImgLoadError(event: any) {
    event.target.src =
      './assets/images/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg';
  }
}
