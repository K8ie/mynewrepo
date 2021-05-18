import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.css']
})
export class MessageViewComponent implements OnInit {

  constructor() { }

  modal: any
  btn: any
  span: any

  @Input() idNumber: String =''

  temp:any

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    
    
    this.modal = document.getElementById("myModal"+this.idNumber);

    // Get the button that opens the modal
    this.btn = document.getElementById("myBtn"+this.idNumber);
  
    // Get the <span> element that closes the modal
    this.span  = document.getElementById("closingSpan");

    console.log(this.modal)

  }

  showMessager(): void {
    
    this.modal.style.display = "block";
  }
  closeMessager(): void {
    this.modal.style.display = "none";
  }

}
