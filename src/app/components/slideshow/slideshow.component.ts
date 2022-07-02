import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interfaces/film-showing-response';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  @Input() movies:Movie[]=[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.movies)
  }

}
