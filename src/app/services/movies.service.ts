
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilmsShowing } from '../interfaces/film-showing-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getFilmsShowing():Observable <FilmsShowing>{
    return this.http.get<FilmsShowing>('https://api.themoviedb.org/3/movie/popular?api_key=bcdc6b9c6986a26a6168de80ef74fb46&language=en-US&page=1')
  }
}
