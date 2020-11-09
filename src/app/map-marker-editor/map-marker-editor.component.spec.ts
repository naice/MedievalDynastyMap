import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapMarkerEditorComponent } from './map-marker-editor.component';

describe('MapMarkerEditorComponent', () => {
  let component: MapMarkerEditorComponent;
  let fixture: ComponentFixture<MapMarkerEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapMarkerEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapMarkerEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
