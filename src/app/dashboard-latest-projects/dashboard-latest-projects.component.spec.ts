import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLatestProjectsComponent } from './dashboard-latest-projects.component';

describe('DashboardLatestProjectsComponent', () => {
  let component: DashboardLatestProjectsComponent;
  let fixture: ComponentFixture<DashboardLatestProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardLatestProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLatestProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
