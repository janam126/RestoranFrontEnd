import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UslugaUnosComponent } from './usluga-unos.component';

describe('UslugaUnosComponent', () => {
  let component: UslugaUnosComponent;
  let fixture: ComponentFixture<UslugaUnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UslugaUnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UslugaUnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
