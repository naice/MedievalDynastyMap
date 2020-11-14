export enum MapMarkerType {
  BOAR = "Boar",
  BEAR = "Bear",
  DOE = "Doe",
  BUCK = "Buck",
  WOLF = "Wolf",
  RABBIT = "Rabbit",
  FOX = "Fox",
  WISENT = "Wisent",
  CAVE = "Cave",
  CLAY_DEPOSIT = "Clay Deposit",
  CITY = "City",
  //PERSON = "Person",
}

export class MapMarkerTypeResource {
  public getImageSrc(type: MapMarkerType): string {
    return `assets/markers/${type}.png`.toLowerCase();
  }
  public getImageSrcUrl(type: MapMarkerType): string {
    return `url("${this.getImageSrc(type)}")`;
  }
}
