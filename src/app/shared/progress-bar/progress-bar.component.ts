import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  @Input() primaryProgress: number = 0.5;
  @Input() secondaryProgress: number = 0.6;
  @Input() primaryColor: string = "#00E5D8";
  @Input() secondaryColor: string = "#4351AE";
  @Input() divisions: number = 6;
  @Input() class: string | undefined;
}
