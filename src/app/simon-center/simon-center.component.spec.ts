import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimonCenterComponent } from './simon-center.component';

describe('SimonCenterComponent', () => {
  let component: SimonCenterComponent;
  let fixture: ComponentFixture<SimonCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimonCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimonCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
