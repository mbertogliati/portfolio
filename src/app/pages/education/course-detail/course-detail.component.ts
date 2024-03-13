import {
    AfterViewChecked,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    ViewChild
} from '@angular/core';
import {SharedModule} from "../../../shared/shared.module";
import {Course} from "../courses-data";
import {Skill} from "../../skills/skill";

@Component({
  selector: 'app-course-detail',
  standalone: true,
    imports: [
        SharedModule
    ],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})
export class CourseDetailComponent implements AfterViewChecked{
    private _course? : Course;
    private _heightUpdateCallbacks : Array<Function> = [];
    private _heightChange = new EventEmitter<number>();
    height : number = 0;
    @ViewChild('courseDetailMainContainer') courseDetailMainContainer? : ElementRef<HTMLDivElement>;
    @Input() set course(newCourse: Course | undefined) {
        this._course = newCourse;
    };
    @Input() set heightUpdateCallbacks(callbacks : Array<Function>){
        this._heightUpdateCallbacks = callbacks;
        this._heightChange.subscribe((newHeight : number) => {
            this._heightUpdateCallbacks.forEach((callback : Function) => {
                callback(newHeight);
            });
        });
    }

    get course() : Course | undefined {
        return this._course;
    }

    ngAfterViewChecked(): void {
        if (this.courseDetailMainContainer?.nativeElement.offsetHeight && this.height != this.courseDetailMainContainer?.nativeElement.offsetHeight) {
            this.height = this.courseDetailMainContainer?.nativeElement.offsetHeight || 0;
            this._heightChange.emit(this.height);
        }
    }
}
