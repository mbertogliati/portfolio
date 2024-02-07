import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { SkillsComponent } from "./skills.component";
import { SkillScrollComponent } from './skill-scroll/skill-scroll.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {NgbCollapse} from "@ng-bootstrap/ng-bootstrap";
import { SkillDetailComponent } from './skill-detail/skill-detail.component';
import { SecondarySkillContainerComponent } from './secondary-skill-container/secondary-skill-container.component';
import {SharedModule} from "../../shared/shared.module";
import {AppModule} from "../../app.module";



@NgModule({
  declarations: [
    SkillsComponent,
    SkillScrollComponent,
    SkillDetailComponent,
    SecondarySkillContainerComponent
  ],
    imports: [
        CommonModule,
        NgOptimizedImage,
        MatTooltipModule,
        NgbCollapse,
        SharedModule,
        AppModule
    ],
  exports: [
    SkillsComponent,
    SkillDetailComponent
  ]
})
export class SkillModule { }
