import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  
  slides = [
    { image: "../../../assets/images/female-friends-out-shopping-together.jpg", description: 'Slider image 1' },
    { image: "../../../assets/images/seasonal-sale-discounts-presents-purchase-visiting-boutiques-luxury.jpg", description: 'Slider image 2' },
    { image: "../../../assets/images/woman-holds-fashion-shopping-bag.jpg", description: 'Slider image 3' }
  ]
  currentIndex = 0;
  private slideInterval: any;

  ngOnInit() {
    this.startSlideShow();
  }

  ngOnDestroy() {
    this.stopSlideShow();
  }

  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.next();
    }, 5000);
  }

  stopSlideShow() {
    clearInterval(this.slideInterval);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

}
