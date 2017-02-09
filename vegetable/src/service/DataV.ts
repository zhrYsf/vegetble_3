import {Injectable} from "@angular/core";
import {Veg} from "../model/veg";
@Injectable()

export class DataV {

  vegetableList:Veg[]=[];
  shoppingList:Veg[] = [];

  constructor() {
    this.vegetableList = [
      new Veg("tometo",34,"red","red"),
      new Veg("qweqwe",12,"blue","blue"),
      new Veg("qweqwe",34,"green","green"),
      new Veg("qweqwe",34,"black","black")
    ];
  }
  getVegetableList():Veg[]{return this.vegetableList}
  addToBag(v:Veg){this.shoppingList.push(v)}
  getShoppingBag(){return this.shoppingList}


}
