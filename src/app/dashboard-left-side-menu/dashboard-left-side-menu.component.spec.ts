import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLeftSideMenuComponent } from './dashboard-left-side-menu.component';

describe('DashboardLeftSideMenuComponent', () => {
  let component: DashboardLeftSideMenuComponent;
  let fixture: ComponentFixture<DashboardLeftSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardLeftSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLeftSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
