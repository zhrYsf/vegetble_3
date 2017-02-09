import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DataV} from "../../service/DataV";
import {Veg} from "../../model/veg";
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
