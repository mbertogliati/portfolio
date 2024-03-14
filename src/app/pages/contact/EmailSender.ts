import emailjs from '@emailjs/browser';
import Message from "../../shared/message/Message";
export default class EmailSender {
    constructor() {
        emailjs.init({
          publicKey: "BKFFFu6verZXPwsqm"
        })
    }

    public async sendEmail(name: string, email: string, subject: string, msg: string) : Promise<Message> {
      let response
      try{
          response = await emailjs.send("portfolio-mail-sender", "portfolio-template", {
              email: email,
              message: msg,
              name: name,
              subject: subject
          });
      }
      catch(e){
        return {text: "Message failed to send", type: "error"};
      }

      if(response.status === 200){
        return {text: "Message sent successfully", type: "success"};
      }else{
        return {text: "Message failed to send", type: "error"};
      }
    }
}
