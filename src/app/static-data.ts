
import StaticCities from '../assets/data/cities.json';
import StaticMapMarkers from '../assets/data/map-markers.json';
import StaticPersons from '../assets/data/persons.json';
import StaticItems from '../assets/data/items.json';

import { Injectable } from '@angular/core';
import { MapMarker } from './map-marker';

export enum ItemType {
  Weapon = "Weapon",
  Food = "Food",
  Misc = "Misc",
  Cloth = "Cloth",
  Tool = "Tool",
  Seed = "Seed",
  Resource = "Resource",
  Animal = "Animal",
}

export class Item {
    id: string
    name: string
    icon: string
    type: ItemType
    price: number
    germanName: string
}
export class Good {
    id: string
    price: number
}
export class City {
    id: string
    name: string
    goods: Good[]
}
export class Person {
    id: string
    name: string
    cityId: string
    goods: Good[]
}

@Injectable({ providedIn: 'root' })
export class CityData {
  public cities: City[] = StaticCities as City[];
}
@Injectable({ providedIn: 'root' })
export class ItemData {
  public items: Item[] = StaticItems as Item[];
  public getItemByGood(good: Good): Item  {
    return this.getItemByGoodId(good.id);
  }
  getItemByGoodId(id: string): Item {
    return this.items.find(item => item.id == id);
  }
}
@Injectable({ providedIn: 'root' })
export class MapMarkerData {
  public mapMarkers: MapMarker[] = StaticMapMarkers as MapMarker[];
}
@Injectable({ providedIn: 'root' })
export class PersonData {
  public persons: Person[] = StaticPersons as Person[];
  public getPersonsByCity(city: City): Person[] {
    return this.getPersonsByCityId(city.id);
  }
  getPersonsByCityId(id: string): Person[] {
    return this.persons.filter(person => person.cityId == id);
  }
}
