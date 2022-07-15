import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/film-showing-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css']
})
export class MoviesPosterGridComponent implements OnInit {
  @Input() movies:Movie[]=[];

  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit(): void {
    console.log('moviesPosterGrid',this.movies)
  }

  seeDetailsMovie(movie: Movie){
    this.router.navigate(['/movie', movie.id])
    console.log(movie)
  }

}
