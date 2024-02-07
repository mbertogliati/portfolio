import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDetailAnimatorComponent } from './skill-detail-animator.component';

describe('SkillDetailAnimatorComponent', () => {
  let component: SkillDetailAnimatorComponent;
  let fixture: ComponentFixture<SkillDetailAnimatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillDetailAnimatorComponent]
    });
    fixture = TestBed.createComponent(SkillDetailAnimatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
