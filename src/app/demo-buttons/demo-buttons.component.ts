import { Component, OnInit } from '@angular/core';
import { FacebookServiceService } from '../facebook-service.service';

@Component({
  selector: 'app-demo-buttons',
  templateUrl: './demo-buttons.component.html',
  styleUrls: ['./demo-buttons.component.css']
})
export class DemoButtonsComponent implements OnInit {

  name: any;
  profPicUrl: any;

  constructor(private fb: FacebookServiceService) { }

  ngOnInit() {
  }

  listProfileInfo() {
    console.log('fired');
    console.log(this.fb.me().then((resp) => {
      // console.log(resp);
    }));
    }

}
