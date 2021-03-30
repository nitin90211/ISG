import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import * as firebase from 'firebase';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers : [DataService]
})
export class AppComponent implements OnInit{
  title = 'users-app';
  showUsers : boolean = true;

  constructor(
    public dataService : DataService,
    public authService : AuthService
    ){}

  ngOnInit(){
    firebase.default.initializeApp({
      apiKey: "AIzaSyCr_AM-hYxjMY5i3SMLXS6-0a0qe0wY1FU",
    authDomain: "isg-demo-9732f.firebaseapp.com"
    })
    // debugger;
  }

  onIncrement(){
    // debugger;
    this.dataService.counter++;
  }

}
