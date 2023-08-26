import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  constructor (private router: Router) { }

  
  goBack(){
    this.router.navigate([''])
  }

  goLinkedin(){
    window.open("https://www.linkedin.com/in/ajay-anand-215a87229/", "_blank");
  }

  goGmail(){
    window.open("https://mail.google.com/", "_blank");
  }

  goGitHub(){
    window.open("https://github.com/ajay173800", "_blank");
  }

  goWhatsApp(){
    window.open("https://www.whatsapp.com/", "_blank");
  }

  sm!: string;

  add(){
    alert("I have in record that you have added " + this.sm  + " to my database. Thank you for adding!")
  }


}
