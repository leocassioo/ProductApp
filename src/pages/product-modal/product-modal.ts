import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, AlertController} from 'ionic-angular';
import { ProductService } from '../../providers/product-service';
import { CategoryService } from '../../providers/category-service';

@Component({
  selector: 'page-product-modal',
  templateUrl: 'product-modal.html'
})
export class ProductModalPage {

	product: any;
	categories: Array<any>;

  constructor(
  	public navCtrl: NavController,
  	public viewCtrl: ViewController,
  	public params: NavParams,
  	public productService: ProductService,
  	public alertCtrl: AlertController,
  	public categoryService: CategoryService
  	) {

  		this.product = params.get('product') || {};

  		this.categoryService.findAll()
  		.then((categories: Array<any>) => {
  			this.categories = categories;

  		}, (error) => {
  			this.categories = [];
  			console.log('Erro ao buscar categorias', error);
  		});
  }

  
    close() {

    this.navCtrl.pop();

  }

    save() {
      
    if(this.product.id != undefined) {

      let alert = this.alertCtrl.create({
      title: 'Sucesso',
      message: 'Operacao realizada com sucesso! Por favor atualize a página com um simples deslizar para baixo.',
      buttons: [ 
      { text: 'Ok', 
      handler: (data) => {
         this.productService.update(this.product)
         .then((res) => {
        if(res){
          this.navCtrl.pop();
      }
    }, (error) => {
          console.log('Erro ao atualizar produto ', error);
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
         this.productService.insert(this.product)
         .then((res) => {
        if(res){
          this.navCtrl.pop();
      }
    }, (error) => {
          console.log('Erro ao cadastrar produto ', error);
        });
       } }
     ]
    })

    alert.present();

    }

  }
}
