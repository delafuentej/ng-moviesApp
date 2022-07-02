import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor( private moviesService:MoviesService){
    this.moviesService.getFilmsShowing()
    .subscribe( res =>{
     console.log(res)
      res.results[0]
    })
  }
}
