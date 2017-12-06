import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page.Not.FoundComponent } from './page.not.found.component';

describe('Page.Not.FoundComponent', () => {
  let component: Page.Not.FoundComponent;
  let fixture: ComponentFixture<Page.Not.FoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page.Not.FoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page.Not.FoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
