import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { ProductPage } from '../pages/product/product';
import { CategoryPage } from '../pages/category/category';
import { CategoryModalPage } from '../pages/category-modal/category-modal';
import { ProductModalPage } from '../pages/product-modal/product-modal';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TabsPage,
    ProductPage,
    CategoryPage,
    CategoryModalPage,
    ProductModalPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TabsPage,
    ProductPage,
    CategoryPage,
    CategoryModalPage,
    ProductModalPage

  ],
  providers: []
})
export class AppModule {}
