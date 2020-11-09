export enum MapMarkerType {
  BOAR = "boar",
  BEAR = "bear",
  DOE = "doe",
  BUCK = "buck",
  WOLF = "wolf",
  RABBIT = "rabbit",
  FOX = "fox",
  WISENT = "wisent",
  CAVE = "cave",
  CLAY_DEPOSIT = "clay_deposit",
  CITY = "city",
  PERSON = "person",
}

export class MapMarkerTypeResource {
  public getImageSrc(type: MapMarkerType): string {
    return `/assets/markers/${MapMarkerType[type]}.png`;
  }
}
