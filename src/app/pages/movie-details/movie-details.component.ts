import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,  private moviesService: MoviesService) { }

  ngOnInit(): void {
    const { id }= this.activatedRoute.snapshot.params;
    console.log(id)
     this.moviesService.getMovieDetails(id).subscribe( movie =>{
      console.log(movie)
    })
  }

}
