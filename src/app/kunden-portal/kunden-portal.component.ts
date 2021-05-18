import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kunden-portal',
  templateUrl: './kunden-portal.component.html',
  styleUrls: ['./kunden-portal.component.css']
})
export class KundenPortalComponent implements OnInit {

  myDropdown: any

  constructor() { }

  ngOnInit(): void {

    this.myDropdown = document.getElementById('dropMenu')
                   
  }

  onToggleClick(){
     this.myDropdown.classList.toggle("show");
                  
  }

}
