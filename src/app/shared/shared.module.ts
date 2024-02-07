import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IconComponent} from './icon/icon.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {NgOptimizedImage} from "@angular/common";


@NgModule({
  declarations: [
    IconComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    NgOptimizedImage
  ],
  exports: [
    IconComponent,
    ProgressBarComponent
  ]
})
export class SharedModule { }
