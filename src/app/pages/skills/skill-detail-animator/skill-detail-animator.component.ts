import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Skill} from "../skill";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-skill-detail-animator',
  templateUrl: './skill-detail-animator.component.html',
  styleUrls: ['./skill-detail-animator.component.scss'],
  animations: [
    trigger('detail-slide', [
      transition('* => *', [
        style({transform: 'translateY(-120%)'}),
        animate("0.6s ease-in-out")
      ])
    ])]
})
export class SkillDetailAnimatorComponent {
  currentSkill? : Skill;
  previouslySelectedSkill? : Skill;
  @Input() set skill(newSkill : Skill | undefined){
    this.previouslySelectedSkill = this.currentSkill;
    this.currentSkill = newSkill;
  }
  isOpen() : boolean {
    return this.currentSkill != undefined;
  }
}
