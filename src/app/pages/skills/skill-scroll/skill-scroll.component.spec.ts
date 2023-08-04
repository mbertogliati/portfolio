import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillScrollComponent } from './skill-scroll.component';

describe('SkillScrollComponent', () => {
  let component: SkillScrollComponent;
  let fixture: ComponentFixture<SkillScrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillScrollComponent]
    });
    fixture = TestBed.createComponent(SkillScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
