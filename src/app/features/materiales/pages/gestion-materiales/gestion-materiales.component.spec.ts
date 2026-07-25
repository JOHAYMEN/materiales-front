import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMaterialesComponent } from './gestion-materiales.component';

describe('GestionMaterialesComponent', () => {
  let component: GestionMaterialesComponent;
  let fixture: ComponentFixture<GestionMaterialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionMaterialesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionMaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
