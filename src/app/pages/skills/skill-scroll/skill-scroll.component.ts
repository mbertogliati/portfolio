import {Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { LinkedList } from 'linked-list-typescript';
import {Skill} from "../skill";
import {trigger} from "@angular/animations";
@Component({
  selector: 'app-skill-scroll',
  templateUrl: './skill-scroll.component.html',
  styleUrls: ['./skill-scroll.component.scss'],
})
export class SkillScrollComponent implements AfterViewInit{

  private scrollAmount: number = 100;

  @ViewChild('skillScrollContainer') skillScrollContainer?: ElementRef<HTMLDivElement>;

  selectedSkill : Skill | undefined = undefined;
  isScrollTopLeft : boolean = false;
  isScrollTopRight : boolean = false;
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
    if(this.selectedSkill === skill) {
      this.selectedSkill = undefined;
      return;
    }
    this.selectedSkill = skill;
  }

  protected readonly undefined = undefined;
}
