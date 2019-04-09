import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InputLocationComponent } from '../input-location/input-location.component';
import { HomePage } from '../home/home.page';
import { MuxComponent } from '../components/mux/mux.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  static _modal: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async onClickReCenter() {
    PopoverComponent._modal = await this.modalController.create({
      component: InputLocationComponent,
    });
    HomePage.closePopover();
    return await PopoverComponent._modal.present();
  }

  async onClickMux() {
    PopoverComponent._modal = await this.modalController.create({
      component: MuxComponent,
    });
    HomePage.closePopover();
    return await PopoverComponent._modal.present();
  }

  static closeModal() {
    this._modal.dismiss();
  }

  
  
}
