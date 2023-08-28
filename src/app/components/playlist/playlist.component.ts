import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {

    @Input() x: any;
  images = [
    {
      imageSrc:
        'https://i1.sndcdn.com/artworks-000123184140-kyjvor-t500x500.jpg',
      imageAlt: 'One-Republic',
    },
    {
      imageSrc:
        'https://i1.sndcdn.com/artworks-9eDXZyDaKdxirdWF-xz4esw-t500x500.jpg',
      imageAlt: 'Dammit',
    },
    {
      imageSrc:
        'https://i.ytimg.com/vi/vF_qYyud5Cw/maxresdefault.jpg',
      imageAlt: 'Pursuit of Happiness',
    },
    {
      imageSrc:
        'https://miro.medium.com/v2/resize:fit:650/1*W0MRGp4jM-Tr7f9k0bDMyg.jpeg',
      imageAlt: 'Fancy',
    },
    {
      imageSrc:
        'https://i.ytimg.com/vi/LHCob76kigA/hqdefault.jpg',
      imageAlt: 'Fancy',
    }
  ]

  playButton(){
    
  }

  clickRightButton(){
    
  }
}
