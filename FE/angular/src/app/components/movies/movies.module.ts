import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { DecadesComponent } from '../navigation/decades/decades.component';
import { GoBackComponent } from '../navigation/go-back/go-back.component';
import { GoDetailsComponent } from '../navigation/go-details/go-details.component';
import { GoImdbComponent } from '../navigation/go-imdb/go-imdb.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MovieComponent } from '../movie/movie.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    SidebarComponent,
    GoBackComponent,
    GoDetailsComponent,
    GoImdbComponent,
    DecadesComponent,
    MovieCardComponent
  ],
  imports: [CommonModule, MoviesRoutingModule]
})
export class MoviesModule {}
