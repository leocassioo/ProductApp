import { Component } from '@angular/core';
import { NavController, AlertController, ModalController, ViewController } from 'ionic-angular';
import { ProductService } from '../../providers/product-service';
import { ProductModalPage } from '../product-modal/product-modal';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {

products: Array<any>;


  constructor(
    public navCtrl: NavController, 
    public productService: ProductService, 
    public alertCtrl: AlertController, 
    public modalCtrl: ModalController, 
    public view: ViewController
    ) {
    
    this.findAll();

  }

   public findAll() {
    this.productService.findAll()
    .then((products: Array<any>) => {
      this.products = products;

    }, (error) => {
      console.log('Erro ao listar produtos:',  error);
    })
  }

   removeProduct(product) {
    let alert = this.alertCtrl.create({
      title: 'Deletar Produto',
      message: 'Deseja realmente deletar o produto \'' + product.nome + '\'?',
      buttons: [
        {
          text: 'Cancelar',
        },
        {
          text: 'Deletar',
          handler: (data) => {
            this.productService.delete(product.id)
            .then((res) => {
              if(res){
                this.findAll();
              }
            }, (error) => {
              console.log('Erro ao deletar produto ', error);
            });
          }
        }
      ]
    });

   alert.present();
 }

   addProduct() {
    this.navCtrl.push(ProductModalPage);
   }

    doRefresh(refresher) {
    setTimeout(() => {
      this.findAll();
      refresher.complete();
    }, 2000);
  }

  updateProduct(product) {
      this.navCtrl.push(ProductModalPage, { product: Object.assign({}, product) });
  }



}