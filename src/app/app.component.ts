import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'wordfinder-app';
  storageUsername = 'wordfinder-username';
  storageApiKey = 'wordfinder-apikey';
  credentialForm;
  hasCredentials = false;
  currentUser:string;

  constructor(){
     this.credentialForm = new FormGroup({
       username: new FormControl(),
       password: new FormControl()
    });
  }

  ngOnInit() {
    let storedUsername = localStorage.getItem(this.storageUsername);
    let storedApiKey = localStorage.getItem(this.storageApiKey);
    if(storedUsername && storedApiKey) {
      this.SetUser(storedUsername, 'valid', true);
    }
  }
  
  public SaveCredentials(data){
    localStorage.setItem(this.storageUsername, data.username);
    localStorage.setItem(this.storageApiKey, window.btoa(data.username + ':' + data.password));
    this.currentUser = data.username;
    this.hasCredentials = true;
  }
  public AddCredentials(){
    this.SetUser('', '', false);
  }

  private SetUser(username:string, password:string, hasCredentials:boolean){
      this.credentialForm.controls['username'].setValue(username); 
      this.credentialForm.controls['password'].setValue(password); 
      this.currentUser = hasCredentials ? username: '';
      this.hasCredentials = hasCredentials;
      if(!hasCredentials){
        localStorage.removeItem(this.storageUsername);
        localStorage.removeItem(this.storageApiKey);
      }
  }
}
