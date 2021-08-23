import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  slideOpts = {};
  stories: any[] =[];
  buttonValue = 'grid';
  buttonItems:any[] = [];
  posts: any[] =[];

  constructor() { }

  ngOnInit() {
  
    this.stories = [
      { name: ''},
      { name:'trilla', src: 'assets/imgs/stories/img1.png'},
      { name:'family', src: 'assets/imgs/stories/img2.png'},
      { name:'campus', src: 'assets/imgs/stories/img3.png'},
      { name:'2020', src: 'assets/imgs/stories/img4.png'},
      { name:'2020', src: 'assets/imgs/stories/img5.png'}, 
      { name:'2020', src: 'assets/imgs/stories/img6.png'},
      { name:'2020', src: 'assets/imgs/stories/img7.png'},
    ];
    this.slideOpts = {
      slidesPerView: this.checkScreen(),
      slideShadows:true
    };
    this.buttonItems =[
      {value: 'grid', icon:'grid'},
      {value: 'reels', icon:'film'},
      {value: 'photos', icon:'images'},
    ];
    this.posts =[
      {id:1, url: 'assets/imgs/posts/posts1.png'},
      {id:2, url: 'assets/imgs/posts/posts2.png'},
      {id:3, url: 'assets/imgs/posts/posts3.png'},
      {id:4, url: 'assets/imgs/posts/posts4.png'},
      {id:5, url: 'assets/imgs/posts/posts5.png'},
      {id:6, url: 'assets/imgs/posts/posts6.png'},
      {id:7, url: 'assets/imgs/posts/posts7.png'},
      {id:8, url: 'assets/imgs/posts/posts8.png'},
      {id:9, url: 'assets/imgs/posts/posts9.png'},
      {id:10, url: 'assets/imgs/posts/posts10.png'},
      {id:11, url: 'assets/imgs/posts/posts11.png'},
      {id:12, url: 'assets/imgs/posts/posts12.png'},
    ]
  }

  checkScreen(){
    let innerWidth = window.innerWidth;
    console.log(innerWidth); 
    switch (true){
      case 340 > innerWidth:
      return 5.5;
      case 340 <= innerWidth && innerWidth <= 400:
        return 5.5;
        case 401 <= innerWidth && innerWidth <= 700:
          return 6.5;
          case 700 <= innerWidth && innerWidth <= 900:
          return 7.5;
          case 901 <= innerWidth:
            return 9.5;
    }

  }
  checkLength(val){
    let length = this.stories.length;
    return val < length ? val : length;
  }

  buttonsChanged(event){
    console.log(event.detail.value);
    this.buttonValue =event.detail.value;
  }

}
