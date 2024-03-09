import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  ViewEncapsulation,
  ChangeDetectorRef
} from '@angular/core';
import {NgbCollapse} from "@ng-bootstrap/ng-bootstrap";
import {Skill} from "../skill";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {SkillDetailComponent} from "../skill-detail/skill-detail.component";
import {SkillDetailAnimatorComponent} from "../skill-detail-animator/skill-detail-animator.component";
import {languagesAndFrameworks} from "./skill-data";
@Component({
  selector: 'app-skill-scroll',
  templateUrl: './skill-scroll.component.html',
  styleUrls: ['./skill-scroll.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('toggleLanguageMode', [
      transition(':enter', [
          style({opacity: '0%', transform: 'translateY(-100%)'}),
          animate('300ms ease-in-out', style({opacity: '60%', transform: 'translateY(0%)'})),
          animate('150ms ease-in-out', style({opacity: '100%'}))
        ]
      ),
      transition(':enter', [
          style({opacity: '100%',}),
          animate('300ms ease-in-out', style({opacity: '0%', transform: 'translateY(100%)'}))
        ]
      )
    ])
  ]
})
export class SkillScrollComponent implements AfterViewInit{
  private scrollAmount: number = 100;

  constructor(private cdr: ChangeDetectorRef) {}


  @ViewChild('skillScrollContainer') skillScrollContainer?: ElementRef<HTMLDivElement>;
  @ViewChild('skillDetailContainer') skillDetailContainer?: ElementRef<HTMLDivElement>;
  @ViewChild('selectedSkillDetail') selectedSkillDetail?: ElementRef<SkillDetailComponent>;
  isScrollTopLeft : boolean = true;
  isScrollTopRight : boolean = false;
  isLanguageMode : boolean = true;
  isSkillDetailVisible : boolean = false;

  toLeft : boolean = false;
  showDelay = 300;
  hideDelay = 100;
  skillDetailContainerHeight? : number = undefined;


  selectedSkill : Skill | undefined;

  ngAfterViewInit(): void {
    this.updateScrollButtons();
  }
  private scroll(value: number): void {
    this.skillScrollContainer ? this.skillScrollContainer.nativeElement.scrollLeft += value : undefined;
  }
  private updateScrollButtons(): void {
    if(this.skillScrollContainer){
      let element = this.skillScrollContainer.nativeElement;
      this.isScrollTopLeft = element.scrollLeft === 0;
      this.isScrollTopRight = element.scrollLeft == element.scrollWidth - element.clientWidth;
    }
  }
  public scrollRight(): void {
    this.scroll(this.scrollAmount);
  }
  public scrollLeft(): void {
    this.scroll(-this.scrollAmount);
  }
  public onScroll(event: Event): void {
    this.updateScrollButtons();
  }
  public toggleSkill(skill: Skill): void{
    if(this.selectedSkill === skill){
      this.selectedSkill = undefined;
    }else{
      this.selectedSkill = skill;
    }
  }
  public toggleLanguageMode(){
    this.isLanguageMode = !this.isLanguageMode;
  }
  getSkills(): Skill[] {
    return this.isLanguageMode ? languagesAndFrameworks.programmingLanguages : languagesAndFrameworks.frameworks;
  }

  updateSkillDetailContainerHeight(height: number){
    this.skillDetailContainerHeight = height;
    this.cdr.detectChanges();
  }

  protected readonly transition = transition;
  protected readonly languagesAndFrameworks = languagesAndFrameworks;
}
