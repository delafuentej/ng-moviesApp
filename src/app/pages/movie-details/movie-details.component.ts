import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MovieDetails} from '../../interfaces/movie-details-response';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  public movie;

  constructor(private activatedRoute: ActivatedRoute,  private moviesService: MoviesService, private location: Location) { }

  ngOnInit(): void {
    const { id }= this.activatedRoute.snapshot.params;
    console.log(id)
     this.moviesService.getMovieDetails(id).subscribe( (movie:MovieDetails) =>{
      this.movie=movie;
      console.log(movie)
    })
  }
  backToHome(){
    return this.location.back();
  }

}
