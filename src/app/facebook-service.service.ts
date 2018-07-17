import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Rx';

declare const FB: any;

@Injectable()
export class FacebookServiceService {

  token: any;
  data: any;

  constructor() { }

  login() {
    FB.login((result: any) => {
      this.token = result;
      console.log(result);
    }, { scope: 'user_friends' });
  }

  me() {
    FB.api('/me?fields=id,name,first_name,gender,picture.width(150).height(150),age_range,friends',
      (result) => {
        this.data = result;
        console.log(this.data);
        // return this.data;
      });
      return this.data;
  //  fetch(FB.api('/me?fields=id,name,first_name,gender,picture.width(150).height(150),age_range,friends')).then((resp) => {
  //    console.log(resp);
  //  });
  }

}
