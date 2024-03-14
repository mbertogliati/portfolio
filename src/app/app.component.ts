import { Component,} from '@angular/core';
import * as $ from 'jquery';
import Message, {globalMessage} from "./shared/message/Message";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  protected readonly globalMessage = globalMessage;
}
