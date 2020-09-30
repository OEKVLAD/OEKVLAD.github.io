import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagerOraComponent } from './task-manager-ora.component';

describe('TaskManagerOraComponent', () => {
  let component: TaskManagerOraComponent;
  let fixture: ComponentFixture<TaskManagerOraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskManagerOraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskManagerOraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
