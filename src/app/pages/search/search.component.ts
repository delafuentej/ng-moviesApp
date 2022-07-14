import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from 'src/app/interfaces/film-showing-response';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchTerm: string="";
  public movies: Movie[]=[];
  constructor(private moviesService: MoviesService, private activatedRoute:ActivatedRoute) { }

  

  ngOnInit(): void {
   

     this.activatedRoute.params.subscribe( params=>{
      this.searchTerm= params['searchTerm'];

      this.moviesService.searchFilms( params['searchTerm']).subscribe( movies =>{
       this.movies=movies;
      })

    
     //service calling

    
  })

  
}

}


