import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  constructor(private moviesService: MoviesService, private activatedRoute:ActivatedRoute) { }

  

  ngOnInit(): void {
     this.activatedRoute.params.subscribe( params=>{
      this.moviesService.searchFilms( params['searchTerm']).subscribe( movies =>{
        console.log(movies)
      })

    
     //service calling

    
  })

  
}

}


