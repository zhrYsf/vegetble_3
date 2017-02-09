import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DataV} from "../../service/DataV";
import {Veg} from "../../model/veg";

/*
  Generated class for the VL page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-vl',
  templateUrl: 'vl.html'
})
export class VLPage {
  veglist:Veg[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public ds:DataV) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad VLPage');
    this.veglist = this.ds.getVegetableList();
  }

}
