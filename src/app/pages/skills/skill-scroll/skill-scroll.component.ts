import {Component, ElementRef, ViewChild, AfterViewInit, ViewEncapsulation} from '@angular/core';
import {Skill} from "../skill";
import {MatTooltipModule} from '@angular/material/tooltip';
@Component({
  selector: 'app-skill-scroll',
  templateUrl: './skill-scroll.component.html',
  styleUrls: ['./skill-scroll.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkillScrollComponent implements AfterViewInit{

  private scrollAmount: number = 100;

  @ViewChild('skillScrollContainer') skillScrollContainer?: ElementRef<HTMLDivElement>;

  isSkillSelected : boolean = false;
  isScrollTopLeft : boolean = true;
  isScrollTopRight : boolean = false;
  showDelay = 100;
  hideDelay = 100;
  mySkills : Skill[] = [
    {
      name: "Javascript",
      iconURL: "/assets/img/skills/js.png",
      currentLevel: 2.6,
      goalLevel: 4,
      exampleCode: "document.getElementById('hi-mom!')",
      description: "I have learned vanilla javascript to know the basics about web development, including:<br>" +
        "- DOM Handling<br>" +
        "- JQuery<br>" +
        "- AJAX Requests<br>" +
        "- Promises & Callbacks<br>" +
        "- JSON<br>"
    },
    {
      name: "C",
      iconURL: "/assets/img/skills/c.png",
      currentLevel: 2.6,
      goalLevel: 4,
      exampleCode: "document.getElementById('hi-mom!')",
      description: "I have learned vanilla javascript to know the basics about web development, including:<br>" +
        "- DOM Handling<br>" +
        "- JQuery<br>" +
        "- AJAX Requests<br>" +
        "- Promises & Callbacks<br>" +
        "- JSON<br>"
    },
    {
      name: "Java",
      iconURL: "/assets/img/skills/java.png",
      currentLevel: 2.6,
      goalLevel: 4,
      exampleCode: "document.getElementById('hi-mom!')",
      description: "I have learned vanilla javascript to know the basics about web development, including:<br>" +
        "- DOM Handling<br>" +
        "- JQuery<br>" +
        "- AJAX Requests<br>" +
        "- Promises & Callbacks<br>" +
        "- JSON<br>"
    },
    {
      name: "Python",
      iconURL: "/assets/img/skills/python.png",
      currentLevel: 2.6,
      goalLevel: 4,
      exampleCode: "document.getElementById('hi-mom!')",
      description: "I have learned vanilla javascript to know the basics about web development, including:<br>" +
        "- DOM Handling<br>" +
        "- JQuery<br>" +
        "- AJAX Requests<br>" +
        "- Promises & Callbacks<br>" +
        "- JSON<br>"
    },
    {
      name: "Ruby",
      iconURL: "/assets/img/skills/ruby.png",
      currentLevel: 2.6,
      goalLevel: 4,
      exampleCode: "document.getElementById('hi-mom!')",
      description: "I have learned vanilla javascript to know the basics about web development, including:<br>" +
        "- DOM Handling<br>" +
        "- JQuery<br>" +
        "- AJAX Requests<br>" +
        "- Promises & Callbacks<br>" +
        "- JSON<br>"
    },
    {
      name: "Scala",
      iconURL: "/assets/img/skills/scala.png",
      currentLevel: 2.6,
      goalLevel: 4,
      exampleCode: "document.getElementById('hi-mom!')",
      description: "I have learned vanilla javascript to know the basics about web development, including:<br>" +
        "- DOM Handling<br>" +
        "- JQuery<br>" +
        "- AJAX Requests<br>" +
        "- Promises & Callbacks<br>" +
        "- JSON<br>"
    },
    {
      name: "Haskell",
      iconURL: "/assets/img/skills/haskell.png",
      currentLevel: 2.6,
      goalLevel: 4,
      exampleCode: "document.getElementById('hi-mom!')",
      description: "I have learned vanilla javascript to know the basics about web development, including:<br>" +
        "- DOM Handling<br>" +
        "- JQuery<br>" +
        "- AJAX Requests<br>" +
        "- Promises & Callbacks<br>" +
        "- JSON<br>"
    },
    {
      name: "PHP",
      iconURL: "/assets/img/skills/php.png",
      currentLevel: 2.6,
      goalLevel: 4,
      exampleCode: "document.getElementById('hi-mom!')",
      description: "I have learned vanilla javascript to know the basics about web development, including:<br>" +
        "- DOM Handling<br>" +
        "- JQuery<br>" +
        "- AJAX Requests<br>" +
        "- Promises & Callbacks<br>" +
        "- JSON<br>"
    },];

  selectedSkill : Skill = this.mySkills[0];
  ngAfterViewInit(): void {
    this.updateScrollButtons();
  }
  private scroll(value: number): void {
    this.skillScrollContainer ? this.skillScrollContainer.nativeElement.scrollLeft += value : undefined ;
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
  public selectSkill(skill: Skill): void {
    if(this.isSkillSelected && this.selectedSkill === skill) {
      this.isSkillSelected = false;
      return;
    }
    this.isSkillSelected = true;
    this.selectedSkill = skill;
  }
}
