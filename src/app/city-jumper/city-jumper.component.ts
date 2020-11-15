import { Component, Input, OnInit } from '@angular/core';
import { MAP_MENU_WIDTH } from '../app.constants';
import { CityDetailDialogProvider } from '../city-detail-dialog-provider';
import { MapApiProvider, MapApiRectangle } from '../map-api-provider';
import { MapMarker } from '../map-marker';
import { CityData } from '../static-data';

@Component({
  selector: 'app-city-jumper',
  templateUrl: './city-jumper.component.html',
  styleUrls: ['./city-jumper.component.scss']
})
export class CityJumperComponent implements OnInit {

  @Input() cities: MapMarker[];

  constructor(
    private _mapApiProvider: MapApiProvider,
    public cityData: CityData,
    public dialogProvider: CityDetailDialogProvider,
  ) { }

  ngOnInit(): void {
  }
  onNavigateToCity(mapMarker: MapMarker) {
    const width = window.innerWidth * 1.8;
    const height = window.innerHeight * 1.8;
    const rect: MapApiRectangle = {
      x: mapMarker.origin.x - (width / 2),
      y: mapMarker.origin.y - (height / 2),
      width: width,
      height: height
    };
    console.log('jumping to', rect);
    this._mapApiProvider.navigateToRect(rect);
  }
  onOpenCityDetail(event: any, marker: MapMarker) {
    event.stopPropagation();
    this.dialogProvider.showCityDialog(this.cityData.getCityBy(marker))
  }
}
