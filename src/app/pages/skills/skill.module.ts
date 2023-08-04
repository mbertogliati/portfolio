import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { SkillComponent } from './skill/skill.component';
import { SkillsComponent } from "./skills.component";
import { SkillScrollComponent } from './skill-scroll/skill-scroll.component';
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
  declarations: [
    SkillComponent,
    SkillsComponent,
    SkillScrollComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatTooltipModule
  ],
  exports: [
    SkillsComponent
  ]
})
export class SkillModule { }
