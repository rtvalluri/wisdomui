import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faDonate, faHandHoldingHeart, faHandsHelping, faSign } from '@fortawesome/free-solid-svg-icons';
import { carouselSlide } from '../shared/carousel/carousel.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  public quoteIndex = 0;
  public slides: carouselSlide[] = [
    { content: 'No merit student should stop his/her education because of poor financial background.' },
    { content: 'Education is not preparation for life. Education is life itself. - John Dewey' },
    { content: 'No one has ever become poor by giving. - Anne Frank' },
  ]
  public donateIcon;
  public nonProfitIcon;
  public helpIcon;
  public uniqueIcon;

  constructor() { }

  ngOnInit() {
    this.donateIcon = faDonate;
    this.nonProfitIcon = faHandHoldingHeart;
    this.helpIcon = faHandsHelping;
    this.uniqueIcon = faSign;
  }

}
