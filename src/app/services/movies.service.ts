import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getFilmsShowing(){
    return this.http.get('https://api.themoviedb.org/3/movie/550?api_key=bcdc6b9c6986a26a6168de80ef74fb46')
  }
}
