import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KreirajComponent } from './kreiraj.component';

describe('KreirajComponent', () => {
  let component: KreirajComponent;
  let fixture: ComponentFixture<KreirajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KreirajComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KreirajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
