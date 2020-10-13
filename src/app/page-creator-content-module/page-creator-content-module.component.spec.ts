import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreatorContentModuleComponent } from './page-creator-content-module.component';

describe('PageCreatorContentModuleComponent', () => {
  let component: PageCreatorContentModuleComponent;
  let fixture: ComponentFixture<PageCreatorContentModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCreatorContentModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreatorContentModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
