import { Component } from '@angular/core';
import { NavController, AlertController, ModalController, ViewController } from 'ionic-angular';
import { CategoryService } from '../../providers/category-service';
import { CategoryModalPage } from '../category-modal/category-modal';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})

export class CategoryPage {

  categories: Array<any>;


  constructor(
    public navCtrl: NavController, 
    public categoryService: CategoryService, 
    public alertCtrl: AlertController, 
    public modalCtrl: ModalController, 
    public view: ViewController
    ) {
    
    this.findAll();

  }

   public findAll() {
    this.categoryService.findAll()
    .then((categories: Array<any>) => {
      this.categories = categories;

    }, (error) => {
      console.log('Erro ao listar categorias:',  error);
    })
  }

   removeCategory(category) {
    let alert = this.alertCtrl.create({
      title: 'Deletar Categoria',
      message: 'Deseja realmente deletar a categoria \'' + category.nome + '\'?',
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
              }
            }, (error) => {
              console.log('Erro ao deletar categoria ', error);
            });
          }
        }
      ]
    });

   alert.present();
 }

   addCategory() {
    this.navCtrl.push(CategoryModalPage);
   }

    doRefresh(refresher) {
    setTimeout(() => {
      this.findAll();
      refresher.complete();
    }, 2000);
  }

  updateCategory(category) {
      this.navCtrl.push(CategoryModalPage, { category: category });
  }



}