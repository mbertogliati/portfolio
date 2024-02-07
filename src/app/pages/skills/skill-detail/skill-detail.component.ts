import {
  AfterViewChecked,
  Component,
  Input,
  ViewEncapsulation,
  ViewChild,
  ElementRef, OnChanges, Output, EventEmitter, AfterViewInit
} from '@angular/core';
import {Skill} from "../skill";
import hljs from "highlight.js";

@Component({
  selector: 'app-skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkillDetailComponent{
  protected readonly hljs = hljs;
  private _skill : Skill | undefined = undefined;
  @Input() set skill(newSkill: Skill | undefined) {
    this._skill = newSkill;
  };
  get skill() {
    return this._skill;
  }
}
