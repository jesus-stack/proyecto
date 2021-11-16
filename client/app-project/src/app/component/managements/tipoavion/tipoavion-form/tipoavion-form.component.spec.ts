import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoavionFormComponent } from './tipoavion-form.component';

describe('TipoavionFormComponent', () => {
  let component: TipoavionFormComponent;
  let fixture: ComponentFixture<TipoavionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoavionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoavionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
