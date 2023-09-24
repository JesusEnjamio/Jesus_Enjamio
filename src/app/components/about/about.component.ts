import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public title: string;
  public subtitle: string;
  public email: string;
  
  constructor(){
    this.title = "Jesús Enjamio Barcena"
    this.subtitle = "Desarrollador Web"
    this.email = "jenjamiob@gmail.com"

  }
  ngOnInit(){

  }

}
