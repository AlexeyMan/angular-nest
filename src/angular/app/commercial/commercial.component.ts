import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Autoplay, Pagination, Navigation, EffectCreative } from "swiper";

SwiperCore.use([Autoplay, Pagination, Navigation, EffectCreative]);

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./commercial.component.scss']
})
export class CommercialComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  constructor() { }

  ngOnInit(): void {
  }
  // slideNext(){
  //   this.swiper.swiperRef.slideNext(100);
  // }
  // slidePrev(){
  //   this.swiper.swiperRef.slidePrev(100);
  // }
}
