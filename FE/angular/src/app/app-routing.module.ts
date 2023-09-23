import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/movies/movies.module').then((m) => m.MoviesModule)
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
