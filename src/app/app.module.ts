import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PopoverComponent } from './popover/popover.component';
import { InputLocationComponent } from './input-location/input-location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MuxComponent } from './components/mux/mux.component';

@NgModule({
  declarations: [AppComponent, PopoverComponent, InputLocationComponent, MuxComponent],
  entryComponents: [PopoverComponent, InputLocationComponent, MuxComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
