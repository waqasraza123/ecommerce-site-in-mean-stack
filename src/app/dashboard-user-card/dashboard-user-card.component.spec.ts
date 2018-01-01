import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserCardComponent } from './dashboard-user-card.component';

describe('DashboardUserCardComponent', () => {
  let component: DashboardUserCardComponent;
  let fixture: ComponentFixture<DashboardUserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardUserCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
