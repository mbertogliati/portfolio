import { Component } from '@angular/core';
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {careerData} from "../education/career-data";
import {Project, projectsData} from "./projectsData";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projectsData = projectsData;
  getProjectKeys(){
    return Object.keys(projectsData).map(key => key as keyof typeof projectsData);
  }
}
