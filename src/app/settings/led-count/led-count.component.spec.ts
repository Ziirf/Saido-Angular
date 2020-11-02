import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedCountComponent } from './led-count.component';

describe('LedCountComponent', () => {
  let component: LedCountComponent;
  let fixture: ComponentFixture<LedCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
