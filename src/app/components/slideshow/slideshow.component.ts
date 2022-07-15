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
 public swiper;
 
  constructor() { 
    
   }
 
  ngAfterViewInit(): void {
    
    this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
      
      loop: true,
      
      effect: 'creative',
      creativeEffect: {
        prev: {
          // will set `translateZ(-400px)` on previous slides
          translate: [0, 0, -400],
        },
        next: {
          // will set `translateX(100%)` on next slides
          translate: ['100%', 0, 0],
        },
      }
      
    });
    

    }
  

  ngOnInit(): void {
    console.log(this.movies)
  }
  onSlideNext(){
    this.swiper.slideNext();
  }
  onSlidePrev(){
    this.swiper.slidePrev();

  }

}
