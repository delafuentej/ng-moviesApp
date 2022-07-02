import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { SearchComponent } from './pages/search/search.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path:'home', component: HomeComponent},
  { path:'search/:searchTerm', component:SearchComponent},
  { path:'movie/:id', component: MovieDetailsComponent},
  { path:'**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
