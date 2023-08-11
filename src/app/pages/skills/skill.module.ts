import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { IconComponent } from '../../shared/icon/icon.component';
import { SkillsComponent } from "./skills.component";
import { SkillScrollComponent } from './skill-scroll/skill-scroll.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {NgbCollapse} from "@ng-bootstrap/ng-bootstrap";
import { SkillDetailComponent } from './skill-detail/skill-detail.component';


@NgModule({
  declarations: [
    IconComponent,
    SkillsComponent,
    SkillScrollComponent,
    SkillDetailComponent
  ],
    imports: [
        CommonModule,
        NgOptimizedImage,
        MatTooltipModule,
        NgbCollapse
    ],
  exports: [
    SkillsComponent
  ]
})
export class SkillModule { }
