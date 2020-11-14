import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgxPanZoomModule } from 'ngx-panzoom';

import { AppComponent } from './app.component';
import { UploadImageComponent } from './upload-image/upload-image.component';

//Angular Material Components
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRippleModule} from '@angular/material/core';


import { MapMarkerComponent } from './map-marker/map-marker.component';
import { MapMarkerEditorComponent } from './map-marker-editor/map-marker-editor.component';
import { LocalStorageProvider } from "./kv-storage/local-storage-provider";
import { FormsModule } from '@angular/forms';
import { MapMarkerFilterComponent } from './map-marker-filter/map-marker-filter.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MapMarkerCityComponent } from './map-marker-city/map-marker-city.component';
import { CityJumperComponent } from './city-jumper/city-jumper.component';
import { KVStorageProvider } from './kv-storage/ik-storage-provider';
import { KVStorageProviderFactory } from './kv-storage/kv-storage-provider-factory';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadImageComponent,
    MapMarkerComponent,
    MapMarkerEditorComponent,
    MapMarkerFilterComponent,
    MapMarkerCityComponent,
    CityJumperComponent,
    MenuBarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    NgxPanZoomModule,
    BrowserAnimationsModule,

    // Material Components
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatRippleModule,
  ],
  providers: [
    { provide: KVStorageProvider, useFactory: KVStorageProviderFactory, deps: [ HttpClient ] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
