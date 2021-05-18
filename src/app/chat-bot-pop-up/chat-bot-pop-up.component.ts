import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-bot-pop-up',
  templateUrl: './chat-bot-pop-up.component.html',
  styleUrls: ['./chat-bot-pop-up.component.css']
})
export class ChatBotPopUpComponent implements OnInit {

  constructor() { }

  modal: any
  messeger: any
  btn: any
  span: any

  @Input() idNumber: any =''

  temp:any

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    
    
    this.modal = document.getElementById("myModal"+this.idNumber);
    this.messeger = document.getElementById("mymesseger");


    // Get the button that opens the modal
    this.btn = document.getElementById("myBtn"+this.idNumber);
  
    // Get the <span> element that closes the modal
    this.span  = document.getElementById("closingSpan");

    console.log(this.modal)

  }

  showMessager(): void {
    
    this.messeger.style.display = "block";
  }
  
  showModal(): void {
    
    this.modal.style.display = "block";
  }
  closeMessager(): void {
    this.messeger.style.display = "none";
  }
  closeModal(): void {
    this.modal.style.display = "none";
  }
}
