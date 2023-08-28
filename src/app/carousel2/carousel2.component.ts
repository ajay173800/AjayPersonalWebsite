import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';



interface carsouelImage {
  imageSrc: string;
  imageAlt: string;
}


@Component({
  selector: 'app-carousel2',
  templateUrl: './carousel2.component.html',
  styleUrls: ['./carousel2.component.css']
})
export class Carousel2Component {
  @Input() images: carsouelImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() slideInterval = 3000;
  @Input() autoSlide = false;


  constructor(private router: Router) { }
  selectedIndex = 0;

  ctr: number = 0;


 
  ngOnInit(): void {
      if(this.autoSlide){
        this.autoSlideImages();
      }
  }


 
autoSlideImages(): void{
  setInterval(() => {
    this.onNextClick();
  }, this.slideInterval)
}


selectImage(index: number): void{
  this.selectedIndex = index;
}


onPrevClick(): void{
  if(this.selectedIndex === 0){
    this.selectedIndex = this.images.length - 1;

  }


  else{
    this.selectedIndex--;
  }
}


onNextClick(): void{
  if(this.selectedIndex === this.images.length - 1){
    this.selectedIndex = 0;
  }


  else{
    this.selectedIndex++;
  }
}

audio = new Audio();



play(){

    if(this.selectedIndex === 0){
     

      if(this.ctr % 2 == 0){
        this.audio.src = "assets/CountingStars.mp3";
        this.audio.load();
        this.audio.play();
        this.ctr = this.ctr + 1;
      }

      else{

        this.audio.pause();
        this.ctr = this.ctr + 1;
      }
      
  }

  if(this.selectedIndex == 1){
    if(this.ctr % 2 == 0){
      this.audio.src = "assets/Circles.mp3";
      this.audio.load();
      this.audio.play();
      this.ctr = this.ctr + 1;
    }

    else{
      this.audio.pause();
      this.ctr = this.ctr + 1;
    }
  }

  if(this.selectedIndex == 2){
    if(this.ctr % 2 == 0){
      this.audio.src = "assets/aar.mp3";
      this.audio.load();
      this.audio.play();
      this.ctr = this.ctr + 1;
    }

    else{
      this.audio.pause();
      this.ctr = this.ctr + 1;
    }
  }

  
  if(this.selectedIndex == 3){
    if(this.ctr % 2 == 0){
      this.audio.src = "assets/GoodTime.mp3";
      this.audio.load();
      this.audio.play();
      this.ctr = this.ctr + 1;
    }

    else{
      this.audio.pause();
      this.ctr = this.ctr + 1;
    }
  }

  if(this.selectedIndex == 4){
    if(this.ctr % 2 == 0){
      this.audio.src = "assets/7 years.mp3";
      this.audio.load();
      this.audio.play();
      this.ctr = this.ctr + 1;
    }

    else{
      this.audio.pause();
      this.ctr = this.ctr + 1;
    }
  }
  

  


}

goHome(){
  this.audio.pause();
  this.router.navigate(['']);
}
}
