import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueloFormComponent } from './vuelo-form.component';

describe('VueloFormComponent', () => {
  let component: VueloFormComponent;
  let fixture: ComponentFixture<VueloFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueloFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VueloFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
