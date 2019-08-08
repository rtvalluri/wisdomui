import { Component, Input, OnInit, OnDestroy, ViewEncapsulation } from "@angular/core";
import { carouselSlide } from './carousel.types';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit, OnDestroy {
    public slideIndex = 0;
    public carouselSlidesHtml: string = '';
    public showCarousel = false;

    private slidesLength = 0;
    private setIntervalId;

    @Input() slides: carouselSlide[] = [];

    ngOnInit() {
        this.loadCarousel();
    }

    public loadCarousel() {
        this.slidesLength = this.slides.length;
        this.showCarousel = true;
        this.setIntervalId = setInterval(() => {
            this.slideIndex = this.slideIndex === this.slidesLength ? 0 : ++this.slideIndex;
        }, 3000)
    }

    ngOnDestroy() {
        clearInterval(this.setIntervalId);
    }

}