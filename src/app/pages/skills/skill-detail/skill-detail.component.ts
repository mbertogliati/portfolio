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
  private _heightUpdateCallbacks : Array<Function> = [];
  private _heightChange = new EventEmitter<number>();
  height : number = 0;
  @ViewChild('skillDetailMainContainer') skillDetailContainer? : ElementRef<HTMLDivElement>;
  @Input() set skill(newSkill: Skill | undefined) {
    this._skill = newSkill;
  };
  @Input() set heightUpdateCallbacks(callbacks : Array<Function>){
    this._heightUpdateCallbacks = callbacks;
    this._heightChange.subscribe((newHeight : number) => {
        this._heightUpdateCallbacks.forEach((callback : Function) => {
            callback(newHeight);
        });
    });
  }

  get skill() {
    return this._skill;
  }
  ngAfterViewChecked(): void {
    if (this.skillDetailContainer?.nativeElement.offsetHeight && this.height != this.skillDetailContainer?.nativeElement.offsetHeight) {
      this.height = this.skillDetailContainer?.nativeElement.offsetHeight || 0;
      this._heightChange.emit(this.height);
    }
  }
}
