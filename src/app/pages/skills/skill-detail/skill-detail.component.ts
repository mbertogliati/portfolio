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
export class SkillDetailComponent implements AfterViewChecked{
  protected readonly hljs = hljs;
  private _skill : Skill | undefined = undefined;
  height : number = 0;
  @ViewChild('skillDetailMainContainer') skillDetailContainer? : ElementRef<HTMLDivElement>;
  @Input() set skill(newSkill: Skill | undefined) {
    this._skill = newSkill;
  };
  @Output() heightChange = new EventEmitter<number>();
  get skill() {
    return this._skill;
  }
  ngAfterViewChecked(): void {
    if (this.skillDetailContainer?.nativeElement.offsetHeight && this.height != this.skillDetailContainer?.nativeElement.offsetHeight) {
      this.height = this.skillDetailContainer?.nativeElement.offsetHeight || 0;
      this.heightChange.emit(this.height);
    }
  }
}
