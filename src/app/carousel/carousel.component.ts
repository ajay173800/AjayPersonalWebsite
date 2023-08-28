import { Component, Input, OnInit } from '@angular/core';



interface carsouelImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  

  

  @Input() images: carsouelImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() slideInterval = 3000;
  @Input() autoSlide = false;
  @Input() x = 0;


  selectedIndex = 0;


 
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
    this.x = this.x -1;

  }


  else{
    this.selectedIndex--;
    this.x = this.x-1;
  }
}


onNextClick(): void{
  if(this.selectedIndex === this.images.length - 1){
    this.selectedIndex = 0;
    this.x = this.x + 1;
  }


  else{
    this.selectedIndex++;
    this.x = this.x + 1;
  }
}




}



