import { Component, OnInit } from '@angular/core';
import { LatlngService } from 'src/app/latlng.service';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.page.html',
  styleUrls: ['./new-page.page.scss'],
})
export class NewPagePage implements OnInit {

  public _lat: number;
  public _lng: number;
  public mulX: boolean;
  public markers: any;

  constructor() {
    this._lat = LatlngService.latitude;
    this._lng = LatlngService.longitude;
    this.mulX = LatlngService.mulXVal;
    this.markers = LatlngService.mulX;
   }

  ngOnInit() { }

}
