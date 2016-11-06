import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
// import { ContactPage } from '../pages/contact/contact';
// import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
//mod
import { ProductPage } from '../pages/product/product';
import { CategoryPage } from '../pages/category/category';

// import { CategoryService } from '../providers/category-service/category-service';
// import { ProductService } from '../providers/product-service/product-service';

@NgModule({
  declarations: [
    MyApp,
     AboutPage,
    // ContactPage,
    // HomePage,
    TabsPage,
    ProductPage,
    CategoryPage
    // ProductService,
    // CategoryService
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
     AboutPage,
    // ContactPage,
    // HomePage,
    TabsPage,
    ProductPage,
    CategoryPage

    // ProductService,
    // CategoryService
  ],
  providers: []
})
export class AppModule {}
