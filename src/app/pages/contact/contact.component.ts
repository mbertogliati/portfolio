import { Component } from '@angular/core';
import Message, {globalMessage} from "../../shared/message/Message";
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import EmailSender from "./EmailSender";
import {EmailValidator} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  messageForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl('')
  })

  loading: boolean = false;

  validateForm(){
    let email : AbstractControl | null = this.messageForm.get('email');
    if(this.messageForm.get('name')?.value === ""){
      globalMessage.message = ({text: "Name is required", type: "error"});
      return false;
    }
    if(email?.value === ""){
      globalMessage.message = ({text: "Email is required", type: "error"});
      return false;
    }
    //Validate email
    if(!RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$").test(email?.value)){
      globalMessage.message = ({text: "Invalid email", type: "error"});
      return false;
    }
    if(this.messageForm.get('subject')?.value === ""){
      globalMessage.message = ({text: "Subject is required", type: "error"});
      return false;
    }
    if(this.messageForm.get('message')?.value === ""){
      globalMessage.message = ({text: "Message is required", type: "error"});
      return false;
    }


    return true;
  }

  onSubmit(){
    if(!this.validateForm())
      return;
      this.loading = true;
    new EmailSender().sendEmail(this.messageForm.get('name')?.value || "",
      this.messageForm.get('email')?.value || "",
      this.messageForm.get('subject')?.value || "",
      this.messageForm.get('message')?.value || "")
      .then((message) => {
        globalMessage.message = message;
        this.loading = false;
        this.messageForm.reset({name: "", email: "", subject: "", message: ""});
    });
  }
}
