import { Component } from '@angular/core';

// import { HomePage } from '../home/home';
 import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
//mod
import { ProductPage } from '../product/product';
import { CategoryPage } from '../category/category';
//import { CategoryService } from '../providers/category-serice/category-serice';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  // tab1Root: any = HomePage;
  // tab2Root: any = AboutPage;
  // tab3Root: any = ContactPage;
  //mod
  tab1Root: any = ProductPage;
  tab2Root: any = CategoryPage;
  tab3Root: any = AboutPage;

  constructor() {
  //  this.tab2Root = AboutPage;

  }
}
