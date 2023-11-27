import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaColFijaComponent } from './tabla-col-fija.component';

xdescribe('TablaColFijaComponent', () => {
  let component: TablaColFijaComponent;
  let fixture: ComponentFixture<TablaColFijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaColFijaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaColFijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
