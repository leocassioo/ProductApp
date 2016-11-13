import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProductService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProductService {

   baseUri: string;

   constructor(public http: Http) {
    this.baseUri = 'https://product-api-leocassioo.c9users.io/api/product';
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
      return new Promise((resolve, reject) => {

        this.http.delete(this.baseUri+ '/' +id)
        
        .map(res => res.json())
        
        .subscribe(data => {

          resolve(data);
        }, error => {
          reject(error);
        });
      });
    }

    insert(product){
      let headers  = new Headers();
      headers.append('Content-Type', 'application/json')
      return new Promise((resolve, reject) => {

        this.http.post(this.baseUri, JSON.stringify(product), {headers: headers})
        
        .map(res => res.json())
        
        .subscribe(data => {

          resolve(data);
        }, error => {
          reject(error);
        });
      });
    }

    update(product){
       let headers  = new Headers();
      headers.append('Content-Type', 'application/json')
      return new Promise((resolve, reject) => {

        this.http.put(this.baseUri, JSON.stringify(product), {headers: headers})
        
        .map(res => res.json())
        
        .subscribe(data => {

          resolve(data);
        }, error => {
          reject(error);
        });
      });
    }

}
