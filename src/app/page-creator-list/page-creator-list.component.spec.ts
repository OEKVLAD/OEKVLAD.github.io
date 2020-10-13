import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreatorListComponent } from './page-creator-list.component';

describe('PageCreatorListComponent', () => {
  let component: PageCreatorListComponent;
  let fixture: ComponentFixture<PageCreatorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCreatorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
