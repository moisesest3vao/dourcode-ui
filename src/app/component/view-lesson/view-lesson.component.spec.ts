import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLessonComponent } from './view-lesson.component';

describe('ViewLessonComponent', () => {
  let component: ViewLessonComponent;
  let fixture: ComponentFixture<ViewLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
