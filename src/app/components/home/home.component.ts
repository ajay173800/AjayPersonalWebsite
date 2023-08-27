import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  

  constructor(private router: Router){ };

  goContact(){
    this.router.navigate(['contact']);
  }

  goGallery(){
    
    this.router.navigate(['gallery']);
  }

  goProject(){
    this.router.navigate(['project']);
  }

  goAbout(){
    this.router.navigate(['about']);
  }

  goExperience(){
    this.router.navigate(['experience']);
  }

  

}
