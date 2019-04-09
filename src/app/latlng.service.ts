import { Injectable } from '@angular/core';
import { FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LatlngService {
  static mulXVal: boolean = false;

  constructor() { }

  public static lat: number = 18.838714;
  public static lng: number = 74.273620;
  public static mulX: any;

  static setLatLng( lat: number, lng: number ) {
    this.lat = lat;
    this.lng = lng;
  }

  static get latitude() {
    return LatlngService.lat;
  }

  static get longitude() {
    return LatlngService.lng;
  }

  static setMulX(mulX: any){
    this.mulX = mulX;
    this.mulXVal = true;
  }
}
