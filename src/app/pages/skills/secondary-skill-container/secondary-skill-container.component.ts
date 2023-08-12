import {Component, Input} from '@angular/core';
import {Icon} from "../../../shared/icon/icon";

@Component({
  selector: 'app-secondary-skill-container',
  templateUrl: './secondary-skill-container.component.html',
  styleUrls: ['./secondary-skill-container.component.scss']
})
export class SecondarySkillContainerComponent {
  @Input() icons : Icon[] | undefined;
  @Input() title : String | undefined;
}
