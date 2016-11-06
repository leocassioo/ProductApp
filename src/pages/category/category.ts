import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { CategoryService } from '../../providers/category-service';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {

  categories: Array<any>;


  constructor(public navCtrl: NavController, public categoryService: CategoryService, public alertCtrl: AlertController) {
    this.findAll();
  }

  findAll() {
    console.log('console findAll()');
    this.categoryService.findAll()
    .then((categories: Array<any>) => {
      this.categories = categories;

    }, (error) => {
      console.log('Erro ao listar categorias:',  error);
    })
  }

   removeCategory(category) {
     console.log('console removeCategory()');
    let prompt = this.alertCtrl.create({
      title: 'Deletar Categoria',
      message: 'Deseja realmente deletar a categoria?',
      buttons: [
        {
          text: 'Cancelar',
        },
        {
          text: 'Deletar',
          handler: (data) => {
            this.categoryService.delete(category.id)
            
            .then((res) => {
              if(res){
                this.findAll();
                //console.log('findAll do deletar');
              }
            }, (error) => {
              console.log('Erro ao deletar categoria ', error);
            });
          }
        }
      ]
    });

  // showAlert() {
  //  let alert = this.alertCtrl.create({
  //    title: 'New Friend!',
  //    subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
  //    buttons: ['OK']
  //  });
   prompt.present();
 }
}
