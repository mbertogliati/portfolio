import {Component, ViewEncapsulation} from '@angular/core';
import {SkillDetailComponent} from "../skills/skill-detail/skill-detail.component";
import {languagesAndFrameworks} from "../skills/skill-scroll/skill-data";
import {Course, coursesData} from "./courses-data";
import {CourseDetailComponent} from "./course-detail/course-detail.component";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EducationComponent {

    protected readonly SkillDetailComponent = SkillDetailComponent;
    protected readonly languagesAndFrameworks = languagesAndFrameworks;

    courses : Course[] = coursesData;
    selectedCourse : Course | undefined = undefined;

    toggleSelectedCourse(course : Course) : void {
        if(this.selectedCourse === course){
            this.selectedCourse = undefined;
            return;
        }
        this.selectedCourse = course;
    }

    protected readonly CourseDetailComponent = CourseDetailComponent;
}
