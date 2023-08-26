import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  constructor (private router: Router) { }

  goWW(){
    window.open('https://www.walleniuswilhelmsen.com/', '_blank');
  }

  goKumon(){
    window.open('https://www.kumon.com/south-plainfield-nj', '_blank');

  }

  goRutgers(){
    window.open('https://learningcenters.rutgers.edu/student-employment-training/learning-assistant-program', '_blank');

  }

  goEyeLevel(){
    window.open('https://www.myeyelevel.com/US/center/edisonnorth?null=', '_blank');

  }

  goHome(){
    this.router.navigate(['']);
  }
}
