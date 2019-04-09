import { Component } from '@angular/core';
import { PopoverController, Events } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { LatlngService } from '../latlng.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public _lat: number;
  public _lng: number;
  
  static popover;

  constructor(public popoverController: PopoverController) {
    this._lat = LatlngService.latitude;
    this._lng = LatlngService.longitude;
   }

  async presentPopover(ev: any) {
    HomePage.popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true,
    });
    return await HomePage.popover.present();
  }

  static closePopover(){
    this.popover.dismiss();
  }
}
