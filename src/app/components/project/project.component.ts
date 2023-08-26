import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

     constructor(private router: Router){ }

     goPage(){
      window.open("https://github.com/ajay173800", "_blank");
     }

     goHome(){
      this.router.navigate(['']);
     }
}
