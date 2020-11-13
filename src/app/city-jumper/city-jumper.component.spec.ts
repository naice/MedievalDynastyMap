import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityJumperComponent } from './city-jumper.component';

describe('CityJumperComponent', () => {
  let component: CityJumperComponent;
  let fixture: ComponentFixture<CityJumperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityJumperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityJumperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
