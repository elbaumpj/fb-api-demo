import { Component, OnInit } from '@angular/core';
import { FacebookServiceService } from '../facebook-service.service';

declare const FB: any;

@Component({
  selector: 'app-demo-buttons',
  templateUrl: './demo-buttons.component.html',
  styleUrls: ['./demo-buttons.component.css']
})
export class DemoButtonsComponent implements OnInit {

  name: any;
  data: any;
  picture: any;
  posts: any;

  constructor(private fb: FacebookServiceService) { }

  ngOnInit() {
  }

  listProfileInfo() {
    FB.api('/me?fields=id,name,first_name,picture.width(150).height(150)',
      (result) => {
        this.data = result;
        console.log(this.data);
        const { name, picture } = result;
        this.name = name;
        this.picture = picture;
      });
    FB.api('/me/feed',
      (result) => {
        this.posts = result.data;
        console.log(result);
      });
    }

}
