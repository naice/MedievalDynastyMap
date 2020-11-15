import { Component } from '@angular/core';
import { CityDetailDialogProvider } from '../city-detail-dialog-provider';
import { MapMarker } from '../map-marker';
import { MapMarkerBaseComponent } from '../map-marker-base-component';
import { MapMarkerEditorController } from '../map-marker-editor/map-marker-editor.controller';
import { MapMarkerFilterController } from '../map-marker-filter/map-marker-filter.controller';
import { MapMarkerStorage } from '../map-marker-storage';
import { City } from '../static-data';

@Component({
  selector: 'app-map-marker-city',
  templateUrl: './map-marker-city.component.html',
  styleUrls: ['./map-marker-city.component.scss']
})
export class MapMarkerCityComponent extends MapMarkerBaseComponent {

  constructor(
    mapMarker: MapMarker,
    mapMarkerStorage: MapMarkerStorage,
    mapMarkerFilterController: MapMarkerFilterController,
    mapMarkerEditorController: MapMarkerEditorController,

    public city: City,
    public dialogProvider: CityDetailDialogProvider,
  ) {
    super(mapMarker, mapMarkerStorage, mapMarkerFilterController, mapMarkerEditorController);
    super.width = 512;
    super.height = 91;
  }
  ngOnDestroy(): void {
    super.OnDestroy();
  }
  ngOnInit(): void {
    super.OnInit();
  }
}
