import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

  @ViewChild(IonSlides) ionSlides: IonSlides
  slideOpts: any = {};
  slides: any[] = [];
  activeTab = 0;
  activities: any[] = [];

  constructor() { }

  ngOnInit() {
    this.slides = [
      {id: 1, name: 'Todo'},
      {id: 2, name: 'Me Gustas', notifications: 32},
      {id: 3, name: 'Comentarios', notifications: 13},
      {id: 4, name: 'Menciones'},
    ];
    this.slideOpts = {    
      slidesPerView: this.checkScreen(),
      slideShadows: true
    };
    this.activities = [
      {id: 1, username: 'chillfilms', user_profile: 'assets/imgs/1.jpg', time: '1 min', activity: 'follow'},
      {id: 2, username: 'deadpool', user_profile: 'assets/imgs/4.jpg', time: '5 mins', activity: 'comment', comments: 'Bien, valoremos los pros y contras de ser superhéroe.', post: 'assets/imgs/5.jpg'},
      {id: 3, username: 'arañita', user_profile: 'assets/imgs/6.jpg', time: '1d', activity: 'follow'},
      {id: 4, username: 'deolinda', user_profile: 'assets/imgs/3.jpg', time: '1d', activity: 'follow'},
      {id: 5, username: 'codigo_verde', user_profile: 'assets/imgs/2.jpg', time: '5 mins', activity: 'comment', comments: '¿Has comprobado que no haya algún virus en tu sistema?.', post: 'assets/imgs/posts/posts10.png'},
      {id: 6, username: 'lentes', user_profile: 'assets/imgs/posts5.png', time: '3d', activity: 'follow'},
    ];
  }

  checkScreen() {
    let innerWidth = window.innerWidth;
    console.log(innerWidth);
    switch (true) {
      case 340 > innerWidth:
        return this.checkLength(3.6);
      case 340 <= innerWidth && innerWidth <= 400:
        return this.checkLength(3.6);
      case 401 <= innerWidth && innerWidth <= 700:
        return this.checkLength(4.6);
      case 701 <= innerWidth && innerWidth <= 900:
        return this.checkLength(5.6);
      case 901 <= innerWidth:
        return this.checkLength(6.6);
    }
  }

  checkLength(val) {
    let length = this.slides.length;
    return val < length ? val : length;
  }
  
  changeTab(index) {
    this.activeTab = index;
    this.ionSlides.slideTo(index);
  }

  likeComment(item) {
    item.like = !item?.like;
  }

}