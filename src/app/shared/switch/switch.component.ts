import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
  @Input() on : boolean = false;
  @Input() label : { on: string, off: string} = { on: '', off: ''};
  toggle() {
    this.on = !this.on;
  }
}
