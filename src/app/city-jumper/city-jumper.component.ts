import { Component, Input, OnInit } from '@angular/core';
import { MapApiProvider, MapApiRectangle } from '../map-api-provider';
import { MapMarker } from '../map-marker';

@Component({
  selector: 'app-city-jumper',
  templateUrl: './city-jumper.component.html',
  styleUrls: ['./city-jumper.component.scss']
})
export class CityJumperComponent implements OnInit {

  @Input() cities: MapMarker[];

  constructor(
    private _mapApiProvider: MapApiProvider
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
}
