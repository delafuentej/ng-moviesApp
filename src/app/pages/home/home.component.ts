import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/film-showing-response';
import { MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public movies: Movie[]=[];
  public moviesSlideshow: Movie[]=[];

  @HostListener('window:scroll',['$event'])
  onScroll(){
    const position= (document.documentElement.scrollTop || document.body.scrollTop) +1025;
    const max= (document.documentElement.scrollHeight || document.body.scrollHeight);

    if(position > max){
      if(this.moviesService.loading) return;
      this.moviesService.getFilmsShowing()
      .subscribe( movies =>{
        this.movies.push(...movies)
      })
    }
  }
   

  constructor(private moviesService: MoviesService) {}
    

  ngOnInit(): void {
    this.moviesService.getFilmsShowing()
    .subscribe( movies =>{
      this.movies= movies;
      this.moviesSlideshow=movies;
    })
  }

  ngOnDestroy(): void {
    this.moviesService.resetFilmsShowing();
    
  }

}




