import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimonQuarterComponent } from './simon-quarter.component';

describe('SimonQuarterComponent', () => {
  let component: SimonQuarterComponent;
  let fixture: ComponentFixture<SimonQuarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimonQuarterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimonQuarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
