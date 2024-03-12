import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IconComponent} from './icon/icon.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {NgOptimizedImage} from "@angular/common";
import { SwitchComponent } from './switch/switch.component';
import {SlideAnimatorComponent} from "./slide-animator/slide-animator.component";


@NgModule({
  declarations: [
    IconComponent,
    ProgressBarComponent,
    SwitchComponent,
    SlideAnimatorComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    NgOptimizedImage
  ],
  exports: [
    IconComponent,
    ProgressBarComponent,
    SwitchComponent,
    SlideAnimatorComponent
  ]
})
export class SharedModule { }
