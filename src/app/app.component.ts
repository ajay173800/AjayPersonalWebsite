import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // screenwidth!: any;

  // screenHeight!: any;

  // yo(){
  //   this.screenHeight = window.innerHeight;
  //   this.screenwidth = window.innerWidth;

  //   alert(this.screenHeight);
  //   alert(this.screenwidth);
    
  // }

  // 
  images = [



    {
      imageSrc: 'https://www.billboard.com/wp-content/uploads/2022/11/blink-182-2001-billboard-1548.jpg?w=942&h=623&crop=1',
      imageAlt: 'nature1'
    },

    {
      imageSrc: 'https://cdn.britannica.com/79/188779-050-B584358F/Coldplay-Chris-Martin-Will-Champion-Guy-Berryman-2009.jpg',
      imageAlt: 'nature2'
    }
  ]



}
