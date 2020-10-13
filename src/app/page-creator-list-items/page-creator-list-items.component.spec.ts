import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreatorListItemsComponent } from './page-creator-list-items.component';

describe('PageCreatorListItemsComponent', () => {
  let component: PageCreatorListItemsComponent;
  let fixture: ComponentFixture<PageCreatorListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCreatorListItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreatorListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
