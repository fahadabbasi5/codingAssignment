import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMoviesComponent } from './all-movies/all-movies.component'
import { MovieDetailsComponent } from './movie-details/movie-details.component'

const routes: Routes = [
  { path : "" , redirectTo: '/moviesList' , pathMatch:'full' },
  {path : "moviesList" , component : AllMoviesComponent },
  {path : "movieDetails/:id" , component : MovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
