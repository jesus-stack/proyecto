import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaFormComponent } from './ruta-form.component';

describe('RutaFormComponent', () => {
  let component: RutaFormComponent;
  let fixture: ComponentFixture<RutaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
