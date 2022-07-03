import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/film-showing-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css']
})
export class MoviesPosterGridComponent implements OnInit {
  @Input() movies:Movie[]=[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    console.log('moviesPosterGrid',this.movies)
  }

}
