import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchComponent } from './search/search.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    HomeComponent,
    MovieDetailsComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
   
  ]
})
export class PagesModule { }
