import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoavionListComponent } from './tipoavion-list.component';

describe('TipoavionListComponent', () => {
  let component: TipoavionListComponent;
  let fixture: ComponentFixture<TipoavionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoavionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoavionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
