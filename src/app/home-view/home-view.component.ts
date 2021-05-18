import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myFunction() {
   // window.open( 
     // "app-berater-portal"); 
      
    let temp: any = document.getElementById('entrypoint')
    
    if (temp.style.display === "none") {
      temp.style.display = "block";
    } else {
      temp.style.display = "none";
    }

  }

}
