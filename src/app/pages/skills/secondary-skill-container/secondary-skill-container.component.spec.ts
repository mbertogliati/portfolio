import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondarySkillContainerComponent } from './secondary-skill-container.component';

describe('SecondarySkillContainerComponent', () => {
  let component: SecondarySkillContainerComponent;
  let fixture: ComponentFixture<SecondarySkillContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondarySkillContainerComponent]
    });
    fixture = TestBed.createComponent(SecondarySkillContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
