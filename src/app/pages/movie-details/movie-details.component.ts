import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Location } from '@angular/common';
import { MovieDetails } from '../../interfaces/movie-details-response';
import { Cast } from 'src/app/interfaces/credits-response';
import { combineLatest } from 'rxjs'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  public movie;
  public cast:Cast[]=[];


  constructor(private activatedRoute: ActivatedRoute,  private moviesService: MoviesService, private location: Location, private router: Router) { }

  ngOnInit(): void {
    const { id }= this.activatedRoute.snapshot.params;

    combineLatest([ this.moviesService.getMovieDetails(id), this.moviesService.getCast(id)

    ]).subscribe( ([movie, cast]) =>{
      if(!movie){
        this.router.navigateByUrl('/home');
        return;
     }
     this.movie=movie; 

     this.cast=cast.filter( item=> item.profile_path !== null)
   
      
    })
   
    /*  this.moviesService.getMovieDetails(id).subscribe( (movie) =>{

      if(!movie){
         this.router.navigateByUrl('/home');
         return;
      }
      this.movie=movie; 
    }) */
   

   /*  this.moviesService.getCast(id).subscribe( cast =>{


        this.cast=cast.filter( item=> item.profile_path !== null)
      console.log('cast', cast)}) */
  }
  backToHome(){
    return this.location.back();
  }

}
