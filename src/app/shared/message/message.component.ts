import {Component, Input} from '@angular/core';
import Message from "./Message";
import {NgbAlert} from "@ng-bootstrap/ng-bootstrap";
import {state, style, trigger} from "@angular/animations";

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [
    NgbAlert
  ],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1
      })),
      state('closed', style({
        opacity: 0,
        transform: 'translateY(100%)'
      }))
    ])
  ]
})
export class MessageComponent {
  private _message?: Message;
  private open : boolean = false;

  constructor(){
    this._message = {text: "", type: "info"};
  }
  @Input() set message(newMessage: Message | undefined){
    this._message = newMessage;
    if(this._message){
      this.open = true;
      setTimeout(() => {
        this.open = false;
      }, 5000);
      return
    }
    this.open = false;
  }
  getMessage(){
    return this._message;
  }
  isOpen(){
    return this.open;
  }
  close(){
    this.open = false;
  }
}
