import {Component, Input} from '@angular/core';
import {Icon} from "./icon";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  showDelay = 500;
  hideDelay = 100;
  @Input() icon: Icon | undefined;
}
