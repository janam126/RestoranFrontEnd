import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UslugaIzmenaComponent } from './usluga-izmena.component';

describe('UslugaIzmenaComponent', () => {
  let component: UslugaIzmenaComponent;
  let fixture: ComponentFixture<UslugaIzmenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UslugaIzmenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UslugaIzmenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
