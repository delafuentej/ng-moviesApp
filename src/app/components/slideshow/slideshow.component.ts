import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Movie } from '../../interfaces/film-showing-response';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies:Movie[]=[];
  constructor() { }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      
      loop: true,
    
      
    });
  }

  ngOnInit(): void {
    console.log(this.movies)
  }

}
