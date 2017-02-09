import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DataV} from "../../service/DataV";

/*
  Generated class for the SB page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sb',
  templateUrl: 'sb.html'
})
export class SBPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public sd:DataV) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SBPage');
  }

}
