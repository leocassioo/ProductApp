import { Component } from '@angular/core';
import { NavController, ViewController, Platform, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-category-modal',
  templateUrl: 'category-modal.html'
})
export class CategoryModalPage {

	//character;

  constructor(

  	public navCtrl: NavController, 
  	public viewCtrl: ViewController, 
  	public platform: Platform, 
  	public params: NavParams

  	) {



  }

  // close(){
  // 	this.viewCtrl.dismiss();
  // }

}
