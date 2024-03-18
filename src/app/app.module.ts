import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SkillModule} from "./pages/skills/skill.module";
import {SharedModule} from "./shared/shared.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { EducationComponent } from './pages/education/education.component';
import { WorkComponent } from './pages/work/work.component';
import { ContactComponent } from './pages/contact/contact.component';
import {NgOptimizedImage} from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import {MessageComponent} from "./shared/message/message.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavLinkBase,
  NgbNavOutlet
} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    EducationComponent,
    WorkComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    SkillModule,
    SharedModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MessageComponent,
    ReactiveFormsModule,
    FormsModule,
    NgbNav,
    NgbNavItem,
    NgbNavLinkBase,
    NgbNavContent,
    NgbNavOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
