import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public quoteIndex = 0;
  public slides = [
    { content: 'No merit student should stop his/her education because of poor financial background.' },
    { content: 'Education is not preparation for life. Education is life itself. - John Dewey' },
    { content: 'No one has ever become poor by giving. - Anne Frank' },
  ]
  constructor() { }

  ngOnInit() {

  }

}
