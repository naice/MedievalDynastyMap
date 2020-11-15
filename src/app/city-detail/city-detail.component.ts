import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { City, Item, Person } from '../static-data';

export interface CityDetailDialogData {
  city: City,
  persons: Person[],
}

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.scss']
})
export class CityDetailComponent implements OnInit {

  goodsDisplayedColumns: string[] = ['name', 'price'];

  constructor(
    public dialogRef: MatDialogRef<CityDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CityDetailDialogData,
  ) {
  }

  ngOnInit(): void {
  }

}
