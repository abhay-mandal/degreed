import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardComponent } from './movie-card.component';
import { GoDetailsComponent } from '../navigation/go-details/go-details.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

describe('MovieCardComponent', () => {
  let spectator: Spectator<MovieCardComponent>;
  let component: MovieCardComponent;
  const createComponent = createComponentFactory({
    component: MovieCardComponent,
    imports: [],
    declarations: [],
    providers: [],
    shallow: true,
    detectChanges: false
  });

  beforeEach(() => {
    const mockMovies = {
      Title: 'Mock Movie',
      Year: 2000,
      Rated: 'G',
      Released: '01 Jan 2000',
      Runtime: '90 min',
      Genre: 'Mock Genre',
      Director: 'Director McMock',
      Writer: 'Writer Mock, Writer Mockerson',
      Actors: 'Actor McMock, Actor Mockerson',
      Plot: 'Mock movie plot summary.',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      imdbID: 'tt123',
      Type: 'movie'
    };

    spectator = createComponent({
      props: {
        movie: mockMovies,
        isMovieDetails: false
      }
    });
    component = spectator.component;
  });

  test('should create the component', () => {
    expect(component).toBeTruthy();
  });

  test('should set movie Year to "2000"', () => {
    expect(component.movie.Year).toBe(2000);
  });

  test('should set isMovieDetails to false', () => {
    expect(component.isMovieDetails).toBeFalsy();
  });

  test('should set a default image source on image load error', () => {
    const event = { target: { src: '' } };
    component.onImgLoadError(event);
    expect(event.target.src).toContain(
      'MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg'
    );
  });
});
