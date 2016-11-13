import { Component } from '@angular/core';
import { NavController, ViewController, Platform, NavParams, AlertController } from 'ionic-angular';
import { CategoryService } from '../../providers/category-service';
//import { CategoryPage } from '../category/category';

@Component({
  selector: 'page-category-modal',
  templateUrl: 'category-modal.html'
})
export class CategoryModalPage {

	category: any;


  constructor(
  	public navCtrl: NavController, 
  	public viewCtrl: ViewController, 
  	public platform: Platform, 
  	public params: NavParams,
    public categoryService: CategoryService,
    public alertCtrl: AlertController
   // public cat: CategoryPage
  	) {

    this.category = params.get('category') || {};
}

  close() {

    this.navCtrl.pop();

  }




  save() {
    if(this.category.id != undefined) {

      let alert = this.alertCtrl.create({
      title: 'Sucesso',
      message: 'Operacao realizada com sucesso! Por favor atualize a página com um simples deslizar para baixo.',
      buttons: [ 
      { text: 'Ok', 
      handler: (data) => {
         this.categoryService.update(this.category)
         .then((res) => {
        if(res){
          this.navCtrl.pop();
      }
    }, (error) => {
          console.log('Erro ao atualizar categoria ', error);
        });
       } }
     ]
    })

    alert.present();
    
    }

    else {

      let alert = this.alertCtrl.create({
      title: 'Sucesso',
      message: 'Operacao realizada com sucesso! Por favor atualize a página com um simples deslizar para baixo.',
      buttons: [ 
      { text: 'Ok', 
      handler: (data) => {
         this.categoryService.insert(this.category)
         .then((res) => {
        if(res){
          this.navCtrl.pop();
      }
    }, (error) => {
          console.log('Erro ao cadastrar categoria ', error);
        });
       } }
     ]
    })

    alert.present();

    }

  }
}
