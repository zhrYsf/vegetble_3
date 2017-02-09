import { Component } from '@angular/core';

import {VLPage} from "../vl/vl";
import {SBPage} from "../sb/sb";
import {VDPage} from "../vd/vd";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root:any = VLPage;
  tab2Root:any = VDPage;
  tab3Root:any = SBPage;



  constructor() {

  }
}
