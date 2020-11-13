import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapMarkerCityComponent } from './map-marker-city.component';

describe('MapMarkerCityComponent', () => {
  let component: MapMarkerCityComponent;
  let fixture: ComponentFixture<MapMarkerCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapMarkerCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapMarkerCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
