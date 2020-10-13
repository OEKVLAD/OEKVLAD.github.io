import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentModulesComponent } from './content-modules.component';

describe('ContentModulesComponent', () => {
  let component: ContentModulesComponent;
  let fixture: ComponentFixture<ContentModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
