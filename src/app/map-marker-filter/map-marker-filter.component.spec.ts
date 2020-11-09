import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapMarkerFilterComponent } from './map-marker-filter.component';

describe('MapMarkerFilterComponent', () => {
  let component: MapMarkerFilterComponent;
  let fixture: ComponentFixture<MapMarkerFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapMarkerFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapMarkerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
