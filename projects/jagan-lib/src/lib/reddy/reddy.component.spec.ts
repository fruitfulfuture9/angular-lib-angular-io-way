import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReddyComponent } from './reddy.component';

describe('ReddyComponent', () => {
  let component: ReddyComponent;
  let fixture: ComponentFixture<ReddyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReddyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
