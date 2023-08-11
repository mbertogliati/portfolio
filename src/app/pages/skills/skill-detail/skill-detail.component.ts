import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Skill} from "../skill";
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.scss'],

})
export class SkillDetailComponent {
  mySkill : Skill | undefined = undefined;
  previousSkill : Skill | undefined = undefined;
  slideToLeft: boolean = false;
  slideToRight: boolean = false;
  @Input() set skill(skill: Skill | undefined) {
      this.previousSkill = this.mySkill;
      this.mySkill = skill;
  };
  @Input() includeItself: boolean = true;
  @Input() enabled: boolean = true;
  @Input() set toLeft(toLeft: boolean) {
    this.slideToLeft = toLeft;
    this.slideToRight = !toLeft;
    this.enabled = false;
  } boolean = false;
}
