import {Component, ViewChild} from '@angular/core';
import {NgbCarousel, NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {careerData} from "../education/career-data";
import {Project, projectsData} from "./projectsData";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projectsData = projectsData;
  @ViewChild('carousel', { static: true }) carousel?: NgbCarousel;

  next(){
    this.carousel?.next();
  }
  prev(){
    this.carousel?.prev();
  }
  getProjectKeys(){
    return Object.keys(projectsData).map(key => key as keyof typeof projectsData);
  }
}
