
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { MoviesBoard, Movie } from '../interfaces/film-showing-response';
import { MovieDetails } from '../interfaces/movie-details-response';
import { Cast, Credits } from '../interfaces/credits-response';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl:string='https://api.themoviedb.org/3'
  private boardingPage:number=1;

  public loading:boolean=false;

  constructor(private http:HttpClient) { }

  get params(){
    return{
      
      api_key:"bcdc6b9c6986a26a6168de80ef74fb46",
      language:"en-US",
      page:this.boardingPage.toString()
  
    }
    
  }

  getFilmsShowing():Observable <Movie[]>{
    if(this.loading){
      return of ([])
    }
    
    this.loading=true;
   
    return this.http.get<MoviesBoard>(`${ this.baseUrl }/movie/popular`,{params:this.params})
    .pipe(
      map( (res)=>res.results) ,tap( ()=>{
      this.boardingPage += 1;
      this.loading=false;
    }))
   
  }

 
  searchFilms(searchTerm:string): Observable<Movie[]>{
    const params= {...this.params, page:1, query:searchTerm};

    //https://api.themoviedb.org/3/search/movie
    return this.http.get<MoviesBoard>(`${ this.baseUrl }/search/movie`,{params:params})
    .pipe(map(res => res.results))
  }

  resetFilmsShowing(){
    this.boardingPage=1;
  }

  getMovieDetails(id:number){
    return this.http.get<MovieDetails>(`${ this.baseUrl}/movie/${id}`, {params:this.params})
    .pipe( catchError (err => of(null)
      
    ))  
  }

  getCast(id:number): Observable<Cast[]>{
    return this.http.get<Credits>(`${this.baseUrl}/movie/${id}/credits`, {params:this.params})
    .pipe( map( res => res.cast ),
    catchError(err => of([])))
  }
}
