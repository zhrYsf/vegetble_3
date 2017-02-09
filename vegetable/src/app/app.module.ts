import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import {VLPage} from "../pages/vl/vl";
import {SBPage} from "../pages/sb/sb";
import {VDPage} from "../pages/vd/vd";
import {DataV} from "../service/DataV";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    VLPage,
    SBPage,
    VDPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    VLPage,
    SBPage,
    VDPage


  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},DataV]
})
export class AppModule {}
