import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/film-showing-response';
import { MoviesService } from 'src/app/services/movies.service';
import { FilmsShowing } from '../../interfaces/film-showing-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public movies: Movie[]=[];

  constructor(private moviesService: MoviesService) {}
    

  ngOnInit(): void {
    this.moviesService.getFilmsShowing()
    .subscribe( res =>{
      this.movies= res.results;
    })
  }

}
