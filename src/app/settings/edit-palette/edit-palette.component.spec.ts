import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPaletteComponent } from './edit-palette.component';

describe('EditPaletteComponent', () => {
  let component: EditPaletteComponent;
  let fixture: ComponentFixture<EditPaletteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPaletteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
