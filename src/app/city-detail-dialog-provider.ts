import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CityDetailComponent, CityDetailDialogData } from './city-detail/city-detail.component';
import { City, ItemData, PersonData } from './static-data';

@Injectable({ providedIn: 'root' })
export class CityDetailDialogProvider {

  constructor(
    private _dialog: MatDialog,
    private _personData: PersonData,
    private _itemData: ItemData,
  ) { }

  showCityDialog(city: City): void {
    const persons = this._personData.getPersonsByCity(city);
    const dialogData: CityDetailDialogData = {
      city, persons,
    };
    this._dialog.open(CityDetailComponent, {
      data: dialogData,
    });
  }
}
