(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/emmuss/projects/MedievalDynastyMap/src/main.ts */"zUnb");


/***/ }),

/***/ "0Njw":
/*!********************************!*\
  !*** ./src/app/static-data.ts ***!
  \********************************/
/*! exports provided: ItemType, Item, Good, City, Person, CityData, ItemData, MapMarkerData, PersonData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemType", function() { return ItemType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Good", function() { return Good; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "City", function() { return City; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityData", function() { return CityData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemData", function() { return ItemData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMarkerData", function() { return MapMarkerData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonData", function() { return PersonData; });
/* harmony import */ var _assets_data_cities_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/data/cities.json */ "ewnM");
var _assets_data_cities_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/data/cities.json */ "ewnM", 1);
/* harmony import */ var _assets_data_map_markers_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/data/map-markers.json */ "qjCw");
var _assets_data_map_markers_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/data/map-markers.json */ "qjCw", 1);
/* harmony import */ var _assets_data_persons_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/data/persons.json */ "5lNt");
var _assets_data_persons_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/data/persons.json */ "5lNt", 1);
/* harmony import */ var _assets_data_items_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/data/items.json */ "IOBT");
var _assets_data_items_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/data/items.json */ "IOBT", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






var ItemType;
(function (ItemType) {
    ItemType["Weapon"] = "Weapon";
    ItemType["Food"] = "Food";
    ItemType["Misc"] = "Misc";
    ItemType["Cloth"] = "Cloth";
    ItemType["Tool"] = "Tool";
    ItemType["Seed"] = "Seed";
    ItemType["Resource"] = "Resource";
    ItemType["Animal"] = "Animal";
})(ItemType || (ItemType = {}));
class Item {
}
class Good {
}
class City {
}
class Person {
}
class CityData {
    constructor() {
        this.cities = _assets_data_cities_json__WEBPACK_IMPORTED_MODULE_0__;
    }
    getCityBy(marker) {
        return this.cities.find(city => city.id == marker.payloadId);
    }
}
CityData.ɵfac = function CityData_Factory(t) { return new (t || CityData)(); };
CityData.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CityData, factory: CityData.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CityData, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();
class ItemData {
    constructor() {
        this.items = _assets_data_items_json__WEBPACK_IMPORTED_MODULE_3__;
    }
    getItemByGood(good) {
        return this.getItemByGoodId(good.id);
    }
    getItemByGoodId(id) {
        return this.items.find(item => item.id == id);
    }
}
ItemData.ɵfac = function ItemData_Factory(t) { return new (t || ItemData)(); };
ItemData.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ItemData, factory: ItemData.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ItemData, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();
class MapMarkerData {
    constructor() {
        this.mapMarkers = _assets_data_map_markers_json__WEBPACK_IMPORTED_MODULE_1__;
    }
}
MapMarkerData.ɵfac = function MapMarkerData_Factory(t) { return new (t || MapMarkerData)(); };
MapMarkerData.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: MapMarkerData, factory: MapMarkerData.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MapMarkerData, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();
class PersonData {
    constructor() {
        this.persons = _assets_data_persons_json__WEBPACK_IMPORTED_MODULE_2__;
    }
    getPersonsByCity(city) {
        return this.getPersonsByCityId(city.id);
    }
    getPersonsByCityId(id) {
        return this.persons.filter(person => person.cityId == id);
    }
}
PersonData.ɵfac = function PersonData_Factory(t) { return new (t || PersonData)(); };
PersonData.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: PersonData, factory: PersonData.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](PersonData, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "4fYT":
/*!***************************************!*\
  !*** ./src/app/map-marker-storage.ts ***!
  \***************************************/
/*! exports provided: MapMarkerStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMarkerStorage", function() { return MapMarkerStorage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _map_marker_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-marker-type.enum */ "fQet");
/* harmony import */ var _kv_storage_ik_storage_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kv-storage/ik-storage-provider */ "h2st");
/* harmony import */ var _static_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./static-data */ "0Njw");







class MapMarkerStorage {
    constructor(_storageProvider, mapMarkerData, _cityData) {
        this._storageProvider = _storageProvider;
        this.mapMarkerData = mapMarkerData;
        this._cityData = _cityData;
        this.markers = [];
        this.addedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.removedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.storageKey = 'mapMarkersStorage';
    }
    load(forceResetDefault = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // clear all
            this.markers.length = 0;
            // load from storage
            let loadedMarkers = yield this._storageProvider.load(this.storageKey, null).toPromise();
            // try load from static map markers
            if (forceResetDefault || loadedMarkers === null) {
                console.log('no map markers, loading from static data');
                if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
                    loadedMarkers = this.mapMarkerData.mapMarkers;
                }
                else {
                    console.log('could not load map markers');
                    return;
                }
            }
            else {
                yield this.tryUpgrade01(loadedMarkers);
            }
            for (const marker of loadedMarkers) {
                this.addInternal(marker);
            }
        });
    }
    tryUpgrade01(markers) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!markers.some(marker => marker.type === _map_marker_type_enum__WEBPACK_IMPORTED_MODULE_3__["MapMarkerType"].CITY && !marker.payloadId)) {
                console.log('upgrade 01 not needed');
                return;
            }
            console.log('doing upgrade 01');
            markers
                .filter(marker => marker.type === _map_marker_type_enum__WEBPACK_IMPORTED_MODULE_3__["MapMarkerType"].CITY && !marker.payloadId)
                .forEach(marker => marker.payloadId = this._cityData.cities.find(city => {
                let markerCityName = marker.payload.name;
                if (markerCityName === "Raimund") {
                    markerCityName = "Rajmund";
                }
                return city.name === markerCityName;
            }).id);
            this.storeInternal(markers);
        });
    }
    store() {
        return this.storeInternal(this.markers);
    }
    storeInternal(markers) {
        return this._storageProvider.store(this.storageKey, markers).toPromise();
    }
    addInternal(marker) {
        this.markers.push(marker);
        this.addedEvent.emit(marker);
    }
    add(marker) {
        this.addInternal(marker);
        this.store();
    }
    removeAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            while (this.markers.length > 0) {
                yield this.remove(this.markers[0].id, false);
            }
            return yield this.store();
        });
    }
    removeCustomMarkers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dontDeleteMarkerTypes = [
                _map_marker_type_enum__WEBPACK_IMPORTED_MODULE_3__["MapMarkerType"].CITY,
            ];
            for (let index = this.markers.length - 1; index >= 0; index--) {
                const marker = this.markers[index];
                if (dontDeleteMarkerTypes.some(type => type === marker.type)) {
                    continue;
                }
                yield this.remove(marker.id, false);
            }
            return yield this.store();
        });
    }
    remove(id, store = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const i = this.markers.findIndex(marker => marker.id === id);
            if (i === -1) {
                return false;
            }
            const marker = this.markers[i];
            this.markers.splice(i, 1);
            this.removedEvent.emit(marker);
            if (store) {
                return yield this.store();
            }
            return true;
        });
    }
    resetAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.load(true);
            yield this.store();
        });
    }
}
MapMarkerStorage.ɵfac = function MapMarkerStorage_Factory(t) { return new (t || MapMarkerStorage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_kv_storage_ik_storage_provider__WEBPACK_IMPORTED_MODULE_4__["KVStorageProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_static_data__WEBPACK_IMPORTED_MODULE_5__["MapMarkerData"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_static_data__WEBPACK_IMPORTED_MODULE_5__["CityData"])); };
MapMarkerStorage.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MapMarkerStorage, factory: MapMarkerStorage.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapMarkerStorage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _kv_storage_ik_storage_provider__WEBPACK_IMPORTED_MODULE_4__["KVStorageProvider"] }, { type: _static_data__WEBPACK_IMPORTED_MODULE_5__["MapMarkerData"] }, { type: _static_data__WEBPACK_IMPORTED_MODULE_5__["CityData"] }]; }, null); })();


/***/ }),

/***/ "5lNt":
/*!**************************************!*\
  !*** ./src/assets/data/persons.json ***!
  \**************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"aa278a4c-1efa-4634-8652-a77ef0665e04\",\"name\":\"Norbert\",\"cityId\":\"52393950-1c4c-49c0-8bc2-629ae87d0a28\",\"goods\":[{\"id\":\"7117d9fb-1a17-4785-bff6-dba303d465f7\",\"price\":6},{\"id\":\"b3921781-fd7a-4102-be26-b54a14057902\",\"price\":10},{\"id\":\"ef779af0-dedd-4e9b-8077-4409bf5717f2\",\"price\":16},{\"id\":\"3124c8e3-d44d-4059-bc27-9ccd23e13938\",\"price\":50},{\"id\":\"cac12a9d-81c8-41f3-b2b0-797b8a738069\",\"price\":16}]},{\"id\":\"e415b1a3-e2ff-4e8b-94c5-b970942d5220\",\"name\":\"Ida\",\"cityId\":\"493b9fc6-b89a-4ce7-9fb3-ab23eb3246b2\",\"goods\":[{\"id\":\"c0077ae7-a93d-4db5-894f-a42c70faf52f\",\"price\":10},{\"id\":\"3124c8e3-d44d-4059-bc27-9ccd23e13938\",\"price\":50}]},{\"id\":\"f476cac1-78f0-437d-aa35-887450de75ae\",\"name\":\"Falibor\",\"cityId\":\"493b9fc6-b89a-4ce7-9fb3-ab23eb3246b2\",\"goods\":[{\"id\":\"4e9e49bd-46db-4fb0-a5db-f1461624f08d\",\"price\":40},{\"id\":\"988697f2-1277-46b3-8901-3fa9eea35486\",\"price\":40},{\"id\":\"40c3dc7e-f92f-444c-9e3f-fe4c26153b9d\",\"price\":60},{\"id\":\"0d09b715-283f-4113-a20c-0cfd245a05ce\",\"price\":160},{\"id\":\"07d63e9d-75dd-4b36-8f6a-610c141cce7e\",\"price\":100},{\"id\":\"437ddd2c-2200-4a4f-8551-626b4479ea48\",\"price\":60},{\"id\":\"02493d54-0db3-432e-993c-a3de904e65a3\",\"price\":80},{\"id\":\"d35780d8-d8c3-4c0f-a2b9-93bdfdfd604a\",\"price\":180}]},{\"id\":\"60880130-b089-44ef-9249-c1187a62be14\",\"name\":\"Lubomira\",\"cityId\":\"6e8b3e82-3216-40b1-aa69-0f51364adf98\",\"goods\":[{\"id\":\"d840a40a-97e8-464d-ad45-e0bac9fc9146\",\"price\":60},{\"id\":\"a18eb739-4813-4ead-9b31-7f8df3ffaf72\",\"price\":200},{\"id\":\"1854601c-cd2a-4cfa-83fa-68e595f015e1\",\"price\":400},{\"id\":\"dfd03c9c-3872-44e9-a902-281f7ed1eb76\",\"price\":700},{\"id\":\"2471a5bb-47d3-4d35-aa28-62dac51fda4e\",\"price\":20},{\"id\":\"9addecc5-6467-423e-99c6-752fbe666e31\",\"price\":10},{\"id\":\"d504ffbc-f179-4f30-94d6-a7a4967f5aaf\",\"price\":100},{\"id\":\"d875f4ae-160f-4cd9-9c86-8ebe6170d430\",\"price\":160},{\"id\":\"400a2ae1-3ee0-4c8d-94bb-a0bb77cd0f81\",\"price\":100},{\"id\":\"65ada6b9-83bc-4509-b892-8cba93fabbc8\",\"price\":180}]},{\"id\":\"18dd206e-5532-44e8-89ec-60ae251d4047\",\"name\":\"Matylda\",\"cityId\":\"c94d0e52-fe5e-4680-b33a-47d171157ab0\",\"goods\":[{\"id\":\"d840a40a-97e8-464d-ad45-e0bac9fc9146\",\"price\":60},{\"id\":\"a18eb739-4813-4ead-9b31-7f8df3ffaf72\",\"price\":200},{\"id\":\"1854601c-cd2a-4cfa-83fa-68e595f015e1\",\"price\":400},{\"id\":\"dfd03c9c-3872-44e9-a902-281f7ed1eb76\",\"price\":7000},{\"id\":\"2471a5bb-47d3-4d35-aa28-62dac51fda4e\",\"price\":20},{\"id\":\"9addecc5-6467-423e-99c6-752fbe666e31\",\"price\":10},{\"id\":\"d0aeed88-4dfb-4267-8104-aef0abfd697d\",\"price\":20},{\"id\":\"d504ffbc-f179-4f30-94d6-a7a4967f5aaf\",\"price\":100},{\"id\":\"d875f4ae-160f-4cd9-9c86-8ebe6170d430\",\"price\":160},{\"id\":\"400a2ae1-3ee0-4c8d-94bb-a0bb77cd0f81\",\"price\":100},{\"id\":\"65ada6b9-83bc-4509-b892-8cba93fabbc8\",\"price\":180}]},{\"id\":\"7ac5ee9d-6321-4c06-8965-ac6402db1ae7\",\"name\":\"Dagobert\",\"cityId\":\"c94d0e52-fe5e-4680-b33a-47d171157ab0\",\"goods\":[{\"id\":\"b3921781-fd7a-4102-be26-b54a14057902\",\"price\":10},{\"id\":\"ef779af0-dedd-4e9b-8077-4409bf5717f2\",\"price\":16},{\"id\":\"e0e0922b-c035-4cd5-be66-e0aaa5875117\",\"price\":16},{\"id\":\"d084e6cf-42ba-42ed-8223-fbfeea2054b6\",\"price\":2},{\"id\":\"3124c8e3-d44d-4059-bc27-9ccd23e13938\",\"price\":50}]},{\"id\":\"7840f43a-d0c8-4687-967d-58d1014f11f7\",\"name\":\"Jaragniewa\",\"cityId\":\"c60c7f48-a3bf-4c15-8b34-0843217b25bf\",\"goods\":[{\"id\":\"89d34c7a-665b-4699-a2db-7213ad72224c\",\"price\":30},{\"id\":\"c7a1d14c-6ef7-4154-9a2b-9b5a7230e2df\",\"price\":80},{\"id\":\"7a6e0af7-9573-42ad-ba67-dbcfec8eff6e\",\"price\":80},{\"id\":\"a1a4752a-d454-495a-b909-9159ff8af3cf\",\"price\":20},{\"id\":\"f583d19c-ffbc-4a30-99ac-b4d47bfd7239\",\"price\":40},{\"id\":\"9504f25c-d15d-4588-945e-912e9a99ffed\",\"price\":30},{\"id\":\"62c51f40-aded-442f-9c25-6a4356b454a8\",\"price\":60},{\"id\":\"082ffe1e-8201-48c3-a5b3-34bd77ed6e11\",\"price\":20}]},{\"id\":\"c5cb3f6a-37f4-4113-a7a2-8f0a416871ec\",\"name\":\"Adelina\",\"cityId\":\"c60c7f48-a3bf-4c15-8b34-0843217b25bf\",\"goods\":[{\"id\":\"b95bc446-863e-45cd-9482-5bdfc4d5a3fd\",\"price\":10},{\"id\":\"0aad801e-c89b-4812-9a1c-2b835461adaa\",\"price\":20},{\"id\":\"23a6e37c-7f21-468f-8a4d-d82d2bd5792b\",\"price\":10},{\"id\":\"d084e6cf-42ba-42ed-8223-fbfeea2054b6\",\"price\":2},{\"id\":\"cface0dc-1181-4be3-93fb-44c2d1032fa5\",\"price\":20},{\"id\":\"a2757573-6c68-4357-a00c-de1cb7deed9d\",\"price\":10}]},{\"id\":\"98320c1e-bdde-425f-acdb-39eb06f41f18\",\"name\":\"Sobiemir\",\"cityId\":\"c60c7f48-a3bf-4c15-8b34-0843217b25bf\",\"goods\":[{\"id\":\"1ec9f0b7-b573-43bb-acb8-d3eeb0ade39d\",\"price\":6},{\"id\":\"89843d92-5655-4a65-a1cf-a0d8432e3f85\",\"price\":6},{\"id\":\"b3921781-fd7a-4102-be26-b54a14057902\",\"price\":10},{\"id\":\"3124c8e3-d44d-4059-bc27-9ccd23e13938\",\"price\":50}]},{\"id\":\"314ae35d-94d5-4941-8208-f2413a5089b6\",\"name\":\"Uniegost\",\"cityId\":\"c60c7f48-a3bf-4c15-8b34-0843217b25bf\",\"goods\":[{\"id\":\"d840a40a-97e8-464d-ad45-e0bac9fc9146\",\"price\":60},{\"id\":\"68473940-b20d-4fa1-91cf-fafaf0ac7533\",\"price\":600},{\"id\":\"a18eb739-4813-4ead-9b31-7f8df3ffaf72\",\"price\":200},{\"id\":\"2eb0b4a3-f3c4-423d-a9e9-8e4c46ae51f0\",\"price\":200},{\"id\":\"2471a5bb-47d3-4d35-aa28-62dac51fda4e\",\"price\":20},{\"id\":\"9addecc5-6467-423e-99c6-752fbe666e31\",\"price\":10},{\"id\":\"d504ffbc-f179-4f30-94d6-a7a4967f5aaf\",\"price\":100}]},{\"id\":\"5610feeb-bd1f-4518-a5a6-32af7a778a67\",\"name\":\"Hornica\",\"cityId\":\"c94d0e52-fe5e-4680-b33a-47d171157ab0\",\"goods\":[]},{\"id\":\"df25a8a7-20e9-4f2e-b2e5-3c2223478487\",\"name\":\"Jan\",\"cityId\":\"5610feeb-bd1f-4518-a5a6-32af7a778a67\",\"goods\":[{\"id\":\"b5aa7692-d40d-4602-a34f-78f15ba52944\",\"price\":900},{\"id\":\"94ef8b17-752b-4363-b60c-93cc6f4a9b26\",\"price\":340},{\"id\":\"a3d09756-28f8-4408-86cf-03e86ee4d40f\",\"price\":180},{\"id\":\"3ae08423-8fb0-4b88-9a99-30036dd08339\",\"price\":400},{\"id\":\"ac42d24f-20d6-498c-94dc-d7aac738b022\",\"price\":400},{\"id\":\"29162efb-a291-4efb-8d15-c88264ffa06a\",\"price\":500},{\"id\":\"cec0b48b-64d5-41ed-88f5-e23597da6826\",\"price\":360},{\"id\":\"c9642b5e-14d3-4f40-874b-2162ced35591\",\"price\":400},{\"id\":\"68473940-b20d-4fa1-91cf-fafaf0ac7533\",\"price\":600},{\"id\":\"c2d2e6bd-e178-4f09-aadd-16b258f7efd1\",\"price\":440},{\"id\":\"52d9e9b3-4d53-403e-bd59-0171fe1547cb\",\"price\":40},{\"id\":\"c1060b3c-0e55-4b20-a31f-ecab77654586\",\"price\":40}]},{\"id\":\"843dc7a9-e0ba-4e34-8902-30c359408fa6\",\"name\":\"Karolina\",\"cityId\":\"5610feeb-bd1f-4518-a5a6-32af7a778a67\",\"goods\":[{\"id\":\"d840a40a-97e8-464d-ad45-e0bac9fc9146\",\"price\":60},{\"id\":\"a18eb739-4813-4ead-9b31-7f8df3ffaf72\",\"price\":200},{\"id\":\"1854601c-cd2a-4cfa-83fa-68e595f015e1\",\"price\":400},{\"id\":\"dfd03c9c-3872-44e9-a902-281f7ed1eb76\",\"price\":700},{\"id\":\"2471a5bb-47d3-4d35-aa28-62dac51fda4e\",\"price\":20},{\"id\":\"9addecc5-6467-423e-99c6-752fbe666e31\",\"price\":10},{\"id\":\"d0aeed88-4dfb-4267-8104-aef0abfd697d\",\"price\":20},{\"id\":\"d504ffbc-f179-4f30-94d6-a7a4967f5aaf\",\"price\":100},{\"id\":\"d875f4ae-160f-4cd9-9c86-8ebe6170d430\",\"price\":160},{\"id\":\"400a2ae1-3ee0-4c8d-94bb-a0bb77cd0f81\",\"price\":100},{\"id\":\"65ada6b9-83bc-4509-b892-8cba93fabbc8\",\"price\":180}]},{\"id\":\"3accb620-48cc-458c-bc7a-f2b7e64016a5\",\"name\":\"Helga\",\"cityId\":\"5610feeb-bd1f-4518-a5a6-32af7a778a67\",\"goods\":[{\"id\":\"89d34c7a-665b-4699-a2db-7213ad72224c\",\"price\":30},{\"id\":\"c7a1d14c-6ef7-4154-9a2b-9b5a7230e2df\",\"price\":80},{\"id\":\"7a6e0af7-9573-42ad-ba67-dbcfec8eff6e\",\"price\":80},{\"id\":\"a1a4752a-d454-495a-b909-9159ff8af3cf\",\"price\":20},{\"id\":\"f583d19c-ffbc-4a30-99ac-b4d47bfd7239\",\"price\":40},{\"id\":\"9504f25c-d15d-4588-945e-912e9a99ffed\",\"price\":30},{\"id\":\"62c51f40-aded-442f-9c25-6a4356b454a8\",\"price\":60},{\"id\":\"082ffe1e-8201-48c3-a5b3-34bd77ed6e11\",\"price\":20}]},{\"id\":\"ad954bc5-055f-47a6-bb12-1f3b246d41bc\",\"name\":\"Nieluba\",\"cityId\":\"4d881a69-e7b0-48f9-9ab9-878f2af0038a\",\"goods\":[{\"id\":\"89d34c7a-665b-4699-a2db-7213ad72224c\",\"price\":30},{\"id\":\"c7a1d14c-6ef7-4154-9a2b-9b5a7230e2df\",\"price\":80},{\"id\":\"7a6e0af7-9573-42ad-ba67-dbcfec8eff6e\",\"price\":80},{\"id\":\"a1a4752a-d454-495a-b909-9159ff8af3cf\",\"price\":20},{\"id\":\"f583d19c-ffbc-4a30-99ac-b4d47bfd7239\",\"price\":40},{\"id\":\"9504f25c-d15d-4588-945e-912e9a99ffed\",\"price\":30},{\"id\":\"62c51f40-aded-442f-9c25-6a4356b454a8\",\"price\":60},{\"id\":\"082ffe1e-8201-48c3-a5b3-34bd77ed6e11\",\"price\":20}]},{\"id\":\"f2a004c2-1232-4cd3-8cbe-07a7a15d78fc\",\"name\":\"Bytomir\",\"cityId\":\"4d881a69-e7b0-48f9-9ab9-878f2af0038a\",\"goods\":[{\"id\":\"1b1e5ba5-3e4c-4a3f-b50c-e55f8c1364f4\",\"price\":8},{\"id\":\"031ef4ff-42da-490d-aa60-c94d31756ea3\",\"price\":30},{\"id\":\"711a6ed6-4a41-48db-9f87-069c0d0562b3\",\"price\":20},{\"id\":\"082ffe1e-8201-48c3-a5b3-34bd77ed6e11\",\"price\":20}]},{\"id\":\"1b80d4dd-8238-44b1-9d49-494c0ce18418\",\"name\":\"Gizela\",\"cityId\":\"5d0540f5-c558-4e13-9b19-b6d89aa68161\",\"goods\":[{\"id\":\"94ef8b17-752b-4363-b60c-93cc6f4a9b26\",\"price\":340},{\"id\":\"4e9e49bd-46db-4fb0-a5db-f1461624f08d\",\"price\":40},{\"id\":\"7220d38e-b8da-4c24-a4b4-667bbd759e80\",\"price\":500},{\"id\":\"16982282-eab6-4750-8d54-e9fa200ee97a\",\"price\":700},{\"id\":\"231384f1-56c3-4f54-b71e-156fcefc82d0\",\"price\":160},{\"id\":\"2eb0b4a3-f3c4-423d-a9e9-8e4c46ae51f0\",\"price\":200},{\"id\":\"725c89b8-bda7-457d-8e95-804892e1b419\",\"price\":10},{\"id\":\"86309990-68e1-45f0-a015-5b8ea4e3dd49\",\"price\":10},{\"id\":\"89843d92-5655-4a65-a1cf-a0d8432e3f85\",\"price\":6},{\"id\":\"05658ba7-7cab-4bb0-8782-a1c83f40c6d9\",\"price\":16},{\"id\":\"c0077ae7-a93d-4db5-894f-a42c70faf52f\",\"price\":10},{\"id\":\"80d82a39-fca2-4eb8-8ab4-edd6ee44cd76\",\"price\":8},{\"id\":\"afb7dbd5-b8cc-43ac-8d5b-26cd0813991f\",\"price\":10}]},{\"id\":\"b7d8f21c-7b0b-44d4-826d-d84bd557747b\",\"name\":\"Teobald\",\"cityId\":\"5d0540f5-c558-4e13-9b19-b6d89aa68161\",\"goods\":[{\"id\":\"a3d09756-28f8-4408-86cf-03e86ee4d40f\",\"price\":240},{\"id\":\"ac42d24f-20d6-498c-94dc-d7aac738b022\",\"price\":400},{\"id\":\"29162efb-a291-4efb-8d15-c88264ffa06a\",\"price\":500},{\"id\":\"c9642b5e-14d3-4f40-874b-2162ced35591\",\"price\":400},{\"id\":\"68473940-b20d-4fa1-91cf-fafaf0ac7533\",\"price\":600},{\"id\":\"c2d2e6bd-e178-4f09-aadd-16b258f7efd1\",\"price\":440},{\"id\":\"c1060b3c-0e55-4b20-a31f-ecab77654586\",\"price\":40}]},{\"id\":\"5b753904-5665-4b49-9bde-881aa5706cd5\",\"name\":\"Tomira\",\"cityId\":\"1f5776f8-6c9a-43db-92a2-de1fd63c4111\",\"goods\":[{\"id\":\"1ec9f0b7-b573-43bb-acb8-d3eeb0ade39d\",\"price\":6},{\"id\":\"89843d92-5655-4a65-a1cf-a0d8432e3f85\",\"price\":6},{\"id\":\"b3921781-fd7a-4102-be26-b54a14057902\",\"price\":10},{\"id\":\"3124c8e3-d44d-4059-bc27-9ccd23e13938\",\"price\":50}]},{\"id\":\"ffa2c98a-37a2-465a-8a0e-faddc61382a2\",\"name\":\"Nadar\",\"cityId\":\"1f5776f8-6c9a-43db-92a2-de1fd63c4111\",\"goods\":[{\"id\":\"c3c17b47-fc1a-434e-8d12-4dbb568e8f28\",\"price\":10},{\"id\":\"b95bc446-863e-45cd-9482-5bdfc4d5a3fd\",\"price\":10},{\"id\":\"23a6e37c-7f21-468f-8a4d-d82d2bd5792b\",\"price\":10},{\"id\":\"e0e0922b-c035-4cd5-be66-e0aaa5875117\",\"price\":16},{\"id\":\"d084e6cf-42ba-42ed-8223-fbfeea2054b6\",\"price\":2}]},{\"id\":\"1755151a-1064-4994-a53a-14ff4510b5f4\",\"name\":\"Rajmund\",\"cityId\":\"9920ed4a-8bf7-4174-9456-ce618129f39d\",\"goods\":[{\"id\":\"d084e6cf-42ba-42ed-8223-fbfeea2054b6\",\"price\":2},{\"id\":\"89843d92-5655-4a65-a1cf-a0d8432e3f85\",\"price\":6},{\"id\":\"b3921781-fd7a-4102-be26-b54a14057902\",\"price\":10},{\"id\":\"23a6e37c-7f21-468f-8a4d-d82d2bd5792b\",\"price\":10},{\"id\":\"3124c8e3-d44d-4059-bc27-9ccd23e13938\",\"price\":50}]},{\"id\":\"90b75005-8aa0-43e4-9ba2-ceea5ba39dc3\",\"name\":\"Sambor\",\"cityId\":\"9a4b1c3a-0abb-44f8-b3b8-be56e7bec3c5\",\"goods\":[{\"id\":\"0a73b317-b8e4-4a08-82d3-f6e25492e870\",\"price\":200},{\"id\":\"7220d38e-b8da-4c24-a4b4-667bbd759e80\",\"price\":500},{\"id\":\"2eb0b4a3-f3c4-423d-a9e9-8e4c46ae51f0\",\"price\":200},{\"id\":\"86309990-68e1-45f0-a015-5b8ea4e3dd49\",\"price\":10},{\"id\":\"711a6ed6-4a41-48db-9f87-069c0d0562b3\",\"price\":18},{\"id\":\"05658ba7-7cab-4bb0-8782-a1c83f40c6d9\",\"price\":16},{\"id\":\"80d82a39-fca2-4eb8-8ab4-edd6ee44cd76\",\"price\":8},{\"id\":\"afb7dbd5-b8cc-43ac-8d5b-26cd0813991f\",\"price\":10}]}]");

/***/ }),

/***/ "6eRS":
/*!*******************************!*\
  !*** ./src/app/map-marker.ts ***!
  \*******************************/
/*! exports provided: MapMarkerOrigin, MapMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMarkerOrigin", function() { return MapMarkerOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMarker", function() { return MapMarker; });
class MapMarkerOrigin {
}
class MapMarker {
}


/***/ }),

/***/ "7+NT":
/*!*******************************************************************!*\
  !*** ./src/app/map-marker-editor/map-marker-editor.controller.ts ***!
  \*******************************************************************/
/*! exports provided: MapMarkerEditorController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMarkerEditorController", function() { return MapMarkerEditorController; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MapMarkerEditorController {
    constructor() {
        this.eventOnCreateMapMarker = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.eventOnChangeEditMode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isEditMode = false;
        this.eventOnChangeEditMode.subscribe((isEditMode) => this.isEditMode = isEditMode);
    }
}
MapMarkerEditorController.ɵfac = function MapMarkerEditorController_Factory(t) { return new (t || MapMarkerEditorController)(); };
MapMarkerEditorController.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapMarkerEditorController, factory: MapMarkerEditorController.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapMarkerEditorController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AU7N":
/*!***********************************************************!*\
  !*** ./src/app/kv-storage/kv-storage-provider-factory.ts ***!
  \***********************************************************/
/*! exports provided: KVStorageProviderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KVStorageProviderFactory", function() { return KVStorageProviderFactory; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _local_storage_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage-provider */ "Ktjj");
/* harmony import */ var _remote_storage_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remote-storage-provider */ "EFdn");



const KVStorageProviderFactory = (httpClient) => {
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production) {
        return new _local_storage_provider__WEBPACK_IMPORTED_MODULE_1__["LocalStorageProvider"]();
    }
    return new _remote_storage_provider__WEBPACK_IMPORTED_MODULE_2__["RemoteStorageProvider"](httpClient);
};


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EFdn":
/*!*******************************************************!*\
  !*** ./src/app/kv-storage/remote-storage-provider.ts ***!
  \*******************************************************/
/*! exports provided: RemoteStorageProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteStorageProvider", function() { return RemoteStorageProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ik_storage_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ik-storage-provider */ "h2st");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class RemoteStorageProvider extends _ik_storage_provider__WEBPACK_IMPORTED_MODULE_3__["KVStorageProvider"] {
    constructor(http) {
        super();
        this.http = http;
        this.baseUrl = 'http://localhost:50120/';
    }
    store(key, data) {
        return this.http.post(this.baseUrl + key, JSON.stringify(data, null, 4));
    }
    load(key, defaultValue) {
        const promise = new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let result = null;
            try {
                result = yield this.http.get(this.baseUrl + key).toPromise();
            }
            catch (error) {
                console.log('RemoteStorageProvider.load', error);
                result = defaultValue;
            }
            resolve(result);
        }));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(promise);
    }
}
RemoteStorageProvider.ɵfac = function RemoteStorageProvider_Factory(t) { return new (t || RemoteStorageProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
RemoteStorageProvider.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RemoteStorageProvider, factory: RemoteStorageProvider.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RemoteStorageProvider, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ESw6":
/*!************************************************!*\
  !*** ./src/app/menu-bar/menu-bar.component.ts ***!
  \************************************************/
/*! exports provided: MenuBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBarComponent", function() { return MenuBarComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.constants */ "dkQB");




const _c0 = ["*"];
class MenuBarComponent {
    constructor() {
        this.isOpen = true;
    }
    ngOnInit() {
    }
    toggle() {
        this.isOpen = !this.isOpen;
    }
}
MenuBarComponent.ɵfac = function MenuBarComponent_Factory(t) { return new (t || MenuBarComponent)(); };
MenuBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MenuBarComponent, selectors: [["app-menu-bar"]], inputs: { isOpen: "isOpen" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "menu-bar", "scrollbar-primary"]], template: function MenuBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@openClose", ctx.isOpen ? "open" : "closed");
    } }, styles: [".menu-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 64px;\n  bottom: 0;\n  width: 360px;\n  margin: 8px;\n  padding: 8px 2px 8px 8px;\n  border-radius: 5px;\n  background-color: #303030;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1iYXIvbWVudS1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQURGIiwiZmlsZSI6InNyYy9hcHAvbWVudS1iYXIvbWVudS1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1iYXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogNjRweDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDM2MHB4O1xyXG4gIG1hcmdpbjogOHB4O1xyXG5cclxuICBwYWRkaW5nOiA4cHggMnB4IDhweCA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XHJcblxyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('openClose', [
                // ...
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    left: '0px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    left: '-' + _app_constants__WEBPACK_IMPORTED_MODULE_2__["MAP_MENU_WIDTH"] + 'px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open => closed', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('250ms cubic-bezier(0.35, 0, 0.25, 1)')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('closed => open', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('250ms cubic-bezier(0.35, 0, 0.25, 1)')
                ]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MenuBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-menu-bar',
                templateUrl: './menu-bar.component.html',
                styleUrls: ['./menu-bar.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('openClose', [
                        // ...
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            left: '0px',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            left: '-' + _app_constants__WEBPACK_IMPORTED_MODULE_2__["MAP_MENU_WIDTH"] + 'px',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open => closed', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('250ms cubic-bezier(0.35, 0, 0.25, 1)')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('closed => open', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('250ms cubic-bezier(0.35, 0, 0.25, 1)')
                        ]),
                    ]),
                ],
            }]
    }], function () { return []; }, { isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "HObr":
/*!******************************************************************!*\
  !*** ./src/app/map-marker-editor/map-marker-editor.component.ts ***!
  \******************************************************************/
/*! exports provided: MapMarkerEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMarkerEditorComponent", function() { return MapMarkerEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-uuid */ "o9EK");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _map_marker_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map-marker-type.enum */ "fQet");
/* harmony import */ var _map_marker_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map-marker-storage */ "4fYT");
/* harmony import */ var _map_marker_editor_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-marker-editor.controller */ "7+NT");
/* harmony import */ var _map_marker_filter_map_marker_filter_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../map-marker-filter/map-marker-filter.controller */ "NYQO");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");













function MapMarkerEditorComponent_mat_list_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const markerType_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", markerType_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.getImageSrc(markerType_r3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](markerType_r3);
} }
class MapMarkerEditorComponent extends _map_marker_type_enum__WEBPACK_IMPORTED_MODULE_2__["MapMarkerTypeResource"] {
    constructor(mapMarkerStorage, _mapMarkerEditorController, _mapMarkerFilterController) {
        super();
        this.mapMarkerStorage = mapMarkerStorage;
        this._mapMarkerEditorController = _mapMarkerEditorController;
        this._mapMarkerFilterController = _mapMarkerFilterController;
        this.selectedMapMarkerTypes = [_map_marker_type_enum__WEBPACK_IMPORTED_MODULE_2__["MapMarkerType"].BEAR];
        this.mapMarkerTypes = Object.keys(_map_marker_type_enum__WEBPACK_IMPORTED_MODULE_2__["MapMarkerType"]).map(k => _map_marker_type_enum__WEBPACK_IMPORTED_MODULE_2__["MapMarkerType"][k]).filter(type => type != _map_marker_type_enum__WEBPACK_IMPORTED_MODULE_2__["MapMarkerType"].CITY);
        this._subs = [];
    }
    get isEditorEnabled() {
        return this._isEditorEnabled;
    }
    set isEditorEnabled(value) {
        if (value === this._isEditorEnabled) {
            return;
        }
        this._isEditorEnabled = value;
        this._mapMarkerEditorController.eventOnChangeEditMode.emit(value);
    }
    ngOnDestroy() {
        this._subs.forEach(sub => sub.unsubscribe());
    }
    ngOnInit() {
        this._subs.push(this._mapMarkerEditorController.eventOnCreateMapMarker.subscribe((origin) => this.onCreateMapMarker(origin)));
    }
    onCreateMapMarker(origin) {
        const type = this.selectedMapMarkerTypes[0];
        const id = angular2_uuid__WEBPACK_IMPORTED_MODULE_1__["UUID"].UUID();
        const mapMarker = { id, origin, type };
        /*
        if (type == MapMarkerType.CITY) {
          mapMarker.payload = {
            name: 'Sambor',
            persons: [
              {
                name: 'dummy person 1',
                sellingItemIds: ['T_Icon_Apple.png', 'T_Icon_Crossbow.png'],
              },
              {
                name: 'dummy person 2',
                sellingItemIds: ['T_Icon_Apple.png', 'T_Icon_Crossbow.png'],
              },
            ]
          };
        }
        */
        this._mapMarkerFilterController.ensureEnabled(type);
        this.mapMarkerStorage.add(mapMarker);
    }
}
MapMarkerEditorComponent.ɵfac = function MapMarkerEditorComponent_Factory(t) { return new (t || MapMarkerEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_marker_storage__WEBPACK_IMPORTED_MODULE_3__["MapMarkerStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_marker_editor_controller__WEBPACK_IMPORTED_MODULE_4__["MapMarkerEditorController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_marker_filter_map_marker_filter_controller__WEBPACK_IMPORTED_MODULE_5__["MapMarkerFilterController"])); };
MapMarkerEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapMarkerEditorComponent, selectors: [["app-map-marker-editor"]], inputs: { selectedMapMarkerTypes: "selectedMapMarkerTypes", isEditorEnabled: "isEditorEnabled" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 26, vars: 3, consts: [["matSubheader", ""], [3, "ngModel", "multiple", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "editor__reset-container"], ["mat-raised-button", "", "disabled", "", "color", "warn", 3, "click"], ["resetButton", ""], ["ngClass", "editor__reset-slide-label"], ["color", "warn", 3, "change"], ["clearButton", ""], [3, "value"], ["matListAvatar", "", 1, "no-select", 3, "src"], [1, "no-select"]], template: function MapMarkerEditorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select a marker type and double click the map!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-selection-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MapMarkerEditorComponent_Template_mat_selection_list_ngModelChange_2_listener($event) { return ctx.selectedMapMarkerTypes = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MapMarkerEditorComponent_mat_list_option_3_Template, 4, 3, "mat-list-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Reset all Map Markers to default.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapMarkerEditorComponent_Template_button_click_8_listener() { return ctx.mapMarkerStorage.resetAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "can't be undone!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-slide-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MapMarkerEditorComponent_Template_mat_slide_toggle_change_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return _r1.disabled = !$event.checked; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Remove all Map Markers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 4, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapMarkerEditorComponent_Template_button_click_19_listener() { return ctx.mapMarkerStorage.removeCustomMarkers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "can't be undone!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-slide-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MapMarkerEditorComponent_Template_mat_slide_toggle_change_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return _r2.disabled = !$event.checked; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedMapMarkerTypes)("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mapMarkerTypes);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatSelectionList"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggle"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListOption"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListAvatarCssMatStyler"]], styles: [".editor__reset-container[_ngcontent-%COMP%] {\n  margin-top: -16px;\n  margin-bottom: 8px;\n  display: flex;\n  width: 100%;\n  vertical-align: middle;\n  align-items: center;\n}\n.editor__reset-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  width: 33.3%;\n}\n.editor__reset-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  align-content: middle;\n  width: 66.6%;\n}\n.editor__reset-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2)   mat-slide-toggle[_ngcontent-%COMP%] {\n  width: 50px;\n  float: right;\n}\n.editor__reset-slide-label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  vertical-align: top;\n  display: inline-block;\n  line-height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLW1hcmtlci1lZGl0b3IvbWFwLW1hcmtlci1lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBRTtFQUNFLFlBQUE7QUFFSjtBQUFFO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FBRUo7QUFBSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRU47QUFFQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYXAtbWFya2VyLWVkaXRvci9tYXAtbWFya2VyLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0b3JfX3Jlc2V0LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogLTE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICB3aWR0aDoxMDAlO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICA6bnRoLWNoaWxkKDEpIHtcclxuICAgIHdpZHRoOiAzMy4zJTtcclxuICB9XHJcbiAgOm50aC1jaGlsZCgyKSB7XHJcbiAgICBhbGlnbi1jb250ZW50OiBtaWRkbGU7XHJcbiAgICB3aWR0aDogNjYuNiU7XHJcblxyXG4gICAgbWF0LXNsaWRlLXRvZ2dsZSB7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBmbG9hdDpyaWdodDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmVkaXRvcl9fcmVzZXQtc2xpZGUtbGFiZWwge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7IC8vIHRoaXMgaXMgZGVmaW5lZCBpbiAubWF0LXNsaWRlLXRvZ2dsZVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapMarkerEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map-marker-editor',
                templateUrl: './map-marker-editor.component.html',
                styleUrls: ['./map-marker-editor.component.scss']
            }]
    }], function () { return [{ type: _map_marker_storage__WEBPACK_IMPORTED_MODULE_3__["MapMarkerStorage"] }, { type: _map_marker_editor_controller__WEBPACK_IMPORTED_MODULE_4__["MapMarkerEditorController"] }, { type: _map_marker_filter_map_marker_filter_controller__WEBPACK_IMPORTED_MODULE_5__["MapMarkerFilterController"] }]; }, { selectedMapMarkerTypes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isEditorEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "IOBT":
/*!************************************!*\
  !*** ./src/assets/data/items.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"3124c8e3-d44d-4059-bc27-9ccd23e13938\",\"name\":\"AnimalFeed\",\"icon\":\"T_Icon_AnimalFeed.png\",\"type\":\"Misc\",\"price\":50,\"germanName\":null},{\"id\":\"a32da0d8-18a0-4349-b325-99011241566d\",\"name\":\"Apple\",\"icon\":\"T_Icon_Apple.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"c1060b3c-0e55-4b20-a31f-ecab77654586\",\"name\":\"ArrowIron\",\"icon\":\"T_Icon_ArrowIron.png\",\"type\":\"Misc\",\"price\":40,\"germanName\":null},{\"id\":\"86309990-68e1-45f0-a015-5b8ea4e3dd49\",\"name\":\"ArrowStone\",\"icon\":\"T_Icon_ArrowStone.png\",\"type\":\"Misc\",\"price\":10,\"germanName\":null},{\"id\":\"d840a40a-97e8-464d-ad45-e0bac9fc9146\",\"name\":\"Backpack\",\"icon\":\"T_Icon_Backpack.png\",\"type\":\"Misc\",\"price\":60,\"germanName\":null},{\"id\":\"d3522420-9cc4-48c4-a4ce-381413ab0b0c\",\"name\":\"Backpack_A\",\"icon\":\"T_Icon_Backpack_A.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"61153833-2f94-48a0-8f4a-787f1e37f57a\",\"name\":\"Basket\",\"icon\":\"T_Icon_Basket.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"9b00e81d-06cd-4039-a42c-4db684131091\",\"name\":\"Beetroot\",\"icon\":\"T_Icon_Beetroot.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"e0e0922b-c035-4cd5-be66-e0aaa5875117\",\"name\":\"BeetrootSeeds\",\"icon\":\"T_Icon_BeetrootSeeds.png\",\"type\":\"Misc\",\"price\":16,\"germanName\":null},{\"id\":\"81d79a1a-a195-442d-98ce-74913f2f2673\",\"name\":\"Belt_A\",\"icon\":\"T_Icon_Belt_A.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"66e748b0-48f9-4106-aa58-8d5dabb32b28\",\"name\":\"Berry\",\"icon\":\"T_Icon_Berry.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"01389b43-55ee-4f10-aeda-1e45e7c5bb72\",\"name\":\"BirdTrap\",\"icon\":\"T_Icon_BirdTrap.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"a2e515ea-8aa1-4996-825b-693082459fb8\",\"name\":\"BitterBoleteMushroom\",\"icon\":\"T_Icon_BitterBoleteMushroom.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"157ea0a7-4f2c-4f16-acdd-4c21a5b62fa9\",\"name\":\"BoleteMushroom_v1\",\"icon\":\"T_Icon_BoleteMushroom_v1.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"f1235a4c-53e8-427e-ac1a-5255865c9a70\",\"name\":\"BoleteMushroom_v2\",\"icon\":\"T_Icon_BoleteMushroom_v2.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"6622c8fb-bbc8-4627-b0c5-457fefe1e70d\",\"name\":\"Boots\",\"icon\":\"T_Icon_Boots.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"65009271-2772-4304-b3f4-ba86e80eaf61\",\"name\":\"Boots_A\",\"icon\":\"T_Icon_Boots_A.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"76c75c49-5d1a-4f35-9dc4-3abf2e76df58\",\"name\":\"Boots_B\",\"icon\":\"T_Icon_Boots_B.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"0a73b317-b8e4-4a08-82d3-f6e25492e870\",\"name\":\"Bow\",\"icon\":\"T_Icon_Bow.png\",\"type\":\"Misc\",\"price\":200,\"germanName\":null},{\"id\":\"c68736c3-2ff0-434f-8553-6c8c54b583ef\",\"name\":\"Braies_A\",\"icon\":\"T_Icon_Braies_A.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"820501cd-a22e-4361-9596-ce3387022507\",\"name\":\"Braies_B\",\"icon\":\"T_Icon_Braies_B.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"9f868812-7a9c-48e0-87f6-b9915f833b7e\",\"name\":\"BroadleafPlantain\",\"icon\":\"T_Icon_BroadleafPlantain.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"0d09b715-283f-4113-a20c-0cfd245a05ce\",\"name\":\"Bucket\",\"icon\":\"T_Icon_Bucket.png\",\"type\":\"Misc\",\"price\":160,\"germanName\":null},{\"id\":\"437ddd2c-2200-4a4f-8551-626b4479ea48\",\"name\":\"BuildingHammer\",\"icon\":\"T_Icon_BuildingHammer.png\",\"type\":\"Misc\",\"price\":60,\"germanName\":null},{\"id\":\"7117d9fb-1a17-4785-bff6-dba303d465f7\",\"name\":\"Cabbage\",\"icon\":\"T_Icon_Cabbage.png\",\"type\":\"Misc\",\"price\":6,\"germanName\":null},{\"id\":\"ef779af0-dedd-4e9b-8077-4409bf5717f2\",\"name\":\"CabbageSeeds\",\"icon\":\"T_Icon_CabbageSeeds.png\",\"type\":\"Misc\",\"price\":16,\"germanName\":null},{\"id\":\"32e96630-abe3-4367-a5dd-14321f3b5b45\",\"name\":\"CapCoif_A\",\"icon\":\"T_Icon_CapCoif_A.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"f1b3822f-af94-4c8c-8fc1-fc7b3bf382b3\",\"name\":\"Carrot\",\"icon\":\"T_Icon_Carrot.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"b95bc446-863e-45cd-9482-5bdfc4d5a3fd\",\"name\":\"CarrotSeeds\",\"icon\":\"T_Icon_CarrotSeeds.png\",\"type\":\"Misc\",\"price\":10,\"germanName\":null},{\"id\":\"b0c66b56-072e-4cfd-85f5-9ce964dbae93\",\"name\":\"Cherry\",\"icon\":\"T_Icon_Cherry.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"a8bce21c-b4c8-4415-a370-9ed5e5da0ae2\",\"name\":\"Clay\",\"icon\":\"T_Icon_Clay.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"5b0b50a6-9a3d-41a7-8427-eba0c04bcda0\",\"name\":\"ClayBottle\",\"icon\":\"T_Icon_ClayBottle.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"33217650-a08d-41b9-8608-58a9f833138b\",\"name\":\"ClayBowl\",\"icon\":\"T_Icon_ClayBowl.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"62dc0a5f-c8cc-4fa2-837d-925e0a7eb4ec\",\"name\":\"ClayJag\",\"icon\":\"T_Icon_ClayJag.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"53567ed8-9927-4942-bcc7-399115de1bd3\",\"name\":\"ClayMugA\",\"icon\":\"T_Icon_ClayMugA.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"809391cb-6195-4971-bdbb-532abf3fb50c\",\"name\":\"ClayMugB\",\"icon\":\"T_Icon_ClayMugB.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"1854601c-cd2a-4cfa-83fa-68e595f015e1\",\"name\":\"Coif_A\",\"icon\":\"T_Icon_Coif_A.png\",\"type\":\"Misc\",\"price\":400,\"germanName\":null},{\"id\":\"57835ff3-e464-4d33-8cbf-c6f0cc209ba4\",\"name\":\"Coin\",\"icon\":\"T_Icon_Coin.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"b5aa7692-d40d-4602-a34f-78f15ba52944\",\"name\":\"Crossbow\",\"icon\":\"T_Icon_Crossbow.png\",\"type\":\"Misc\",\"price\":900,\"germanName\":null},{\"id\":\"988697f2-1277-46b3-8901-3fa9eea35486\",\"name\":\"Cudgel\",\"icon\":\"T_Icon_Cudgel.png\",\"type\":\"Misc\",\"price\":40,\"germanName\":null},{\"id\":\"c8f35321-00bd-4502-9f52-6227882e657f\",\"name\":\"Daub\",\"icon\":\"T_Icon_Daub.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"174f6ed5-ba87-4ca1-8c08-ca65678ad9da\",\"name\":\"Dough\",\"icon\":\"T_Icon_Dough.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"711a6ed6-4a41-48db-9f87-069c0d0562b3\",\"name\":\"DriedFish\",\"icon\":\"T_Icon_DriedFish.png\",\"type\":\"Misc\",\"price\":18,\"germanName\":null},{\"id\":\"05658ba7-7cab-4bb0-8782-a1c83f40c6d9\",\"name\":\"DriedMeat\",\"icon\":\"T_Icon_DriedMeat.png\",\"type\":\"Misc\",\"price\":16,\"germanName\":null},{\"id\":\"1ec9f0b7-b573-43bb-acb8-d3eeb0ade39d\",\"name\":\"Egg\",\"icon\":\"T_Icon_Egg.png\",\"type\":\"Misc\",\"price\":6,\"germanName\":null},{\"id\":\"3b991812-a6fd-48aa-b8c4-22aac22a3c69\",\"name\":\"FancyShoes\",\"icon\":\"T_Icon_FancyShoes.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"c0077ae7-a93d-4db5-894f-a42c70faf52f\",\"name\":\"Feather\",\"icon\":\"T_Icon_Feather.png\",\"type\":\"Misc\",\"price\":10,\"germanName\":null},{\"id\":\"16cf5525-563e-4238-89e1-fb69c463fa83\",\"name\":\"FeedBag\",\"icon\":\"T_Icon_FeedBag.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"b3921781-fd7a-4102-be26-b54a14057902\",\"name\":\"Fertilizer\",\"icon\":\"T_Icon_Fertilizer.png\",\"type\":\"Misc\",\"price\":10,\"germanName\":null},{\"id\":\"d06e871b-0d52-4245-9b86-d7c8409f098e\",\"name\":\"Firewood\",\"icon\":\"T_Icon_Firewood.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"1b1e5ba5-3e4c-4a3f-b50c-e55f8c1364f4\",\"name\":\"Fish\",\"icon\":\"T_Icon_Fish.png\",\"type\":\"Misc\",\"price\":8,\"germanName\":null},{\"id\":\"12897b22-e4a8-4b5d-9e43-a8e225fb8188\",\"name\":\"FishingNetPerch\",\"icon\":\"T_Icon_FishingNetPerch.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"be2100b9-811d-45f3-af87-22846688d322\",\"name\":\"FishingNetPike\",\"icon\":\"T_Icon_FishingNetPike.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"91df8b48-a5c6-49f0-9bb4-99338e38f2a1\",\"name\":\"FishingNetRoach\",\"icon\":\"T_Icon_FishingNetRoach.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"c73df435-e37c-4e0a-b6f7-759fddc3a553\",\"name\":\"FishingSpear\",\"icon\":\"T_Icon_FishingSpear.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"fc274810-d416-4b3d-8269-76a8146b2c75\",\"name\":\"FishTart\",\"icon\":\"T_Icon_FishTart.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"b70680cd-d122-4a11-b74d-2e351d56e72d\",\"name\":\"Flail\",\"icon\":\"T_Icon_Flail.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"a1a4752a-d454-495a-b909-9159ff8af3cf\",\"name\":\"Flatbread\",\"icon\":\"T_Icon_Flatbread.png\",\"type\":\"Misc\",\"price\":20,\"germanName\":null},{\"id\":\"b7a80973-106e-4ab1-9c3b-31c66c73195d\",\"name\":\"FlatbreadWithOnion\",\"icon\":\"T_Icon_FlatbreadWithOnion.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"2471a5bb-47d3-4d35-aa28-62dac51fda4e\",\"name\":\"Flax\",\"icon\":\"T_Icon_Flax.png\",\"type\":\"Misc\",\"price\":20,\"germanName\":null},{\"id\":\"d0aeed88-4dfb-4267-8104-aef0abfd697d\",\"name\":\"FlaxGrain\",\"icon\":\"T_Icon_FlaxGrain.png\",\"type\":\"Misc\",\"price\":20,\"germanName\":null},{\"id\":\"9addecc5-6467-423e-99c6-752fbe666e31\",\"name\":\"FlaxStalk\",\"icon\":\"T_Icon_FlaxStalk.png\",\"type\":\"Misc\",\"price\":10,\"germanName\":null},{\"id\":\"0aad801e-c89b-4812-9a1c-2b835461adaa\",\"name\":\"Flour\",\"icon\":\"T_Icon_Flour.png\",\"type\":\"Misc\",\"price\":20,\"germanName\":null},{\"id\":\"579e2af8-f595-40ac-8c15-70ca0fc49689\",\"name\":\"FlyAgaricMushroom_v2\",\"icon\":\"T_Icon_FlyAgaricMushroom_v2.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"797cd04f-ca18-482b-88cf-404890380682\",\"name\":\"ForgeTongs_A\",\"icon\":\"T_Icon_ForgeTongs_A.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"ab7f13c2-a83d-4b81-b721-7bc3351918e2\",\"name\":\"ForgeTongs_B\",\"icon\":\"T_Icon_ForgeTongs_B.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"4344592a-59e8-4a92-ae05-da9431fd78f7\",\"name\":\"ForgeTongs_C\",\"icon\":\"T_Icon_ForgeTongs_C.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"96d20600-8d24-4fc8-be30-7c9f079ca69e\",\"name\":\"ForgeTweezers_A\",\"icon\":\"T_Icon_ForgeTweezers_A.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"60ed6f9d-ce6f-4fba-916c-6a46131a4b35\",\"name\":\"ForgingHammer_A\",\"icon\":\"T_Icon_ForgingHammer_A.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"fe5820a4-aecf-4144-a4e0-bff64e4e56e4\",\"name\":\"ForgingHammer_B\",\"icon\":\"T_Icon_ForgingHammer_B.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"11f162b1-80e7-4c7e-b609-104a0f4d69a5\",\"name\":\"FruitPie\",\"icon\":\"T_Icon_FruitPie.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"dc085115-ddb5-4210-b75d-97f6d19a10d9\",\"name\":\"FruitTart\",\"icon\":\"T_Icon_FruitTart.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"afb7dbd5-b8cc-43ac-8d5b-26cd0813991f\",\"name\":\"Fur\",\"icon\":\"T_Icon_Fur.png\",\"type\":\"Misc\",\"price\":10,\"germanName\":null},{\"id\":\"3780c4d7-b0cd-4751-9b8e-ab72fcd74a16\",\"name\":\"FurBoots\",\"icon\":\"T_Icon_FurBoots.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"b67d6436-7426-4935-acdf-3667859900ec\",\"name\":\"FurCapelet\",\"icon\":\"T_Icon_FurCapelet.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"02eedac7-aae0-4826-a7a1-ed3bad76aaf0\",\"name\":\"FurHood\",\"icon\":\"T_Icon_FurHood.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"f548b397-a3a0-4145-a125-094554bd2451\",\"name\":\"FurShoes\",\"icon\":\"T_Icon_FurShoes.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"89d34c7a-665b-4699-a2db-7213ad72224c\",\"name\":\"Gruel\",\"icon\":\"T_Icon_Gruel.png\",\"type\":\"Misc\",\"price\":30,\"germanName\":null},{\"id\":\"fe10b50e-6cbd-41fb-ab2b-1d23530ab6f6\",\"name\":\"Hats_A\",\"icon\":\"T_Icon_Hats_A.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"d5b1a434-6e52-4698-a5d4-3dbb01f3cac1\",\"name\":\"Hat_A\",\"icon\":\"T_Icon_Hat_A.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"067e1cc6-4fb6-4f43-9965-ca06771a314d\",\"name\":\"Hat_B\",\"icon\":\"T_Icon_Hat_B.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"0e18ff38-2d5a-4527-99f2-a58246591a77\",\"name\":\"Hat_C\",\"icon\":\"T_Icon_Hat_C.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"18ff571b-6b43-4a20-b0df-8b1deb31d41d\",\"name\":\"Hat_D\",\"icon\":\"T_Icon_Hat_D.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"30ca5104-3877-4a37-a60d-589fd29aa3d9\",\"name\":\"Hat_E\",\"icon\":\"T_Icon_Hat_E.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"d299ff3f-aa93-468a-9f2b-65c27ccacf95\",\"name\":\"Hat_F\",\"icon\":\"T_Icon_Hat_F.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"714ae2ff-2a19-490c-b348-f91bf37417f1\",\"name\":\"Hood\",\"icon\":\"T_Icon_Hood.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"c7c3662e-bf18-444c-b4e6-1285bfadec00\",\"name\":\"Hood_A\",\"icon\":\"T_Icon_Hood_A.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"ad5de63a-cab4-410c-98f2-a5bd53825ac3\",\"name\":\"HoseJoined\",\"icon\":\"T_Icon_HoseJoined.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"2f5c5f7d-0700-40a7-87be-7c07e36e18d5\",\"name\":\"Hose_A\",\"icon\":\"T_Icon_Hose_A.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"c73fd2f9-3869-4243-9f1a-0270d467aa10\",\"name\":\"Iron\",\"icon\":\"T_Icon_Iron.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"29162efb-a291-4efb-8d15-c88264ffa06a\",\"name\":\"IronAxe\",\"icon\":\"T_Icon_IronAxe.png\",\"type\":\"Misc\",\"price\":500,\"germanName\":null},{\"id\":\"52d9e9b3-4d53-403e-bd59-0171fe1547cb\",\"name\":\"IronBolt\",\"icon\":\"T_Icon_IronBolt.png\",\"type\":\"Misc\",\"price\":40,\"germanName\":null},{\"id\":\"ac42d24f-20d6-498c-94dc-d7aac738b022\",\"name\":\"IronBuildingHammer\",\"icon\":\"T_Icon_IronBuildingHammer.png\",\"type\":\"Misc\",\"price\":400,\"germanName\":null},{\"id\":\"3ae08423-8fb0-4b88-9a99-30036dd08339\",\"name\":\"IronHoe\",\"icon\":\"T_Icon_IronHoe.png\",\"type\":\"Misc\",\"price\":400,\"germanName\":null},{\"id\":\"94ef8b17-752b-4363-b60c-93cc6f4a9b26\",\"name\":\"IronPike\",\"icon\":\"T_Icon_IronPike.png\",\"type\":\"Misc\",\"price\":340,\"germanName\":null},{\"id\":\"cec0b48b-64d5-41ed-88f5-e23597da6826\",\"name\":\"IronShovel\",\"icon\":\"T_Icon_IronShovel.png\",\"type\":\"Misc\",\"price\":360,\"germanName\":null},{\"id\":\"0379fefa-a690-46da-83a3-75ec1d793484\",\"name\":\"IronSickle\",\"icon\":\"T_Icon_IronSickle.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"a3d09756-28f8-4408-86cf-03e86ee4d40f\",\"name\":\"IronSkinningKnife\",\"icon\":\"T_Icon_IronSkinningKnife.png\",\"type\":\"Misc\",\"price\":240,\"germanName\":null},{\"id\":\"80d82a39-fca2-4eb8-8ab4-edd6ee44cd76\",\"name\":\"Leather\",\"icon\":\"T_Icon_Leather.png\",\"type\":\"Misc\",\"price\":8,\"germanName\":null},{\"id\":\"ec19139b-f9af-4a3b-b383-a38bd87ac83e\",\"name\":\"LegWraps_A\",\"icon\":\"T_Icon_LegWraps_A.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"56f9519d-cac0-47b1-8e82-038941e4abcd\",\"name\":\"Lime\",\"icon\":\"T_Icon_Lime.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"d875f4ae-160f-4cd9-9c86-8ebe6170d430\",\"name\":\"LinenFabric\",\"icon\":\"T_Icon_LinenFabric.png\",\"type\":\"Misc\",\"price\":160,\"germanName\":null},{\"id\":\"d504ffbc-f179-4f30-94d6-a7a4967f5aaf\",\"name\":\"LinenThread\",\"icon\":\"T_Icon_LinenThread.png\",\"type\":\"Misc\",\"price\":100,\"germanName\":null},{\"id\":\"769beac8-b2cc-4f18-a796-7adb493266bf\",\"name\":\"Log\",\"icon\":\"T_Icon_Log.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"7220d38e-b8da-4c24-a4b4-667bbd759e80\",\"name\":\"Longbow\",\"icon\":\"T_Icon_Longbow.png\",\"type\":\"Misc\",\"price\":500,\"germanName\":null},{\"id\":\"d002b997-c6b6-400a-a53c-0393012db296\",\"name\":\"Manure\",\"icon\":\"T_Icon_Manure.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"89843d92-5655-4a65-a1cf-a0d8432e3f85\",\"name\":\"Meat\",\"icon\":\"T_Icon_Meat.png\",\"type\":\"Misc\",\"price\":6,\"germanName\":null},{\"id\":\"8c34c34f-86f6-4f1c-8e2a-0e0a1cd35fd6\",\"name\":\"MeatPie\",\"icon\":\"T_Icon_MeatPie.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"88606800-b404-4b85-a74f-c6f282bc0f7d\",\"name\":\"MeatTart\",\"icon\":\"T_Icon_MeatTart.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"f583d19c-ffbc-4a30-99ac-b4d47bfd7239\",\"name\":\"MeatWithGravy\",\"icon\":\"T_Icon_MeatWithGravy.png\",\"type\":\"Misc\",\"price\":40,\"germanName\":null},{\"id\":\"f936a6d4-6fa9-45c5-bdec-610c32f684c8\",\"name\":\"MorelMushroom\",\"icon\":\"T_Icon_MorelMushroom.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"6eb70fb9-7a2f-4edf-be83-44e1f9128d82\",\"name\":\"MultigrainBread\",\"icon\":\"T_Icon_MultigrainBread.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"cf6889cd-d4ac-4b1b-bbeb-f087b5033d21\",\"name\":\"Mushroom\",\"icon\":\"T_Icon_Mushroom.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"4322d86c-dcbf-4d3b-814b-09c2d5185ccc\",\"name\":\"NobleBoots\",\"icon\":\"T_Icon_NobleBoots.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"4cb1bdc4-9537-475d-963d-8af963637538\",\"name\":\"NobleShoes\",\"icon\":\"T_Icon_NobleShoes.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"78b95182-d92f-458f-82e0-34670e7d79fa\",\"name\":\"Oat\",\"icon\":\"T_Icon_Oat.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"c3c17b47-fc1a-434e-8d12-4dbb568e8f28\",\"name\":\"OatGrain\",\"icon\":\"T_Icon_OatGrain.png\",\"type\":\"Misc\",\"price\":10,\"germanName\":null},{\"id\":\"c21bda3a-4f9f-4824-a9f1-fe17e773b3f1\",\"name\":\"OatRolls\",\"icon\":\"T_Icon_OatRolls.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"85bd1226-4e46-40bc-98a7-8ade0a599633\",\"name\":\"Onion\",\"icon\":\"T_Icon_Onion.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"a2757573-6c68-4357-a00c-de1cb7deed9d\",\"name\":\"OnionSeeds\",\"icon\":\"T_Icon_OnionSeeds.png\",\"type\":\"Misc\",\"price\":10,\"germanName\":null},{\"id\":\"1d94be75-4ce6-47d1-9a1c-c41adfe32917\",\"name\":\"ParasolMushroom\",\"icon\":\"T_Icon_ParasolMushroom.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"0f2529a9-aaff-4c06-b54f-f11b6b2ad1a7\",\"name\":\"Pear\",\"icon\":\"T_Icon_Pear.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"c2d2e6bd-e178-4f09-aadd-16b258f7efd1\",\"name\":\"Pickaxe\",\"icon\":\"T_Icon_Pickaxe.png\",\"type\":\"Misc\",\"price\":440,\"germanName\":null},{\"id\":\"750e31da-2037-468f-897e-69f5ae516c3a\",\"name\":\"Plank\",\"icon\":\"T_Icon_Plank.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"911e24d3-7489-446e-9c44-e2e9e5719783\",\"name\":\"Plum\",\"icon\":\"T_Icon_Plum.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"9504f25c-d15d-4588-945e-912e9a99ffed\",\"name\":\"Porridge\",\"icon\":\"T_Icon_Porridge.png\",\"type\":\"Misc\",\"price\":30,\"germanName\":null},{\"id\":\"c7a1d14c-6ef7-4154-9a2b-9b5a7230e2df\",\"name\":\"Potage\",\"icon\":\"T_Icon_Potage.png\",\"type\":\"Misc\",\"price\":80,\"germanName\":null},{\"id\":\"a18eb739-4813-4ead-9b31-7f8df3ffaf72\",\"name\":\"Pouch\",\"icon\":\"T_Icon_Pouch.png\",\"type\":\"Misc\",\"price\":200,\"germanName\":null},{\"id\":\"d80ce6cc-2f6a-4fb5-be28-6df30d0ab5e2\",\"name\":\"RabbitTrap\",\"icon\":\"T_Icon_RabbitTrap.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"5b638950-1c43-4ad5-9c6f-c4c7458f58cb\",\"name\":\"RatTrap\",\"icon\":\"T_Icon_RatTrap.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"4eb9252a-5039-433b-9226-6fd3870b18d2\",\"name\":\"RawBerry\",\"icon\":\"T_Icon_RawBerry.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"16982282-eab6-4750-8d54-e9fa200ee97a\",\"name\":\"RecursiveBow\",\"icon\":\"T_Icon_RecursiveBow.png\",\"type\":\"Misc\",\"price\":700,\"germanName\":null},{\"id\":\"1892c7c8-5be4-4b52-8325-c4496683ea10\",\"name\":\"RedPineMushroom\",\"icon\":\"T_Icon_RedPineMushroom.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"dd9aed1a-618e-4e5d-b8e4-c88eed856ba8\",\"name\":\"RoastedFish\",\"icon\":\"T_Icon_RoastedFish.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"1aa37e88-17b7-4eb0-a18b-9ab77d16494e\",\"name\":\"RoastedMeat\",\"icon\":\"T_Icon_RoastedMeat.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"010d6af3-f5b6-43e6-8d37-7c7f6cf7a3f6\",\"name\":\"Rock\",\"icon\":\"T_Icon_Rock.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"90ef291e-9373-4f82-aefd-1d5008a6a1b9\",\"name\":\"Rot\",\"icon\":\"T_Icon_Rot.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"8b34aae9-3320-4e42-beec-58defe45efbb\",\"name\":\"RottenFish\",\"icon\":\"T_Icon_RottenFish.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"38a14383-5241-42a3-98a1-cf897154d90c\",\"name\":\"RottenMeat\",\"icon\":\"T_Icon_RottenMeat.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"ad385f6a-faa0-448b-97b2-7c5bb2584bc2\",\"name\":\"Rye\",\"icon\":\"T_Icon_Rye.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"6bb48067-5222-41a1-8369-98fe2a47d5fa\",\"name\":\"RyeBread\",\"icon\":\"T_Icon_RyeBread.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"23a6e37c-7f21-468f-8a4d-d82d2bd5792b\",\"name\":\"RyeGrain\",\"icon\":\"T_Icon_RyeGrain.png\",\"type\":\"Misc\",\"price\":10,\"germanName\":null},{\"id\":\"082ffe1e-8201-48c3-a5b3-34bd77ed6e11\",\"name\":\"Salt\",\"icon\":\"T_Icon_Salt.png\",\"type\":\"Misc\",\"price\":20,\"germanName\":null},{\"id\":\"031ef4ff-42da-490d-aa60-c94d31756ea3\",\"name\":\"SaltedFish\",\"icon\":\"T_Icon_SaltedFish.png\",\"type\":\"Misc\",\"price\":30,\"germanName\":null},{\"id\":\"89f921b3-6362-4b59-abc7-6c9fc60cbf6a\",\"name\":\"SaltedMeat\",\"icon\":\"T_Icon_SaltedMeat.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"68473940-b20d-4fa1-91cf-fafaf0ac7533\",\"name\":\"Scythe\",\"icon\":\"T_Icon_Scythe.png\",\"type\":\"Misc\",\"price\":600,\"germanName\":null},{\"id\":\"c9642b5e-14d3-4f40-874b-2162ced35591\",\"name\":\"ShearingScissors\",\"icon\":\"T_Icon_ShearingScissors.png\",\"type\":\"Misc\",\"price\":400,\"germanName\":null},{\"id\":\"1ad0f7f4-3a30-4b2c-8ade-f9b20f8496c3\",\"name\":\"Shirt_A\",\"icon\":\"T_Icon_Shirt_A.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"c7fde7c8-b25d-4eb9-82ac-6a754b932da9\",\"name\":\"Shoes\",\"icon\":\"T_Icon_Shoes.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"e61a0243-07aa-4d71-ae06-42a34baed377\",\"name\":\"SimpleSack\",\"icon\":\"T_Icon_SimpleSack.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"30f590a9-a2dd-4058-afb5-5d50c5ff9c01\",\"name\":\"SimpleShoes\",\"icon\":\"T_Icon_SimpleShoes.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"608f8d00-2c50-49a6-97ed-ac1a5af1a468\",\"name\":\"SimpleTorch\",\"icon\":\"T_Icon_SimpleTorch.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"a790e4aa-8b73-4719-9094-53da144a5d59\",\"name\":\"SmallBackpack\",\"icon\":\"T_Icon_SmallBackpack.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"229c065e-a785-49df-8ae1-7035aff60fec\",\"name\":\"SmallPouch\",\"icon\":\"T_Icon_SmallPouch.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"62c51f40-aded-442f-9c25-6a4356b454a8\",\"name\":\"Soup\",\"icon\":\"T_Icon_Soup.png\",\"type\":\"Misc\",\"price\":60,\"germanName\":null},{\"id\":\"7a6e0af7-9573-42ad-ba67-dbcfec8eff6e\",\"name\":\"Stew\",\"icon\":\"T_Icon_Stew.png\",\"type\":\"Misc\",\"price\":80,\"germanName\":null},{\"id\":\"0f6c2aa7-a908-46d9-9325-0cd9e4aaea2d\",\"name\":\"Stick\",\"icon\":\"T_Icon_Stick.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"e9337111-ed79-47f2-93f2-450869817df2\",\"name\":\"StJohnsWort\",\"icon\":\"T_Icon_StJohnsWort.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"02493d54-0db3-432e-993c-a3de904e65a3\",\"name\":\"StoneAxe\",\"icon\":\"T_Icon_StoneAxe.png\",\"type\":\"Misc\",\"price\":80,\"germanName\":null},{\"id\":\"d35780d8-d8c3-4c0f-a2b9-93bdfdfd604a\",\"name\":\"StoneHoe\",\"icon\":\"T_Icon_StoneHoe.png\",\"type\":\"Misc\",\"price\":180,\"germanName\":null},{\"id\":\"231384f1-56c3-4f54-b71e-156fcefc82d0\",\"name\":\"StonePike\",\"icon\":\"T_Icon_StonePike.png\",\"type\":\"Misc\",\"price\":160,\"germanName\":null},{\"id\":\"66ab2b8d-e565-432f-9b07-cf748214299b\",\"name\":\"StoneSickle\",\"icon\":\"T_Icon_StoneSickle.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"40c3dc7e-f92f-444c-9e3f-fe4c26153b9d\",\"name\":\"StoneSkinningKnife\",\"icon\":\"T_Icon_StoneSkinningKnife.png\",\"type\":\"Misc\",\"price\":60,\"germanName\":null},{\"id\":\"d084e6cf-42ba-42ed-8223-fbfeea2054b6\",\"name\":\"Straw\",\"icon\":\"T_Icon_Straw.png\",\"type\":\"Misc\",\"price\":2,\"germanName\":null},{\"id\":\"512ac68a-7d0b-43da-8c7a-c6ac23e038a0\",\"name\":\"ThickGloves\",\"icon\":\"T_Icon_ThickGloves.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"614fac2a-5f5f-485a-91e7-76b50bcafcaa\",\"name\":\"ThickLeatherGloves\",\"icon\":\"T_Icon_ThickLeatherGloves.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"6171c257-1d7e-4645-a466-59ba82cba81e\",\"name\":\"Torch\",\"icon\":\"T_Icon_Torch.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"70cc6756-5416-4f56-b710-2c19a0acfaaf\",\"name\":\"TunicShort\",\"icon\":\"T_Icon_TunicShort.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"2effd81e-1eac-4262-9341-449f1a4ddc90\",\"name\":\"TunicVest_A\",\"icon\":\"T_Icon_TunicVest_A.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"dfd03c9c-3872-44e9-a902-281f7ed1eb76\",\"name\":\"TunicVest_B\",\"icon\":\"T_Icon_TunicVest_B.png\",\"type\":\"Misc\",\"price\":700,\"germanName\":null},{\"id\":\"3015912f-0ecb-4f0e-acde-6d1356495935\",\"name\":\"Tunic_A\",\"icon\":\"T_Icon_Tunic_A.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"ccf2cc0b-c0da-422b-8fab-a5be06a6178b\",\"name\":\"Tunic_B\",\"icon\":\"T_Icon_Tunic_B.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"2eb0b4a3-f3c4-423d-a9e9-8e4c46ae51f0\",\"name\":\"Waterskin\",\"icon\":\"T_Icon_Waterskin.png\",\"type\":\"Misc\",\"price\":200,\"germanName\":null},{\"id\":\"d1bdca44-12bc-4672-b8d8-c713459e6953\",\"name\":\"Wheat\",\"icon\":\"T_Icon_Wheat.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"8cfdfea2-2f79-4727-bf4d-c4f907385d16\",\"name\":\"WheatBread\",\"icon\":\"T_Icon_WheatBread.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"cface0dc-1181-4be3-93fb-44c2d1032fa5\",\"name\":\"WheatGrain\",\"icon\":\"T_Icon_WheatGrain.png\",\"type\":\"Misc\",\"price\":20,\"germanName\":null},{\"id\":\"e4fbcbf7-f6b1-4699-8520-801663677ea5\",\"name\":\"WhiteBread\",\"icon\":\"T_Icon_WhiteBread.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"4adacd99-96cd-44e9-8bde-7c0b1f22429a\",\"name\":\"WickerBasketA\",\"icon\":\"T_Icon_WickerBasketA.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"fbf0564b-f1db-46db-8b8b-9f32d317eb76\",\"name\":\"WickerBasketB\",\"icon\":\"T_Icon_WickerBasketB.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"195d42e9-96b7-43cc-9232-e1be27d80786\",\"name\":\"WickerBasketC\",\"icon\":\"T_Icon_WickerBasketC.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"ea23fd71-7925-4065-9bee-da0aaf7fb971\",\"name\":\"WickerBasketD\",\"icon\":\"T_Icon_WickerBasketD.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"725c89b8-bda7-457d-8e95-804892e1b419\",\"name\":\"WoodenBolt\",\"icon\":\"T_Icon_WoodenBolt.png\",\"type\":\"Misc\",\"price\":10,\"germanName\":null},{\"id\":\"1369a3ab-6b2b-423a-a734-b37e3d187a69\",\"name\":\"WoodenBowl\",\"icon\":\"T_Icon_WoodenBowl.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"d7788957-d95d-4f88-876b-e3352773de35\",\"name\":\"WoodenCup\",\"icon\":\"T_Icon_WoodenCup.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"7c5ff26f-7528-4463-a5cf-c69e720ef98d\",\"name\":\"WoodenHoe\",\"icon\":\"T_Icon_WoodenHoe.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"86661611-f55a-4b36-8fba-3e7a4a2756ad\",\"name\":\"WoodenLadle\",\"icon\":\"T_Icon_WoodenLadle.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"4e9e49bd-46db-4fb0-a5db-f1461624f08d\",\"name\":\"WoodenPike\",\"icon\":\"T_Icon_WoodenPike.png\",\"type\":\"Misc\",\"price\":40,\"germanName\":null},{\"id\":\"6d69746f-1a87-411d-a7c1-169ab66e8189\",\"name\":\"WoodenPlate\",\"icon\":\"T_Icon_WoodenPlate.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"07d63e9d-75dd-4b36-8f6a-610c141cce7e\",\"name\":\"WoodenShovel\",\"icon\":\"T_Icon_WoodenShovel.png\",\"type\":\"Misc\",\"price\":100,\"germanName\":null},{\"id\":\"8321020b-5a85-4265-b55d-49020239d14c\",\"name\":\"WoodenSpoon\",\"icon\":\"T_Icon_WoodenSpoon.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"b14be2e6-3de8-4fa3-918a-c76382f45b6a\",\"name\":\"WoodenWheel\",\"icon\":\"T_Icon_WoodenWheel.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"cac12a9d-81c8-41f3-b2b0-797b8a738069\",\"name\":\"Wool\",\"icon\":\"T_Icon_Wool.png\",\"type\":\"Misc\",\"price\":16,\"germanName\":null},{\"id\":\"65ada6b9-83bc-4509-b892-8cba93fabbc8\",\"name\":\"WoolFabric\",\"icon\":\"T_Icon_WoolFabric.png\",\"type\":\"Misc\",\"price\":180,\"germanName\":null},{\"id\":\"400a2ae1-3ee0-4c8d-94bb-a0bb77cd0f81\",\"name\":\"WoolThread\",\"icon\":\"T_Icon_WoolThread.png\",\"type\":\"Misc\",\"price\":100,\"germanName\":null},{\"id\":\"dd3aab60-a6f7-4939-abfb-664b73cc30a4\",\"name\":\"WoolyMilkcapMushroom\",\"icon\":\"T_Icon_WoolyMilkcapMushroom.png\",\"type\":\"Misc\",\"price\":0,\"germanName\":null},{\"id\":\"f6441a05-7a56-47b7-9adb-370b2349c1b5\",\"name\":\"Chicken\",\"icon\":\"Chicken.png\",\"type\":\"Animal\",\"price\":1000,\"germanName\":null},{\"id\":\"e8814db8-c828-4041-aa68-deb3e600c48c\",\"name\":\"Chick\",\"icon\":\"Chick.png\",\"type\":\"Animal\",\"price\":500,\"germanName\":null},{\"id\":\"bb96226e-0fa8-4e79-9fb1-fbb55e35c9e4\",\"name\":\"Female Goat\",\"icon\":\"Female Goat.png\",\"type\":\"Animal\",\"price\":2500,\"germanName\":null},{\"id\":\"50833df6-c926-404e-a0e5-120bbfc31492\",\"name\":\"Male Goat\",\"icon\":\"Male Goat.png\",\"type\":\"Animal\",\"price\":2000,\"germanName\":null},{\"id\":\"7847a8a3-2a26-4128-9957-ab426aab1692\",\"name\":\"Baby Goat\",\"icon\":\"Baby Goat.png\",\"type\":\"Animal\",\"price\":2000,\"germanName\":null},{\"id\":\"49a73fde-c17a-42ea-9c84-a8f83b6e0ad8\",\"name\":\"Sheep\",\"icon\":\"Sheep.png\",\"type\":\"Animal\",\"price\":3000,\"germanName\":null},{\"id\":\"34d7df2e-826c-45c8-a425-968493b5792e\",\"name\":\"Ram\",\"icon\":\"Ram.png\",\"type\":\"Animal\",\"price\":3500,\"germanName\":null},{\"id\":\"6c24ecac-79b2-4bd8-afa6-d0a0c131cb27\",\"name\":\"Lamb\",\"icon\":\"Lamb.png\",\"type\":\"Animal\",\"price\":2500,\"germanName\":null},{\"id\":\"94539219-0769-4751-807d-ae6a3b970104\",\"name\":\"Cow\",\"icon\":\"Cow.png\",\"type\":\"Animal\",\"price\":5000,\"germanName\":null},{\"id\":\"ca6619ea-15e3-4865-a64e-80f4b9ef5061\",\"name\":\"Calf\",\"icon\":\"Calf.png\",\"type\":\"Animal\",\"price\":4500,\"germanName\":null},{\"id\":\"48497c6c-c70a-420b-b3b6-99e162dd5b01\",\"name\":\"Goose\",\"icon\":\"Goose.png\",\"type\":\"Animal\",\"price\":2000,\"germanName\":null},{\"id\":\"32da2582-a6d8-4e86-838e-ed360245e749\",\"name\":\"Gosling\",\"icon\":\"Gosling.png\",\"type\":\"Animal\",\"price\":1500,\"germanName\":null},{\"id\":\"a7073dc4-ac0d-498c-a9b2-1fc7a9aaf886\",\"name\":\"Pig\",\"icon\":\"Pig.png\",\"type\":\"Animal\",\"price\":1500,\"germanName\":null},{\"id\":\"b53af268-4656-431b-be6e-760a883e403b\",\"name\":\"Piglet\",\"icon\":\"Piglet.png\",\"type\":\"Animal\",\"price\":1000,\"germanName\":null}]");

/***/ }),

/***/ "K0YA":
/*!****************************************************!*\
  !*** ./src/app/map-marker/map-marker.component.ts ***!
  \****************************************************/
/*! exports provided: MapMarkerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMarkerComponent", function() { return MapMarkerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _map_marker_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map-marker-base-component */ "VVD3");
/* harmony import */ var _map_marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map-marker */ "6eRS");
/* harmony import */ var _map_marker_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map-marker-storage */ "4fYT");
/* harmony import */ var _map_marker_filter_map_marker_filter_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../map-marker-filter/map-marker-filter.controller */ "NYQO");
/* harmony import */ var _map_marker_editor_map_marker_editor_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../map-marker-editor/map-marker-editor.controller */ "7+NT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");










function MapMarkerComponent_div_0_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapMarkerComponent_div_0_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r2.onDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", ctx_r1.width / 2 - 20, "px");
} }
function MapMarkerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapMarkerComponent_div_0_button_1_Template, 3, 2, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx_r0.getImageSrcUrl(ctx_r0.mapMarker.type))("width", ctx_r0.width, "px")("height", ctx_r0.height, "px")("left", ctx_r0.mapMarker.origin.x - ctx_r0.width / 2, "px")("top", ctx_r0.mapMarker.origin.y - ctx_r0.height / 2, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isEditMode);
} }
class MapMarkerComponent extends _map_marker_base_component__WEBPACK_IMPORTED_MODULE_1__["MapMarkerBaseComponent"] {
    constructor(mapMarker, mapMarkerStorage, mapMarkerFilterController, mapMarkerEditorController) {
        super(mapMarker, mapMarkerStorage, mapMarkerFilterController, mapMarkerEditorController);
        super.width = 264;
        super.height = 264;
    }
    ngOnDestroy() {
        super.OnDestroy();
    }
    ngOnInit() {
        super.OnInit();
    }
}
MapMarkerComponent.ɵfac = function MapMarkerComponent_Factory(t) { return new (t || MapMarkerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_marker__WEBPACK_IMPORTED_MODULE_2__["MapMarker"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_marker_storage__WEBPACK_IMPORTED_MODULE_3__["MapMarkerStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_marker_filter_map_marker_filter_controller__WEBPACK_IMPORTED_MODULE_4__["MapMarkerFilterController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_marker_editor_map_marker_editor_controller__WEBPACK_IMPORTED_MODULE_5__["MapMarkerEditorController"])); };
MapMarkerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapMarkerComponent, selectors: [["app-map-marker"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "no-select", "style", "position: absolute; background-size: 100% 100%;", 3, "backgroundImage", "width", "height", "left", "top", 4, "ngIf"], [1, "no-select", 2, "position", "absolute", "background-size", "100% 100%"], ["class", "no-select", "mat-mini-fab", "", "aria-label", "Remove Map Marker", 3, "marginLeft", "click", 4, "ngIf"], ["mat-mini-fab", "", "aria-label", "Remove Map Marker", 1, "no-select", 3, "click"]], template: function MapMarkerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MapMarkerComponent_div_0_Template, 2, 11, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC1tYXJrZXIvbWFwLW1hcmtlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapMarkerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map-marker',
                templateUrl: './map-marker.component.html',
                styleUrls: ['./map-marker.component.scss']
            }]
    }], function () { return [{ type: _map_marker__WEBPACK_IMPORTED_MODULE_2__["MapMarker"] }, { type: _map_marker_storage__WEBPACK_IMPORTED_MODULE_3__["MapMarkerStorage"] }, { type: _map_marker_filter_map_marker_filter_controller__WEBPACK_IMPORTED_MODULE_4__["MapMarkerFilterController"] }, { type: _map_marker_editor_map_marker_editor_controller__WEBPACK_IMPORTED_MODULE_5__["MapMarkerEditorController"] }]; }, null); })();


/***/ }),

/***/ "Ktjj":
/*!******************************************************!*\
  !*** ./src/app/kv-storage/local-storage-provider.ts ***!
  \******************************************************/
/*! exports provided: LocalStorageProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageProvider", function() { return LocalStorageProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ik_storage_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ik-storage-provider */ "h2st");




class LocalStorageProvider extends _ik_storage_provider__WEBPACK_IMPORTED_MODULE_2__["KVStorageProvider"] {
    store(key, data) {
        window.localStorage.setItem(key, JSON.stringify(data));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])([true]);
    }
    load(key, defaultValue) {
        let rval = defaultValue;
        try {
            const raw = window.localStorage.getItem(key);
            if (raw !== null) {
                rval = JSON.parse(window.localStorage.getItem(key));
            }
        }
        catch (error) {
            console.log(error);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])([rval]);
    }
}
LocalStorageProvider.ɵfac = function LocalStorageProvider_Factory(t) { return ɵLocalStorageProvider_BaseFactory(t || LocalStorageProvider); };
LocalStorageProvider.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageProvider, factory: LocalStorageProvider.ɵfac, providedIn: 'root' });
const ɵLocalStorageProvider_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](LocalStorageProvider);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageProvider, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "MBtR":
/*!**************************************************************!*\
  !*** ./src/app/map-marker-city/map-marker-city.component.ts ***!
  \**************************************************************/
/*! exports provided: MapMarkerCityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMarkerCityComponent", function() { return MapMarkerCityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _map_marker_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map-marker-base-component */ "VVD3");
/* harmony import */ var _map_marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map-marker */ "6eRS");
/* harmony import */ var _map_marker_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map-marker-storage */ "4fYT");
/* harmony import */ var _map_marker_filter_map_marker_filter_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../map-marker-filter/map-marker-filter.controller */ "NYQO");
/* harmony import */ var _map_marker_editor_map_marker_editor_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../map-marker-editor/map-marker-editor.controller */ "7+NT");
/* harmony import */ var _static_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static-data */ "0Njw");
/* harmony import */ var _city_detail_dialog_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../city-detail-dialog-provider */ "skpA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");












function MapMarkerCityComponent_div_0_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapMarkerCityComponent_div_0_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r2.onDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", ctx_r1.width - 20, "px");
} }
function MapMarkerCityComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapMarkerCityComponent_div_0_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.dialogProvider.showCityDialog(ctx_r4.city); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MapMarkerCityComponent_div_0_button_4_Template, 3, 2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(assets/markers/city_marker.png)")("width", ctx_r0.width, "px")("height", ctx_r0.height, "px")("left", ctx_r0.mapMarker.origin.x - ctx_r0.width / 2, "px")("top", ctx_r0.mapMarker.origin.y - ctx_r0.height / 2, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.city.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isEditMode);
} }
class MapMarkerCityComponent extends _map_marker_base_component__WEBPACK_IMPORTED_MODULE_1__["MapMarkerBaseComponent"] {
    constructor(mapMarker, mapMarkerStorage, mapMarkerFilterController, mapMarkerEditorController, city, dialogProvider) {
        super(mapMarker, mapMarkerStorage, mapMarkerFilterController, mapMarkerEditorController);
        this.city = city;
        this.dialogProvider = dialogProvider;
        super.width = 512;
        super.height = 91;
    }
    ngOnDestroy() {
        super.OnDestroy();
    }
    ngOnInit() {
        super.OnInit();
    }
}
MapMarkerCityComponent.ɵfac = function MapMarkerCityComponent_Factory(t) { return new (t || MapMarkerCityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_marker__WEBPACK_IMPORTED_MODULE_2__["MapMarker"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_marker_storage__WEBPACK_IMPORTED_MODULE_3__["MapMarkerStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_marker_filter_map_marker_filter_controller__WEBPACK_IMPORTED_MODULE_4__["MapMarkerFilterController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_marker_editor_map_marker_editor_controller__WEBPACK_IMPORTED_MODULE_5__["MapMarkerEditorController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_static_data__WEBPACK_IMPORTED_MODULE_6__["City"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_city_detail_dialog_provider__WEBPACK_IMPORTED_MODULE_7__["CityDetailDialogProvider"])); };
MapMarkerCityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapMarkerCityComponent, selectors: [["app-map-marker-city"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "no-select map-marker-city", 3, "backgroundImage", "width", "height", "left", "top", 4, "ngIf"], [1, "no-select", "map-marker-city"], [1, "no-select", "map-marker-city__marker-title"], [2, "cursor", "pointer", 3, "click"], ["class", "no-select", "mat-mini-fab", "", "aria-label", "Remove Map Marker", 3, "marginLeft", "click", 4, "ngIf"], ["mat-mini-fab", "", "aria-label", "Remove Map Marker", 1, "no-select", 3, "click"]], template: function MapMarkerCityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MapMarkerCityComponent_div_0_Template, 5, 12, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"]], styles: [".map-marker-city[_ngcontent-%COMP%] {\n  position: absolute;\n  background-size: 100% 100%;\n}\n\n.map-marker-city__marker-title[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLW1hcmtlci1jaXR5L21hcC1tYXJrZXItY2l0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL21hcC1tYXJrZXItY2l0eS9tYXAtbWFya2VyLWNpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLW1hcmtlci1jaXR5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuLm1hcC1tYXJrZXItY2l0eV9fbWFya2VyLXRpdGxlIHtcclxuICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapMarkerCityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map-marker-city',
                templateUrl: './map-marker-city.component.html',
                styleUrls: ['./map-marker-city.component.scss']
            }]
    }], function () { return [{ type: _map_marker__WEBPACK_IMPORTED_MODULE_2__["MapMarker"] }, { type: _map_marker_storage__WEBPACK_IMPORTED_MODULE_3__["MapMarkerStorage"] }, { type: _map_marker_filter_map_marker_filter_controller__WEBPACK_IMPORTED_MODULE_4__["MapMarkerFilterController"] }, { type: _map_marker_editor_map_marker_editor_controller__WEBPACK_IMPORTED_MODULE_5__["MapMarkerEditorController"] }, { type: _static_data__WEBPACK_IMPORTED_MODULE_6__["City"] }, { type: _city_detail_dialog_provider__WEBPACK_IMPORTED_MODULE_7__["CityDetailDialogProvider"] }]; }, null); })();


/***/ }),

/***/ "MhYp":
/*!******************************************************!*\
  !*** ./src/app/city-detail/city-detail.component.ts ***!
  \******************************************************/
/*! exports provided: CityDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityDetailComponent", function() { return CityDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _goods_items_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../goods-items.pipe */ "ipA5");








function CityDetailComponent_div_3_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 16);
} }
function CityDetailComponent_div_3_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.icon, " ");
} }
function CityDetailComponent_div_3_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CityDetailComponent_div_3_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.name, " ");
} }
function CityDetailComponent_div_3_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CityDetailComponent_div_3_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.type, " ");
} }
function CityDetailComponent_div_3_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CityDetailComponent_div_3_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.price, " ");
} }
function CityDetailComponent_div_3_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
function CityDetailComponent_div_3_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
function CityDetailComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Animals");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "goodsToItems");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CityDetailComponent_div_3_th_6_Template, 1, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CityDetailComponent_div_3_td_7_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CityDetailComponent_div_3_th_9_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CityDetailComponent_div_3_td_10_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CityDetailComponent_div_3_th_12_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CityDetailComponent_div_3_td_13_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CityDetailComponent_div_3_th_15_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CityDetailComponent_div_3_td_16_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CityDetailComponent_div_3_tr_17_Template, 1, 0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CityDetailComponent_div_3_tr_18_Template, 1, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx_r0.data.city.goods));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.goodsDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r0.goodsDisplayedColumns);
} }
function CityDetailComponent_div_4_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CityDetailComponent_div_4_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r24.name, " ");
} }
function CityDetailComponent_div_4_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CityDetailComponent_div_4_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r25.price, " ");
} }
function CityDetailComponent_div_4_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
function CityDetailComponent_div_4_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
function CityDetailComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "goodsToItems");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CityDetailComponent_div_4_th_6_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CityDetailComponent_div_4_td_7_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CityDetailComponent_div_4_th_9_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CityDetailComponent_div_4_td_10_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CityDetailComponent_div_4_tr_11_Template, 1, 0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CityDetailComponent_div_4_tr_12_Template, 1, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r17 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r17.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, person_r17.goods));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.goodsDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r1.goodsDisplayedColumns);
} }
class CityDetailComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.goodsDisplayedColumns = ['name', 'price'];
    }
    ngOnInit() {
    }
}
CityDetailComponent.ɵfac = function CityDetailComponent_Factory(t) { return new (t || CityDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
CityDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CityDetailComponent, selectors: [["app-city-detail"]], decls: 8, vars: 3, consts: [["mat-dialog-title", ""], [1, "city-detail__content", "scrollbar-primary"], ["class", "city-detail__data", 4, "ngIf"], ["class", "city-detail__data", 4, "ngFor", "ngForOf"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], [1, "city-detail__data"], ["mat-table", "", 1, "city-detail__goods-table", "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "icon"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "type"], ["matColumnDef", "price"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function CityDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CityDetailComponent_div_3_Template, 19, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CityDetailComponent_div_4_Template, 13, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.city.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.city.goods.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.persons);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], pipes: [_goods_items_pipe__WEBPACK_IMPORTED_MODULE_5__["GoodsToItemsPipe"]], styles: ["[_nghost-%COMP%] {\n  background-color: #303030;\n}\n\n.city-detail__goods-table[_ngcontent-%COMP%] {\n  min-width: 600px;\n}\n\n.city-detail__content[_ngcontent-%COMP%] {\n  padding: 1px 24px;\n  min-width: 600px;\n  max-height: 600px;\n}\n\n.city-detail__data[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\n.city-detail__data[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  margin: 8px;\n}\n\n.mat-column-name[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.mat-column-price[_ngcontent-%COMP%] {\n  width: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2l0eS1kZXRhaWwvY2l0eS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7QUFHRjs7QUFERTtFQUNFLFdBQUE7QUFHSjs7QUFDQTtFQUNFLFVBQUE7QUFFRjs7QUFBQTtFQUNFLFVBQUE7QUFHRiIsImZpbGUiOiJzcmMvYXBwL2NpdHktZGV0YWlsL2NpdHktZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XHJcbn1cclxuXHJcbi5jaXR5LWRldGFpbF9fZ29vZHMtdGFibGUge1xyXG4gIG1pbi13aWR0aDogNjAwcHg7XHJcbn1cclxuLmNpdHktZGV0YWlsX19jb250ZW50IHtcclxuICBwYWRkaW5nOiAxcHggMjRweDtcclxuICBtaW4td2lkdGg6IDYwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG59XHJcbi5jaXR5LWRldGFpbF9fZGF0YSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuXHJcbiAgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLW5hbWUge1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuLm1hdC1jb2x1bW4tcHJpY2Uge1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CityDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-city-detail',
                templateUrl: './city-detail.component.html',
                styleUrls: ['./city-detail.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "NYQO":
/*!*******************************************************************!*\
  !*** ./src/app/map-marker-filter/map-marker-filter.controller.ts ***!
  \*******************************************************************/
/*! exports provided: MapMarkerFilterController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMarkerFilterController", function() { return MapMarkerFilterController; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);



class MapMarkerFilterController {
    constructor() {
        this.eventFilterSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._last = [];
    }
    emit(types) {
        this._last = types;
        this.eventFilterSelected.emit(types);
    }
    update() {
        this.emit(this._last);
    }
    getFilter() {
        return this._last;
    }
    ensureEnabled(type) {
        if (!lodash__WEBPACK_IMPORTED_MODULE_1__["some"](this._last, t => t === type)) {
            this._last.push(type);
            this.update();
        }
    }
}
MapMarkerFilterController.ɵfac = function MapMarkerFilterController_Factory(t) { return new (t || MapMarkerFilterController)(); };
MapMarkerFilterController.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapMarkerFilterController, factory: MapMarkerFilterController.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapMarkerFilterController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_panzoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-panzoom */ "PrDT");
/* harmony import */ var _map_marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-marker */ "6eRS");
/* harmony import */ var _map_marker_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-marker-type.enum */ "fQet");
/* harmony import */ var _map_marker_map_marker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-marker/map-marker.component */ "K0YA");
/* harmony import */ var _map_marker_city_map_marker_city_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-marker-city/map-marker-city.component */ "MBtR");
/* harmony import */ var _static_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./static-data */ "0Njw");
/* harmony import */ var _map_marker_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map-marker-storage */ "4fYT");
/* harmony import */ var _map_marker_filter_map_marker_filter_controller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./map-marker-filter/map-marker-filter.controller */ "NYQO");
/* harmony import */ var _map_api_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map-api-provider */ "acz1");
/* harmony import */ var _map_marker_editor_map_marker_editor_controller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./map-marker-editor/map-marker-editor.controller */ "7+NT");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./menu-bar/menu-bar.component */ "ESw6");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _map_marker_filter_map_marker_filter_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./map-marker-filter/map-marker-filter.component */ "p2HV");
/* harmony import */ var _city_jumper_city_jumper_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./city-jumper/city-jumper.component */ "uYdk");
/* harmony import */ var _map_marker_editor_map_marker_editor_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./map-marker-editor/map-marker-editor.component */ "HObr");























function AppComponent_div_20_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function AppComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_20_ng_container_1_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const marker_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngComponentOutlet", marker_r2.component)("ngComponentOutletInjector", marker_r2.injector);
} }
class AppComponent {
    constructor(injector, _mapMarkerStorage, _mapMarkerFilterController, _mapApiProvider, _mapMarkerEditorController, _cityData) {
        this.injector = injector;
        this._mapMarkerStorage = _mapMarkerStorage;
        this._mapMarkerFilterController = _mapMarkerFilterController;
        this._mapApiProvider = _mapApiProvider;
        this._mapMarkerEditorController = _mapMarkerEditorController;
        this._cityData = _cityData;
        this.title = 'MedievalDynastyMap';
        this.panZoomConfigOptions = {
            zoomLevels: 12,
            neutralZoomLevel: 5,
            scalePerZoomLevel: 1.5,
            freeMouseWheel: false,
            invertMouseWheel: true,
            zoomButtonIncrement: 0.4,
            dynamicContentDimensions: true,
            zoomOnDoubleClick: false,
            initialZoomToFit: { x: 3870, y: 2946.7, width: window.innerWidth * 1.8, height: window.innerHeight * 1.8 }
        };
        this.panZoomConfig = new ngx_panzoom__WEBPACK_IMPORTED_MODULE_1__["PanZoomConfig"](this.panZoomConfigOptions);
        this.mapMarkers = [];
        this.isEditorOpen = false;
        this._markerStorageAddedSubscription = _mapMarkerStorage.addedEvent.subscribe((marker) => this.addMapMarker(marker));
        this._markerStorageRemovedSubscription = _mapMarkerStorage.removedEvent.subscribe((marker) => this.removeMapMarker(marker));
    }
    ngOnInit() {
        this.apiSubscription = this.panZoomConfig.api.subscribe((api) => {
            this._mapApiProvider.setApi(api);
        });
        this._mapMarkerStorage.load();
    }
    center() {
        this._mapApiProvider.centerContent();
    }
    onDoubleClick(event) {
        const origin = { x: event.offsetX, y: event.offsetY };
        this._mapMarkerEditorController.eventOnCreateMapMarker.emit(origin);
    }
    getComponentTypeByMapMarkerType(type) {
        switch (type) {
            case _map_marker_type_enum__WEBPACK_IMPORTED_MODULE_3__["MapMarkerType"].CITY:
                return _map_marker_city_map_marker_city_component__WEBPACK_IMPORTED_MODULE_5__["MapMarkerCityComponent"];
            default:
                return _map_marker_map_marker_component__WEBPACK_IMPORTED_MODULE_4__["MapMarkerComponent"];
        }
    }
    addMapMarker(mapMarker) {
        this.mapMarkers.push(this.createMapMarkerContainer(mapMarker));
    }
    removeMapMarker(mapMarker) {
        const i = this.mapMarkers.findIndex(container => container.mapMarker.id == mapMarker.id);
        this.mapMarkers.splice(i, 1);
    }
    removeAllMapMarker() {
        this.mapMarkers = [];
    }
    createMapMarkerContainer(mapMarker) {
        const providers = [
            { provide: _map_marker__WEBPACK_IMPORTED_MODULE_2__["MapMarker"], useValue: mapMarker }
        ];
        let component = _map_marker_map_marker_component__WEBPACK_IMPORTED_MODULE_4__["MapMarkerComponent"];
        switch (mapMarker.type) {
            case _map_marker_type_enum__WEBPACK_IMPORTED_MODULE_3__["MapMarkerType"].CITY:
                component = _map_marker_city_map_marker_city_component__WEBPACK_IMPORTED_MODULE_5__["MapMarkerCityComponent"];
                console.log(mapMarker.payloadId);
                providers.push({ provide: _static_data__WEBPACK_IMPORTED_MODULE_6__["City"], useValue: this._cityData.cities.find(city => city.id == mapMarker.payloadId) });
                break;
            default: break;
        }
        let markerContainer = {
            component,
            mapMarker,
            injector: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({
                providers,
                parent: this.injector
            })
        };
        return markerContainer;
    }
    getMapMarkers(markerContainers) {
        const markers = [];
        for (const marker of markerContainers) {
            markers.push(marker.mapMarker);
        }
        return markers;
    }
    getCities() {
        return this.mapMarkers
            .filter(container => container.mapMarker.type == _map_marker_type_enum__WEBPACK_IMPORTED_MODULE_3__["MapMarkerType"].CITY)
            .map(container => container.mapMarker);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_marker_storage__WEBPACK_IMPORTED_MODULE_7__["MapMarkerStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_marker_filter_map_marker_filter_controller__WEBPACK_IMPORTED_MODULE_8__["MapMarkerFilterController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_api_provider__WEBPACK_IMPORTED_MODULE_9__["MapApiProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_marker_editor_map_marker_editor_controller__WEBPACK_IMPORTED_MODULE_10__["MapMarkerEditorController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_static_data__WEBPACK_IMPORTED_MODULE_6__["CityData"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 45, vars: 5, consts: [[1, "map__burger-bar-container"], ["mat-icon-button", "", "aria-label", "Toggle Menu", 3, "click"], [1, "flex-spacer"], ["href", "https://github.com/naice/MedievalDynastyMap", "target", "_blank", "mat-icon-button", ""], ["href", "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KXGFDMWVS8E66", "target", "_blank", "mat-icon-button", ""], [1, "map__container"], [1, "map__wrappper"], [3, "config"], [2, "position", "relative"], ["src", "assets/T_Map_Render.jpg", 1, "no-select", 3, "dblclick"], [4, "ngFor", "ngForOf"], [1, "map__signature"], [2, "color", "red"], [1, "", 3, "isOpen"], ["menuBar", ""], [3, "mapMarkers"], [3, "opened", "closed"], [3, "isEditorEnabled"], [4, "ngComponentOutlet", "ngComponentOutletInjector"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29); return _r1.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Medieval Dynasty Map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "attach_money");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "pan-zoom", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function AppComponent_Template_img_dblclick_19_listener($event) { return ctx.onDoubleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppComponent_div_20_Template, 2, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "made with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " by Emmuss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "app-menu-bar", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Map Filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-map-marker-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Cities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-city-jumper", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-expansion-panel", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function AppComponent_Template_mat_expansion_panel_opened_41_listener() { return ctx.isEditorOpen = true; })("closed", function AppComponent_Template_mat_expansion_panel_closed_41_listener() { return ctx.isEditorOpen = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Editor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-map-marker-editor", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.panZoomConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mapMarkers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isOpen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mapMarkers", ctx.getCities());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isEditorEnabled", ctx.isEditorOpen);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatAnchor"], ngx_panzoom__WEBPACK_IMPORTED_MODULE_1__["PanZoomComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_15__["MenuBarComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanelTitle"], _map_marker_filter_map_marker_filter_component__WEBPACK_IMPORTED_MODULE_17__["MapMarkerFilterComponent"], _city_jumper_city_jumper_component__WEBPACK_IMPORTED_MODULE_18__["CityJumperComponent"], _map_marker_editor_map_marker_editor_component__WEBPACK_IMPORTED_MODULE_19__["MapMarkerEditorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgComponentOutlet"]], styles: [".map__burger-bar-container[_ngcontent-%COMP%] {\n  height: 64px;\n  width: 100%;\n}\n.map__burger-bar-container[_ngcontent-%COMP%]   .flex-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.map__content-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.map__container[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 64px;\n  right: 0;\n  bottom: 0;\n  background-color: black;\n}\n.map__wrappper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: black;\n}\n.map__overlay[_ngcontent-%COMP%] {\n  background: no-repeat;\n  background-size: 100% 100%;\n  pointer-events: none;\n}\n.map__signature[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 14pt;\n  bottom: 16px;\n  right: 16px;\n  text-align: center;\n  display: inline-flex;\n  vertical-align: middle;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0MsWUFBQTtFQUNBLFdBQUE7QUFDRjtBQUNFO0VBQ0UsY0FBQTtBQUNKO0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBQUVGO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBRUY7QUFBQTtFQUNFLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtBQUdGO0FBQUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBR0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLm1hcF9fYnVyZ2VyLWJhci1jb250YWluZXIge1xyXG4gIGhlaWdodDogNjRweDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLmZsZXgtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxufVxyXG4ubWFwX19jb250ZW50LXdyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4ubWFwX19jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogNjRweDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5tYXBfX3dyYXBwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuLm1hcF9fb3ZlcmxheSB7XHJcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4ubWFwX19zaWduYXR1cmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDE0cHQ7XHJcbiAgYm90dG9tOiAxNnB4O1xyXG4gIHJpZ2h0OiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _map_marker_storage__WEBPACK_IMPORTED_MODULE_7__["MapMarkerStorage"] }, { type: _map_marker_filter_map_marker_filter_controller__WEBPACK_IMPORTED_MODULE_8__["MapMarkerFilterController"] }, { type: _map_api_provider__WEBPACK_IMPORTED_MODULE_9__["MapApiProvider"] }, { type: _map_marker_editor_map_marker_editor_controller__WEBPACK_IMPORTED_MODULE_10__["MapMarkerEditorController"] }, { type: _static_data__WEBPACK_IMPORTED_MODULE_6__["CityData"] }]; }, null); })();


/***/ }),

/***/ "T5Pe":
/*!********************************************************!*\
  !*** ./src/app/upload-image/upload-image.component.ts ***!
  \********************************************************/
/*! exports provided: UploadImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadImageComponent", function() { return UploadImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-uuid */ "o9EK");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_1__);



const _c0 = ["imgRenderer"];
class UploadImageComponent {
    ngOnInit() {
    }
    onPaste(event) {
        const items = event.clipboardData.items;
        for (const item of items) {
            if (item.type.indexOf('image') !== 0) {
                continue;
            }
            this.uploadedImageBlob = item.getAsFile();
        }
        if (this.uploadedImageBlob === null) {
            return;
        }
        const guid = angular2_uuid__WEBPACK_IMPORTED_MODULE_1__["UUID"].UUID();
        const fileFromBlob = new File([this.uploadedImageBlob], `/assets/${guid}.jpg`);
        const reader = new FileReader();
        reader.onload = (evt) => {
            this.imgRenderer.nativeElement.src = evt.target.result;
        };
        reader.readAsDataURL(this.uploadedImageBlob);
    }
}
UploadImageComponent.ɵfac = function UploadImageComponent_Factory(t) { return new (t || UploadImageComponent)(); };
UploadImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadImageComponent, selectors: [["app-upload-image"]], viewQuery: function UploadImageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imgRenderer = _t.first);
    } }, decls: 5, vars: 0, consts: [[1, "container", 3, "paste"], ["imgRenderer", ""]], template: function UploadImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paste", function UploadImageComponent_Template_div_paste_0_listener($event) { return ctx.onPaste($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "upload image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC1pbWFnZS91cGxvYWQtaW1hZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-upload-image',
                templateUrl: './upload-image.component.html',
                styleUrls: ['./upload-image.component.scss']
            }]
    }], null, { imgRenderer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['imgRenderer']
        }] }); })();


/***/ }),

/***/ "VVD3":
/*!**********************************************!*\
  !*** ./src/app/map-marker-base-component.ts ***!
  \**********************************************/
/*! exports provided: MapMarkerBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMarkerBaseComponent", function() { return MapMarkerBaseComponent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _map_marker_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-marker-type.enum */ "fQet");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");



class MapMarkerBaseComponent extends _map_marker_type_enum__WEBPACK_IMPORTED_MODULE_1__["MapMarkerTypeResource"] {
    constructor(mapMarker, _mapMarkerStorage, _mapMarkerFilterController, _mapMarkerEditorController) {
        super();
        this.mapMarker = mapMarker;
        this._mapMarkerStorage = _mapMarkerStorage;
        this._mapMarkerFilterController = _mapMarkerFilterController;
        this._mapMarkerEditorController = _mapMarkerEditorController;
        this.width = 264;
        this.height = 264;
        this.visible = true;
        this.isEditMode = false;
        this._subscriptions = [];
    }
    OnDestroy() {
        this._subscriptions.forEach(sub => sub.unsubscribe());
    }
    OnInit() {
        this._subscriptions.push(this._mapMarkerFilterController.eventFilterSelected.subscribe((types) => this.applyFilter(types)));
        this._subscriptions.push(this._mapMarkerEditorController.eventOnChangeEditMode.subscribe((isEditMode) => this.applyEditMode(isEditMode)));
        this.applyEditMode(this._mapMarkerEditorController.isEditMode);
        this.applyFilter(this._mapMarkerFilterController.getFilter());
    }
    applyEditMode(isEditMode) {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production && this.mapMarker.type == _map_marker_type_enum__WEBPACK_IMPORTED_MODULE_1__["MapMarkerType"].CITY) {
            // users should not be able to delete / edit cities for now.
            return;
        }
        this.isEditMode = isEditMode;
    }
    applyFilter(types) {
        const vis = lodash__WEBPACK_IMPORTED_MODULE_0__["some"](types, marker => this.mapMarker.type === marker);
        if (this.visible !== vis) {
            this.visible = vis;
        }
    }
    onDelete() {
        this._mapMarkerStorage.remove(this.mapMarker.id);
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_panzoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-panzoom */ "PrDT");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upload-image/upload-image.component */ "T5Pe");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _map_marker_map_marker_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./map-marker/map-marker.component */ "K0YA");
/* harmony import */ var _map_marker_editor_map_marker_editor_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./map-marker-editor/map-marker-editor.component */ "HObr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _map_marker_filter_map_marker_filter_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./map-marker-filter/map-marker-filter.component */ "p2HV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _map_marker_city_map_marker_city_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./map-marker-city/map-marker-city.component */ "MBtR");
/* harmony import */ var _city_jumper_city_jumper_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./city-jumper/city-jumper.component */ "uYdk");
/* harmony import */ var _kv_storage_ik_storage_provider__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./kv-storage/ik-storage-provider */ "h2st");
/* harmony import */ var _kv_storage_kv_storage_provider_factory__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./kv-storage/kv-storage-provider-factory */ "AU7N");
/* harmony import */ var _menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./menu-bar/menu-bar.component */ "ESw6");
/* harmony import */ var _city_detail_city_detail_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./city-detail/city-detail.component */ "MhYp");
/* harmony import */ var _goods_items_pipe__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./goods-items.pipe */ "ipA5");






//Angular Material Components












































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _kv_storage_ik_storage_provider__WEBPACK_IMPORTED_MODULE_44__["KVStorageProvider"], useFactory: _kv_storage_kv_storage_provider_factory__WEBPACK_IMPORTED_MODULE_45__["KVStorageProviderFactory"], deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_41__["HttpClient"]] }
    ], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_39__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_41__["HttpClientModule"],
            ngx_panzoom__WEBPACK_IMPORTED_MODULE_3__["NgxPanZoomModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            // Material Components
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__["MatTabsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__["MatButtonToggleModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_33__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_35__["MatPaginatorModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatRippleModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_5__["UploadImageComponent"],
        _map_marker_map_marker_component__WEBPACK_IMPORTED_MODULE_37__["MapMarkerComponent"],
        _map_marker_editor_map_marker_editor_component__WEBPACK_IMPORTED_MODULE_38__["MapMarkerEditorComponent"],
        _map_marker_filter_map_marker_filter_component__WEBPACK_IMPORTED_MODULE_40__["MapMarkerFilterComponent"],
        _map_marker_city_map_marker_city_component__WEBPACK_IMPORTED_MODULE_42__["MapMarkerCityComponent"],
        _city_jumper_city_jumper_component__WEBPACK_IMPORTED_MODULE_43__["CityJumperComponent"],
        _menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_46__["MenuBarComponent"],
        _city_detail_city_detail_component__WEBPACK_IMPORTED_MODULE_47__["CityDetailComponent"],
        _goods_items_pipe__WEBPACK_IMPORTED_MODULE_48__["GoodsToItemsPipe"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_39__["FormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_41__["HttpClientModule"],
        ngx_panzoom__WEBPACK_IMPORTED_MODULE_3__["NgxPanZoomModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        // Material Components
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__["MatTabsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_33__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_35__["MatPaginatorModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatRippleModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_5__["UploadImageComponent"],
                    _map_marker_map_marker_component__WEBPACK_IMPORTED_MODULE_37__["MapMarkerComponent"],
                    _map_marker_editor_map_marker_editor_component__WEBPACK_IMPORTED_MODULE_38__["MapMarkerEditorComponent"],
                    _map_marker_filter_map_marker_filter_component__WEBPACK_IMPORTED_MODULE_40__["MapMarkerFilterComponent"],
                    _map_marker_city_map_marker_city_component__WEBPACK_IMPORTED_MODULE_42__["MapMarkerCityComponent"],
                    _city_jumper_city_jumper_component__WEBPACK_IMPORTED_MODULE_43__["CityJumperComponent"],
                    _menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_46__["MenuBarComponent"],
                    _city_detail_city_detail_component__WEBPACK_IMPORTED_MODULE_47__["CityDetailComponent"],
                    _goods_items_pipe__WEBPACK_IMPORTED_MODULE_48__["GoodsToItemsPipe"]
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_39__["FormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_41__["HttpClientModule"],
                    ngx_panzoom__WEBPACK_IMPORTED_MODULE_3__["NgxPanZoomModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    // Material Components
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__["MatTabsModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__["MatButtonToggleModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__["MatChipsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__["MatTooltipModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_33__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_35__["MatPaginatorModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatRippleModule"],
                ],
                providers: [
                    { provide: _kv_storage_ik_storage_provider__WEBPACK_IMPORTED_MODULE_44__["KVStorageProvider"], useFactory: _kv_storage_kv_storage_provider_factory__WEBPACK_IMPORTED_MODULE_45__["KVStorageProviderFactory"], deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_41__["HttpClient"]] }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "acz1":
/*!*************************************!*\
  !*** ./src/app/map-api-provider.ts ***!
  \*************************************/
/*! exports provided: MapApiProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapApiProvider", function() { return MapApiProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MapApiProvider {
    setApi(api) {
        this.api = api;
    }
    navigateToRect(rect) {
        var _a;
        (_a = this.api) === null || _a === void 0 ? void 0 : _a.zoomToFit(Object.assign({}, rect));
    }
    centerContent() {
        var _a;
        (_a = this.api) === null || _a === void 0 ? void 0 : _a.centerContent();
    }
}
MapApiProvider.ɵfac = function MapApiProvider_Factory(t) { return new (t || MapApiProvider)(); };
MapApiProvider.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapApiProvider, factory: MapApiProvider.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapApiProvider, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "dkQB":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: MAP_MENU_WIDTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_MENU_WIDTH", function() { return MAP_MENU_WIDTH; });
const MAP_MENU_WIDTH = 376;


/***/ }),

/***/ "ewnM":
/*!*************************************!*\
  !*** ./src/assets/data/cities.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"52393950-1c4c-49c0-8bc2-629ae87d0a28\",\"name\":\"Baranica\",\"goods\":[]},{\"id\":\"493b9fc6-b89a-4ce7-9fb3-ab23eb3246b2\",\"name\":\"Borowo\",\"goods\":[{\"id\":\"f6441a05-7a56-47b7-9adb-370b2349c1b5\",\"price\":1000},{\"id\":\"e8814db8-c828-4041-aa68-deb3e600c48c\",\"price\":500}]},{\"id\":\"6e8b3e82-3216-40b1-aa69-0f51364adf98\",\"name\":\"Branica\",\"goods\":[]},{\"id\":\"c94d0e52-fe5e-4680-b33a-47d171157ab0\",\"name\":\"Denica\",\"goods\":[{\"id\":\"bb96226e-0fa8-4e79-9fb1-fbb55e35c9e4\",\"price\":2500},{\"id\":\"50833df6-c926-404e-a0e5-120bbfc31492\",\"price\":2000},{\"id\":\"7847a8a3-2a26-4128-9957-ab426aab1692\",\"price\":2000},{\"id\":\"49a73fde-c17a-42ea-9c84-a8f83b6e0ad8\",\"price\":3000},{\"id\":\"34d7df2e-826c-45c8-a425-968493b5792e\",\"price\":3500},{\"id\":\"6c24ecac-79b2-4bd8-afa6-d0a0c131cb27\",\"price\":2500}]},{\"id\":\"4d881a69-e7b0-48f9-9ab9-878f2af0038a\",\"name\":\"Jezerica\",\"goods\":[]},{\"id\":\"5d0540f5-c558-4e13-9b19-b6d89aa68161\",\"name\":\"Lesnica\",\"goods\":[]},{\"id\":\"1f5776f8-6c9a-43db-92a2-de1fd63c4111\",\"name\":\"Rolnica\",\"goods\":[{\"id\":\"a7073dc4-ac0d-498c-a9b2-1fc7a9aaf886\",\"price\":1500},{\"id\":\"b53af268-4656-431b-be6e-760a883e403b\",\"price\":1000},{\"id\":\"f6441a05-7a56-47b7-9adb-370b2349c1b5\",\"price\":1000},{\"id\":\"e8814db8-c828-4041-aa68-deb3e600c48c\",\"price\":500}]},{\"id\":\"9920ed4a-8bf7-4174-9456-ce618129f39d\",\"name\":\"Rajmund\",\"goods\":[{\"id\":\"a7073dc4-ac0d-498c-a9b2-1fc7a9aaf886\",\"price\":1500},{\"id\":\"b53af268-4656-431b-be6e-760a883e403b\",\"price\":1000}]},{\"id\":\"9a4b1c3a-0abb-44f8-b3b8-be56e7bec3c5\",\"name\":\"Sambor\",\"goods\":[]},{\"id\":\"c60c7f48-a3bf-4c15-8b34-0843217b25bf\",\"name\":\"Gostovia\",\"goods\":[{\"id\":\"94539219-0769-4751-807d-ae6a3b970104\",\"price\":5000},{\"id\":\"ca6619ea-15e3-4865-a64e-80f4b9ef5061\",\"price\":4500},{\"id\":\"48497c6c-c70a-420b-b3b6-99e162dd5b01\",\"price\":2000},{\"id\":\"32da2582-a6d8-4e86-838e-ed360245e749\",\"price\":1500}]},{\"id\":\"5610feeb-bd1f-4518-a5a6-32af7a778a67\",\"name\":\"Hornica\",\"goods\":[]}]");

/***/ }),

/***/ "fQet":
/*!*****************************************!*\
  !*** ./src/app/map-marker-type.enum.ts ***!
  \*****************************************/
/*! exports provided: MapMarkerType, MapMarkerTypeResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMarkerType", function() { return MapMarkerType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMarkerTypeResource", function() { return MapMarkerTypeResource; });
var MapMarkerType;
(function (MapMarkerType) {
    MapMarkerType["BOAR"] = "Boar";
    MapMarkerType["BEAR"] = "Bear";
    MapMarkerType["DOE"] = "Doe";
    MapMarkerType["BUCK"] = "Buck";
    MapMarkerType["WOLF"] = "Wolf";
    MapMarkerType["RABBIT"] = "Rabbit";
    MapMarkerType["FOX"] = "Fox";
    MapMarkerType["WISENT"] = "Wisent";
    MapMarkerType["CAVE"] = "Cave";
    MapMarkerType["CLAY_DEPOSIT"] = "Clay Deposit";
    MapMarkerType["CITY"] = "City";
    //PERSON = "Person",
})(MapMarkerType || (MapMarkerType = {}));
class MapMarkerTypeResource {
    getImageSrc(type) {
        return `assets/markers/${type}.png`.toLowerCase();
    }
    getImageSrcUrl(type) {
        return `url("${this.getImageSrc(type)}")`;
    }
}


/***/ }),

/***/ "h2st":
/*!***************************************************!*\
  !*** ./src/app/kv-storage/ik-storage-provider.ts ***!
  \***************************************************/
/*! exports provided: KVStorageProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KVStorageProvider", function() { return KVStorageProvider; });
class KVStorageProvider {
}


/***/ }),

/***/ "ipA5":
/*!*************************************!*\
  !*** ./src/app/goods-items.pipe.ts ***!
  \*************************************/
/*! exports provided: GoodsToItemsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsToItemsPipe", function() { return GoodsToItemsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _static_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static-data */ "0Njw");



class GoodsToItemsPipe {
    constructor(_itemData) {
        this._itemData = _itemData;
    }
    transform(value) {
        return value.map(good => {
            const item = Object.assign({}, this._itemData.getItemByGood(good));
            item.price = good.price;
            return item;
        });
    }
}
GoodsToItemsPipe.ɵfac = function GoodsToItemsPipe_Factory(t) { return new (t || GoodsToItemsPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_static_data__WEBPACK_IMPORTED_MODULE_1__["ItemData"])); };
GoodsToItemsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "goodsToItems", type: GoodsToItemsPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoodsToItemsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'goodsToItems'
            }]
    }], function () { return [{ type: _static_data__WEBPACK_IMPORTED_MODULE_1__["ItemData"] }]; }, null); })();


/***/ }),

/***/ "p2HV":
/*!******************************************************************!*\
  !*** ./src/app/map-marker-filter/map-marker-filter.component.ts ***!
  \******************************************************************/
/*! exports provided: MapMarkerFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMarkerFilterComponent", function() { return MapMarkerFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _map_marker_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map-marker-type.enum */ "fQet");
/* harmony import */ var _kv_storage_local_storage_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kv-storage/local-storage-provider */ "Ktjj");
/* harmony import */ var _map_marker_filter_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-marker-filter.controller */ "NYQO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function MapMarkerFilterComponent_mat_list_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const markerType_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", markerType_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.getImageSrc(markerType_r1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](markerType_r1);
} }
class MapMarkerFilterComponent extends _map_marker_type_enum__WEBPACK_IMPORTED_MODULE_1__["MapMarkerTypeResource"] {
    constructor(_storageProvider, _mapMarkerFilterController) {
        super();
        this._storageProvider = _storageProvider;
        this._mapMarkerFilterController = _mapMarkerFilterController;
        this.mapMarkerTypes = Object.keys(_map_marker_type_enum__WEBPACK_IMPORTED_MODULE_1__["MapMarkerType"]).map(k => _map_marker_type_enum__WEBPACK_IMPORTED_MODULE_1__["MapMarkerType"][k]);
        this.storageKey = 'selectedMapMarkerTypes';
        this.subs = [];
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    ngOnInit() {
        this.subs.push(this._storageProvider.load(this.storageKey, Object.keys(_map_marker_type_enum__WEBPACK_IMPORTED_MODULE_1__["MapMarkerType"]).map(k => _map_marker_type_enum__WEBPACK_IMPORTED_MODULE_1__["MapMarkerType"][k]))
            .subscribe(types => this.selectedMapMarkerTypes = types));
        this.mapMarkerFilterChanged();
    }
    mapMarkerFilterChanged() {
        this._mapMarkerFilterController.emit(this.selectedMapMarkerTypes);
        this._storageProvider.store(this.storageKey, this.selectedMapMarkerTypes);
    }
    selectAll() {
        this.selectedMapMarkerTypes = this.mapMarkerTypes;
        this.mapMarkerFilterChanged();
    }
    selectNone() {
        this.selectedMapMarkerTypes = [];
        this.mapMarkerFilterChanged();
    }
    selectInvert() {
        const selection = [];
        for (const type of this.mapMarkerTypes) {
            if (this.selectedMapMarkerTypes.indexOf(type) >= 0) {
                continue;
            }
            selection.push(type);
        }
        this.selectedMapMarkerTypes = selection;
        this.mapMarkerFilterChanged();
    }
}
MapMarkerFilterComponent.ɵfac = function MapMarkerFilterComponent_Factory(t) { return new (t || MapMarkerFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_kv_storage_local_storage_provider__WEBPACK_IMPORTED_MODULE_2__["LocalStorageProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_marker_filter_controller__WEBPACK_IMPORTED_MODULE_3__["MapMarkerFilterController"])); };
MapMarkerFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapMarkerFilterComponent, selectors: [["app-map-marker-filter"]], inputs: { selectedMapMarkerTypes: "selectedMapMarkerTypes" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 2, consts: [[1, "filter__button-container"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matListAvatar", "", 1, "no-select", 3, "src"], [1, "no-select"]], template: function MapMarkerFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapMarkerFilterComponent_Template_button_click_2_listener() { return ctx.selectAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapMarkerFilterComponent_Template_button_click_5_listener() { return ctx.selectNone(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapMarkerFilterComponent_Template_button_click_8_listener() { return ctx.selectInvert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Invert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-selection-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MapMarkerFilterComponent_Template_mat_selection_list_ngModelChange_10_listener($event) { return ctx.selectedMapMarkerTypes = $event; })("ngModelChange", function MapMarkerFilterComponent_Template_mat_selection_list_ngModelChange_10_listener() { return ctx.mapMarkerFilterChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MapMarkerFilterComponent_mat_list_option_11_Template, 4, 3, "mat-list-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedMapMarkerTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mapMarkerTypes);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatSelectionList"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListOption"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListAvatarCssMatStyler"]], styles: [".filter__button-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n.filter__button-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 33.3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLW1hcmtlci1maWx0ZXIvbWFwLW1hcmtlci1maWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQUU7RUFDRSxZQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9tYXAtbWFya2VyLWZpbHRlci9tYXAtbWFya2VyLWZpbHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXJfX2J1dHRvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGRpdiB7XHJcbiAgICB3aWR0aDogMzMuMyU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapMarkerFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map-marker-filter',
                templateUrl: './map-marker-filter.component.html',
                styleUrls: ['./map-marker-filter.component.scss']
            }]
    }], function () { return [{ type: _kv_storage_local_storage_provider__WEBPACK_IMPORTED_MODULE_2__["LocalStorageProvider"] }, { type: _map_marker_filter_controller__WEBPACK_IMPORTED_MODULE_3__["MapMarkerFilterController"] }]; }, { selectedMapMarkerTypes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "qjCw":
/*!******************************************!*\
  !*** ./src/assets/data/map-markers.json ***!
  \******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"910cc6ca-7c33-ec65-a80c-34054d775fc8\",\"origin\":{\"x\":3452,\"y\":2229},\"type\":\"Wolf\",\"payload\":null,\"payloadId\":null},{\"id\":\"0783cc55-7f89-48fb-2c31-70dc838c7ae2\",\"origin\":{\"x\":3787,\"y\":3809},\"type\":\"Wisent\",\"payload\":null,\"payloadId\":null},{\"id\":\"03613d4d-f822-3022-95db-fad061144f8a\",\"origin\":{\"x\":3351,\"y\":3734},\"type\":\"Boar\",\"payload\":null,\"payloadId\":null},{\"id\":\"3db6af0a-77c6-d8c9-6a93-afc7e2de3690\",\"origin\":{\"x\":3908,\"y\":3515},\"type\":\"Buck\",\"payload\":null,\"payloadId\":null},{\"id\":\"209d676a-b700-042d-28c7-102eb91294f4\",\"origin\":{\"x\":3591,\"y\":3539},\"type\":\"Doe\",\"payload\":null,\"payloadId\":null},{\"id\":\"e6b5a2d6-3443-4a96-c6ce-586e18ba8ecf\",\"origin\":{\"x\":4253,\"y\":3572},\"type\":\"Rabbit\",\"payload\":null,\"payloadId\":null},{\"id\":\"8b807db3-f1cd-18be-0f79-8929821c9feb\",\"origin\":{\"x\":3945,\"y\":4268},\"type\":\"Wolf\",\"payload\":null,\"payloadId\":null},{\"id\":\"f0377448-4bc4-76e9-8b09-589defd33729\",\"origin\":{\"x\":4603,\"y\":4758},\"type\":\"Bear\",\"payload\":null,\"payloadId\":null},{\"id\":\"f057ee2e-2763-9496-274d-744a040b69e0\",\"origin\":{\"x\":4540,\"y\":4770},\"type\":\"Cave\",\"payload\":null,\"payloadId\":null},{\"id\":\"46c45b68-fe99-6e31-d9c4-c9946c781ef8\",\"origin\":{\"x\":4649,\"y\":3609},\"type\":\"Clay Deposit\",\"payload\":null,\"payloadId\":null},{\"id\":\"c7949537-54bd-594e-a017-f3a558717a3c\",\"origin\":{\"x\":4862,\"y\":4443},\"type\":\"Buck\",\"payload\":null,\"payloadId\":null},{\"id\":\"0c065fe5-24e4-a4eb-e3e7-b9edadf2c5e5\",\"origin\":{\"x\":4887,\"y\":4454},\"type\":\"Doe\",\"payload\":null,\"payloadId\":null},{\"id\":\"16338f58-1224-3791-9804-93c270e12086\",\"origin\":{\"x\":5049,\"y\":3790},\"type\":\"City\",\"payload\":null,\"payloadId\":\"c60c7f48-a3bf-4c15-8b34-0843217b25bf\"},{\"id\":\"0eabdf3e-139a-18c8-5e19-abc2ef3b030c\",\"origin\":{\"x\":5135,\"y\":3334},\"type\":\"City\",\"payload\":null,\"payloadId\":\"493b9fc6-b89a-4ce7-9fb3-ab23eb3246b2\"},{\"id\":\"1778110a-6e04-a6b1-5530-d45fb7a8d453\",\"origin\":{\"x\":4446,\"y\":2431},\"type\":\"City\",\"payload\":null,\"payloadId\":\"52393950-1c4c-49c0-8bc2-629ae87d0a28\"},{\"id\":\"41cb2e0f-2cf3-9f4a-16b2-afaad2b960e3\",\"origin\":{\"x\":3848,\"y\":2345},\"type\":\"City\",\"payload\":null,\"payloadId\":\"6e8b3e82-3216-40b1-aa69-0f51364adf98\"},{\"id\":\"a46ebbe9-6df6-1490-862d-223554a5594b\",\"origin\":{\"x\":2427,\"y\":2513},\"type\":\"City\",\"payload\":null,\"payloadId\":\"1f5776f8-6c9a-43db-92a2-de1fd63c4111\"},{\"id\":\"1ba3d4b1-c482-f004-cf99-53043fc55478\",\"origin\":{\"x\":2190,\"y\":4220},\"type\":\"City\",\"payload\":null,\"payloadId\":\"5d0540f5-c558-4e13-9b19-b6d89aa68161\"},{\"id\":\"0a9160eb-44c8-8540-427c-f72e6c3b5dac\",\"origin\":{\"x\":3131,\"y\":3728},\"type\":\"City\",\"payload\":null,\"payloadId\":\"c94d0e52-fe5e-4680-b33a-47d171157ab0\"},{\"id\":\"fb58d9a8-37c3-e3b2-27ba-5d2635dffaad\",\"origin\":{\"x\":3172,\"y\":5701},\"type\":\"City\",\"payload\":null,\"payloadId\":\"4d881a69-e7b0-48f9-9ab9-878f2af0038a\"},{\"id\":\"ab6730d6-cf25-a0d8-3f0a-dcf47e270e77\",\"origin\":{\"x\":5093,\"y\":5577},\"type\":\"City\",\"payload\":null,\"payloadId\":\"5610feeb-bd1f-4518-a5a6-32af7a778a67\"},{\"id\":\"a1f68ee8-6263-854f-9cdb-3b2cfd2e85a2\",\"origin\":{\"x\":5407,\"y\":2370},\"type\":\"Boar\",\"payload\":null,\"payloadId\":null},{\"id\":\"8341289a-1260-72f4-8cab-e0dfd0846776\",\"origin\":{\"x\":6111,\"y\":2293},\"type\":\"Clay Deposit\",\"payload\":null,\"payloadId\":null},{\"id\":\"5c5e2234-aef9-a3a1-ed28-b8612fd28b9c\",\"origin\":{\"x\":5914,\"y\":2127},\"type\":\"Doe\",\"payload\":null,\"payloadId\":null},{\"id\":\"3f9f2cac-710a-e3f7-7ac3-5e3c2b84bd32\",\"origin\":{\"x\":5570,\"y\":2021},\"type\":\"Bear\",\"payload\":null,\"payloadId\":null},{\"id\":\"1b68fc83-bcf5-5765-9a3a-0a25fa14e3f3\",\"origin\":{\"x\":4564,\"y\":2008},\"type\":\"Wolf\",\"payload\":null,\"payloadId\":null},{\"id\":\"fb1d4f1d-24a8-f37a-e670-4586294bf5d2\",\"origin\":{\"x\":5996,\"y\":2848},\"type\":\"Wisent\",\"payload\":null,\"payloadId\":null},{\"id\":\"92e88b87-ef70-472e-9bb5-4f4df7bf1551\",\"origin\":{\"x\":5487,\"y\":2911},\"type\":\"Wolf\",\"payload\":null,\"payloadId\":null},{\"id\":\"e6a7742b-c259-3d11-e92a-cdbe50c1d803\",\"origin\":{\"x\":4951,\"y\":2772},\"type\":\"Buck\",\"payload\":null,\"payloadId\":null},{\"id\":\"0ccb55f8-7763-a3b9-b726-636cc95944c0\",\"origin\":{\"x\":4291,\"y\":2973},\"type\":\"Rabbit\",\"payload\":null,\"payloadId\":null},{\"id\":\"0d997eb3-c7e2-530d-9f10-ac13252968af\",\"origin\":{\"x\":4091,\"y\":2705},\"type\":\"Boar\",\"payload\":null,\"payloadId\":null},{\"id\":\"dc510f2a-5afd-4281-a8da-3b2dd039cd43\",\"origin\":{\"x\":3949,\"y\":3005},\"type\":\"Fox\",\"payload\":null,\"payloadId\":null},{\"id\":\"e0c45e56-77d3-1d49-2998-18ba8c08c6e5\",\"origin\":{\"x\":3783,\"y\":2918},\"type\":\"Clay Deposit\",\"payload\":null,\"payloadId\":null},{\"id\":\"8f6d0087-54b3-fb6a-92df-dff9c397d4c7\",\"origin\":{\"x\":3598,\"y\":2885},\"type\":\"Wisent\",\"payload\":null,\"payloadId\":null},{\"id\":\"385377bb-0153-e896-9ef5-7b48019dfa84\",\"origin\":{\"x\":4177,\"y\":2015},\"type\":\"Rabbit\",\"payload\":null,\"payloadId\":null},{\"id\":\"a25681c9-7e54-03c3-c8f1-55bcc0da79d1\",\"origin\":{\"x\":4086,\"y\":1714},\"type\":\"Bear\",\"payload\":null,\"payloadId\":null},{\"id\":\"1273dbc4-ee08-162e-77a2-ca8c3f9a2ab0\",\"origin\":{\"x\":3880,\"y\":2172},\"type\":\"Cave\",\"payload\":null,\"payloadId\":null},{\"id\":\"d82c6649-f495-977d-1b41-1246dae945a1\",\"origin\":{\"x\":3159,\"y\":2255},\"type\":\"City\",\"payload\":null,\"payloadId\":\"9920ed4a-8bf7-4174-9456-ce618129f39d\"},{\"id\":\"52aa1b47-8bfd-69f4-e0d1-6ef863903b76\",\"origin\":{\"x\":5705,\"y\":2501},\"type\":\"City\",\"payload\":null,\"payloadId\":\"9a4b1c3a-0abb-44f8-b3b8-be56e7bec3c5\"},{\"id\":\"1fa45ab1-bd62-32b6-87d9-aede4a3f898b\",\"origin\":{\"x\":2919,\"y\":1870},\"type\":\"Buck\",\"payload\":null,\"payloadId\":null},{\"id\":\"a85c9799-62f2-29b1-2684-68e6fcf461df\",\"origin\":{\"x\":2332,\"y\":1854},\"type\":\"Rabbit\",\"payload\":null,\"payloadId\":null},{\"id\":\"6755072b-bab6-0c73-550a-09238f7894b9\",\"origin\":{\"x\":2332,\"y\":2127},\"type\":\"Fox\",\"payload\":null,\"payloadId\":null},{\"id\":\"e47655e5-dbd8-5750-5203-8285a907e781\",\"origin\":{\"x\":2801,\"y\":2407},\"type\":\"Clay Deposit\",\"payload\":null,\"payloadId\":null},{\"id\":\"eb9d9ea3-2c6f-0e58-4f5e-8fe633c38dc4\",\"origin\":{\"x\":2769,\"y\":2774},\"type\":\"Wolf\",\"payload\":null,\"payloadId\":null},{\"id\":\"a397ac51-c4a0-0f15-0df7-54eb8a663b92\",\"origin\":{\"x\":2345,\"y\":2940},\"type\":\"Doe\",\"payload\":null,\"payloadId\":null},{\"id\":\"778496f1-aaf3-e7f3-bd29-d8798fb216e1\",\"origin\":{\"x\":3028,\"y\":3036},\"type\":\"Rabbit\",\"payload\":null,\"payloadId\":null},{\"id\":\"b9ccb3dc-7abd-d14b-ab6e-aabad04647f2\",\"origin\":{\"x\":3071,\"y\":3429},\"type\":\"Fox\",\"payload\":null,\"payloadId\":null},{\"id\":\"6c495026-e8ec-f8c9-3ebf-16bfa094ea10\",\"origin\":{\"x\":4113,\"y\":3818},\"type\":\"Fox\",\"payload\":null,\"payloadId\":null},{\"id\":\"fdf885c7-408f-5b58-e2cb-5c756ee66596\",\"origin\":{\"x\":4095,\"y\":4402},\"type\":\"Wisent\",\"payload\":null,\"payloadId\":null},{\"id\":\"10c36c75-c7ec-a953-ab39-12a3eb1a4419\",\"origin\":{\"x\":3566,\"y\":4553},\"type\":\"Buck\",\"payload\":null,\"payloadId\":null},{\"id\":\"7e506421-5d39-a302-ce21-815b48cdf2f8\",\"origin\":{\"x\":3854,\"y\":4676},\"type\":\"Rabbit\",\"payload\":null,\"payloadId\":null},{\"id\":\"98e568b5-3a53-4ffd-50d7-bfab750ddd80\",\"origin\":{\"x\":2132,\"y\":4809},\"type\":\"Cave\",\"payload\":null,\"payloadId\":null},{\"id\":\"f17e4382-f489-c855-1e65-9b587e077f43\",\"origin\":{\"x\":2019,\"y\":4873},\"type\":\"Bear\",\"payload\":null,\"payloadId\":null},{\"id\":\"4185eab4-7e03-7e3f-7894-18c360807a83\",\"origin\":{\"x\":2039,\"y\":4694},\"type\":\"Buck\",\"payload\":null,\"payloadId\":null},{\"id\":\"45cdb8f3-b565-b817-45c4-069c4f1134f4\",\"origin\":{\"x\":2012,\"y\":5146},\"type\":\"Boar\",\"payload\":null,\"payloadId\":null},{\"id\":\"fde83386-edda-21e9-2040-2586fa4baa43\",\"origin\":{\"x\":2474,\"y\":5791},\"type\":\"Wisent\",\"payload\":null,\"payloadId\":null},{\"id\":\"f826917a-5f1e-71ef-1c57-abc6c72269d7\",\"origin\":{\"x\":2180,\"y\":6118},\"type\":\"Wolf\",\"payload\":null,\"payloadId\":null},{\"id\":\"4dd7ff47-75bc-2c32-c9e0-63e9444022f4\",\"origin\":{\"x\":3111,\"y\":6160},\"type\":\"Buck\",\"payload\":null,\"payloadId\":null},{\"id\":\"05b7a4cd-6ffa-fd4e-82cd-6cd65fc83aa2\",\"origin\":{\"x\":3960,\"y\":5644},\"type\":\"Wolf\",\"payload\":null,\"payloadId\":null},{\"id\":\"0f146f87-7a3e-1f20-e4dd-95e5b840c80e\",\"origin\":{\"x\":3651,\"y\":6202},\"type\":\"Boar\",\"payload\":null,\"payloadId\":null},{\"id\":\"44e75574-d0ba-2f34-5d33-e7bcef98cb38\",\"origin\":{\"x\":3954,\"y\":6231},\"type\":\"Rabbit\",\"payload\":null,\"payloadId\":null},{\"id\":\"031e48d3-61ed-de85-0248-8bd20f19d318\",\"origin\":{\"x\":4587,\"y\":5396},\"type\":\"Fox\",\"payload\":null,\"payloadId\":null},{\"id\":\"02f914a1-77a1-ac46-d8cc-d2bdacc47d3b\",\"origin\":{\"x\":4840,\"y\":5224},\"type\":\"Wolf\",\"payload\":null,\"payloadId\":null},{\"id\":\"de3e8a2a-0c7d-b5a7-ce81-6d845ad418ce\",\"origin\":{\"x\":5164,\"y\":4848},\"type\":\"Wisent\",\"payload\":null,\"payloadId\":null},{\"id\":\"cd5dea4d-6db3-a6e0-5170-bae8867c519f\",\"origin\":{\"x\":5767,\"y\":5702},\"type\":\"Bear\",\"payload\":null,\"payloadId\":null},{\"id\":\"d86011ae-fa24-b075-8aa0-db2d40f854c4\",\"origin\":{\"x\":5995,\"y\":5623},\"type\":\"Cave\",\"payload\":null,\"payloadId\":null},{\"id\":\"01e6c53c-1efc-1e61-3811-e8b9b7eb6ca0\",\"origin\":{\"x\":5952,\"y\":5380},\"type\":\"Buck\",\"payload\":null,\"payloadId\":null},{\"id\":\"d7fc42bb-e9a5-8ac4-0c96-973c1459cb1a\",\"origin\":{\"x\":5775,\"y\":5082},\"type\":\"Wisent\",\"payload\":null,\"payloadId\":null},{\"id\":\"9de3a8a6-b106-ae29-9a99-e7928c55df02\",\"origin\":{\"x\":5480,\"y\":4989},\"type\":\"Boar\",\"payload\":null,\"payloadId\":null},{\"id\":\"20cc828d-9932-b408-67e9-dd4c288fd482\",\"origin\":{\"x\":5262,\"y\":5262},\"type\":\"Fox\",\"payload\":null,\"payloadId\":null},{\"id\":\"1a9036fb-d86c-1d8c-519b-ff16d65cec4a\",\"origin\":{\"x\":5510,\"y\":5208},\"type\":\"Clay Deposit\",\"payload\":null,\"payloadId\":null},{\"id\":\"17d820bb-a867-9722-9175-46f0606790d2\",\"origin\":{\"x\":5728,\"y\":4287},\"type\":\"Clay Deposit\",\"payload\":null,\"payloadId\":null},{\"id\":\"4ac757ec-1d67-a625-5745-d62076bbce92\",\"origin\":{\"x\":5558,\"y\":4117},\"type\":\"Fox\",\"payload\":null,\"payloadId\":null},{\"id\":\"58400a89-ec4a-1bf8-95be-5be7de45d934\",\"origin\":{\"x\":6011,\"y\":3970},\"type\":\"Buck\",\"payload\":null,\"payloadId\":null},{\"id\":\"e084e9e7-cffd-dc40-5a98-7c30f4f1adac\",\"origin\":{\"x\":5682,\"y\":3690},\"type\":\"Rabbit\",\"payload\":null,\"payloadId\":null},{\"id\":\"85dceb9f-c9b8-5143-7ed4-f3d5533a981e\",\"origin\":{\"x\":6365,\"y\":3860},\"type\":\"Wolf\",\"payload\":null,\"payloadId\":null},{\"id\":\"45ca5b22-5178-a595-2e41-e3775c6645ab\",\"origin\":{\"x\":6060,\"y\":4995},\"type\":\"Wolf\",\"payload\":null,\"payloadId\":null},{\"id\":\"004cd144-83db-9244-ef93-013c5841d6ec\",\"origin\":{\"x\":3512,\"y\":5539},\"type\":\"Cave\",\"payload\":null,\"payloadId\":null},{\"id\":\"76abc605-cf89-9b39-38f9-62e9b5f8eb9f\",\"origin\":{\"x\":2172,\"y\":3983},\"type\":\"Clay Deposit\",\"payload\":null,\"payloadId\":null},{\"id\":\"86e78dce-096a-2fec-7822-abdaca93c574\",\"origin\":{\"x\":2105,\"y\":3552},\"type\":\"Wolf\",\"payload\":null,\"payloadId\":null},{\"id\":\"2b42575b-ac9c-6f02-73e0-095c7e622fb3\",\"origin\":{\"x\":3077,\"y\":4305},\"type\":\"Clay Deposit\",\"payload\":null,\"payloadId\":null},{\"id\":\"d2d44737-4238-039e-86ae-fa343a657d01\",\"origin\":{\"x\":2794,\"y\":4187},\"type\":\"Rabbit\",\"payload\":null,\"payloadId\":null},{\"id\":\"6435dc76-03c3-2756-1c5a-60dd62131e0f\",\"origin\":{\"x\":2739,\"y\":4466},\"type\":\"Fox\",\"payload\":null,\"payloadId\":null},{\"id\":\"a603c2f1-c695-bdb6-c2e3-80041a7bc4ae\",\"origin\":{\"x\":3003,\"y\":4753},\"type\":\"Wisent\",\"payload\":null,\"payloadId\":null},{\"id\":\"18c04e57-7807-3bdb-9c2d-24bd2dfa9c24\",\"origin\":{\"x\":3314,\"y\":4411},\"type\":\"Fox\",\"payload\":null,\"payloadId\":null}]");

/***/ }),

/***/ "skpA":
/*!************************************************!*\
  !*** ./src/app/city-detail-dialog-provider.ts ***!
  \************************************************/
/*! exports provided: CityDetailDialogProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityDetailDialogProvider", function() { return CityDetailDialogProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _city_detail_city_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./city-detail/city-detail.component */ "MhYp");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _static_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./static-data */ "0Njw");





class CityDetailDialogProvider {
    constructor(_dialog, _personData, _itemData) {
        this._dialog = _dialog;
        this._personData = _personData;
        this._itemData = _itemData;
    }
    showCityDialog(city) {
        const persons = this._personData.getPersonsByCity(city);
        const dialogData = {
            city, persons,
        };
        this._dialog.open(_city_detail_city_detail_component__WEBPACK_IMPORTED_MODULE_1__["CityDetailComponent"], {
            data: dialogData,
        });
    }
}
CityDetailDialogProvider.ɵfac = function CityDetailDialogProvider_Factory(t) { return new (t || CityDetailDialogProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_static_data__WEBPACK_IMPORTED_MODULE_3__["PersonData"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_static_data__WEBPACK_IMPORTED_MODULE_3__["ItemData"])); };
CityDetailDialogProvider.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CityDetailDialogProvider, factory: CityDetailDialogProvider.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CityDetailDialogProvider, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _static_data__WEBPACK_IMPORTED_MODULE_3__["PersonData"] }, { type: _static_data__WEBPACK_IMPORTED_MODULE_3__["ItemData"] }]; }, null); })();


/***/ }),

/***/ "uYdk":
/*!******************************************************!*\
  !*** ./src/app/city-jumper/city-jumper.component.ts ***!
  \******************************************************/
/*! exports provided: CityJumperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityJumperComponent", function() { return CityJumperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _map_api_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map-api-provider */ "acz1");
/* harmony import */ var _static_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static-data */ "0Njw");
/* harmony import */ var _city_detail_dialog_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../city-detail-dialog-provider */ "skpA");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");










function CityJumperComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CityJumperComponent_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const marker_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onNavigateToCity(marker_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CityJumperComponent_a_3_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const marker_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onOpenCityDetail($event, marker_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "read_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const marker_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getCityName(marker_r1));
} }
class CityJumperComponent {
    constructor(_mapApiProvider, cityData, dialogProvider) {
        this._mapApiProvider = _mapApiProvider;
        this.cityData = cityData;
        this.dialogProvider = dialogProvider;
    }
    ngOnInit() {
    }
    getCityName(mapMarker) {
        var _a;
        return (_a = this.cityData.getCityBy(mapMarker)) === null || _a === void 0 ? void 0 : _a.name;
    }
    onNavigateToCity(mapMarker) {
        const width = window.innerWidth * 1.8;
        const height = window.innerHeight * 1.8;
        const rect = {
            x: mapMarker.origin.x - (width / 2),
            y: mapMarker.origin.y - (height / 2),
            width: width,
            height: height
        };
        console.log('jumping to', rect);
        this._mapApiProvider.navigateToRect(rect);
    }
    onOpenCityDetail(event, marker) {
        event.stopPropagation();
        this.dialogProvider.showCityDialog(this.cityData.getCityBy(marker));
    }
}
CityJumperComponent.ɵfac = function CityJumperComponent_Factory(t) { return new (t || CityJumperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_api_provider__WEBPACK_IMPORTED_MODULE_1__["MapApiProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_static_data__WEBPACK_IMPORTED_MODULE_2__["CityData"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_city_detail_dialog_provider__WEBPACK_IMPORTED_MODULE_3__["CityDetailDialogProvider"])); };
CityJumperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CityJumperComponent, selectors: [["app-city-jumper"]], inputs: { mapMarkers: "mapMarkers" }, decls: 4, vars: 1, consts: [["matSubheader", ""], ["mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-list-item", "", 3, "click"], ["matLine", ""], ["mat-icon-button", "", 3, "click"], [1, "mat-24"]], template: function CityJumperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select a city to jump to");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CityJumperComponent_a_3_Template, 6, 1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mapMarkers);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListSubheaderCssMatStyler"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatLine"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NpdHktanVtcGVyL2NpdHktanVtcGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CityJumperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-city-jumper',
                templateUrl: './city-jumper.component.html',
                styleUrls: ['./city-jumper.component.scss']
            }]
    }], function () { return [{ type: _map_api_provider__WEBPACK_IMPORTED_MODULE_1__["MapApiProvider"] }, { type: _static_data__WEBPACK_IMPORTED_MODULE_2__["CityData"] }, { type: _city_detail_dialog_provider__WEBPACK_IMPORTED_MODULE_3__["CityDetailDialogProvider"] }]; }, { mapMarkers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map