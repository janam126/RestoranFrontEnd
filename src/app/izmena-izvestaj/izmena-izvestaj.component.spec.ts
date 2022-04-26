import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmenaIzvestajComponent } from './izmena-izvestaj.component';

describe('IzmenaIzvestajComponent', () => {
  let component: IzmenaIzvestajComponent;
  let fixture: ComponentFixture<IzmenaIzvestajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzmenaIzvestajComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmenaIzvestajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
