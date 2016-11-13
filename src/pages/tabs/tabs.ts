import { Component } from '@angular/core';
 import { AboutPage } from '../about/about';
import { ProductPage } from '../product/product';
import { CategoryPage } from '../category/category';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = ProductPage;
  tab2Root: any = CategoryPage;
  tab3Root: any = AboutPage;

  constructor() {

  }
}
