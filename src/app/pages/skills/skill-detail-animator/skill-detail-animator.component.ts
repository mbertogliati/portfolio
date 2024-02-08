import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, ViewChild} from '@angular/core';
import {Skill} from "../skill";
import {animate, style, transition, trigger} from "@angular/animations";
import {SkillDetailComponent} from "../skill-detail/skill-detail.component";

@Component({
  selector: 'app-skill-detail-animator',
  templateUrl: './skill-detail-animator.component.html',
  styleUrls: ['./skill-detail-animator.component.scss'],
  animations: [
    trigger('detail-slide-in', [
      transition('* => *', [
        style({transform: 'translateY(-120%)'}),
        animate("0.6s ease-in-out")
      ])
    ])
  ]
})
export class SkillDetailAnimatorComponent{
  constructor(private changeDetector: ChangeDetectorRef) {}
  private _currentSkillHeight : number = 0;
  currentSkill? : Skill;
  previouslySelectedSkill? : Skill;
  @Input() set skill(newSkill : Skill | undefined){
    this.previouslySelectedSkill = this.currentSkill;
    this.currentSkill = newSkill;
  }
  isOpen() : boolean {
    return this.currentSkill != undefined;
  }
  getContainerStyle() : any{
    return this.currentSkill ? {
      'height': this._currentSkillHeight + 'px',
    } : {
      'height': '0px'
    };
  }
  handleSelectedSkillContainerChange(newHeight : number) : void {
    this._currentSkillHeight = newHeight;
    this.changeDetector.detectChanges();
  }
}
