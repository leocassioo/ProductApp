import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

   baseUri: string;

  constructor(public http: Http) {
    this.baseUri = 'https://product-api-leocassioo.c9users.io/api/category';
  }

  findAll() {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUri)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

     delete(id) {
     //console.log('category-service');
      return new Promise((resolve, reject) => {
        this.http.delete(this.baseUri + '/' + id)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
      });
    }

}
