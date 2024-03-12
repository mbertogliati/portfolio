import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Type,
  ViewChild
} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import HeightChangeEmitter from "./heightChangeEmitter";
@Component({
  selector: 'app-slide-animator',
  templateUrl: './slide-animator.component.html',
  styleUrls: ['./slide-animator.component.scss'],
  animations: [
    trigger('detail-slide-in', [
      transition('* => *', [
        style({transform: 'translateY(-120%)'}),
        animate("0.6s ease-in-out")
      ])
    ])
  ]
})
export class SlideAnimatorComponent{
  constructor(private changeDetector: ChangeDetectorRef) {}
  private _currentContentHeight : number = 0;
  private _animationState : number = 0;
  handleCurrentContentHeightChange : (newHeight : number) => void =
            (newHeight : number) => {
                this._currentContentHeight = newHeight;
                this.changeDetector.detectChanges();
  }
  currentContent? : {component: Type<any>, inputs: any & {heightUpdateCallbacks: HeightChangeEmitter}};
  previousContent? : {component: Type<any>, inputs: any & {heightUpdateCallbacks: HeightChangeEmitter}};
  @Input() set content(newContent : {component : Type<any>, inputs: any} | undefined){
    if(newContent){
        newContent.inputs = {...newContent.inputs, heightUpdateCallbacks: [this.handleCurrentContentHeightChange]};
    }
    this.previousContent = this.currentContent;
    this.currentContent = newContent;
    this._animationState = (this._animationState + 1) % 2; //Alternate back and forth between 0 and 1
  }
  getAnimationState() : number {
    return this._animationState;
  }
  isOpen() : boolean {
    return this.currentContent != undefined;
  }
  getContainerStyle() : any{
    return this.currentContent ? {
      'height': this._currentContentHeight + 'px',
    } : {
      'height': '0px'
    };
  }
}
