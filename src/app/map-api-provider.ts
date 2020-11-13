import { Injectable } from '@angular/core';
import { PanZoomAPI } from 'ngx-panzoom';

export interface MapApiRectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}

@Injectable({ providedIn: 'root' })
export class MapApiProvider {
  private api: PanZoomAPI;
  setApi(api: PanZoomAPI): void {
    this.api = api;
  }

  navigateToRect(rect: MapApiRectangle): void {
    this.api?.zoomToFit({ ...rect });
  }

  centerContent(): void {
    this.api?.centerContent();
  }
}
