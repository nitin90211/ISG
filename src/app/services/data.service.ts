import { Injectable } from '@angular/core';
import { USER_DATA } from '../data/mocks';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../model/user';
import { AuthService } from './auth.service';
import { map } from "rxjs/operators"
@Injectable()
export class DataService {

  counter : number = 0;
  private BASE_URL : string = "https://test-25eae.firebaseio.com/userdata.json";;

  constructor(
    private httpClient : HttpClient,
    private authService : AuthService
    ){}

  getUsersFromApi(){
    // return this.httpClient.get<User[]>(
    //   `${this.BASE_URL}?auth=${this.authService.getToken()}`
    //   );

    // return this.httpClient.get<User[]>(this.BASE_URL, {
    //   params : new HttpParams().set("auth", this.authService.getToken())
    // })

    return this.httpClient.get<User[]>(this.BASE_URL)
    // this.httpClient.get(this.BASE_URL)
    // .pipe(map(response => <User[]>response))
    // .subscribe(users =>{
    //   localStorage.setItem("users", JSON.stringify(users));
    // } )
  }

  createUser(){
    const body = {firstName : "Foo", lastName : "Bar", age: 32};
    this.httpClient.post(this.BASE_URL, body, {
      params : new HttpParams().set("auth", this.authService.getToken())
    })
      .subscribe(data => {
        console.log("[POST DATA]", data);
      })
  }

  getUsersfromJson(){
    return this.httpClient.get("./assets/data/user-data.json");
  }

  getUsers(){
    return USER_DATA;
  }

}
