import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaganLibComponent } from './jagan-lib.component';

describe('JaganLibComponent', () => {
  let component: JaganLibComponent;
  let fixture: ComponentFixture<JaganLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaganLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaganLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
