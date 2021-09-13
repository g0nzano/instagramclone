import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChildren('instaVideo') videos: QueryList<any>;
  feeds: any[] = [
    {
      id: 1, 
      logo: 'assets/imgs/logo.png', 
      username: 'Fabio Gonzalez', 
      location: 'Paraguay', 
      src: 'assets/videos/1.mp4',
      description: 'gente de calle',
      likes: 15
    },
    {
      id: 2, 
      logo: 'assets/imgs/logo.png', 
      username: 'Fabio Gonzalez', 
      location: 'Paraguay', 
      src: 'assets/imgs/posts/posts7.png',
      description: 'lenguajes de pogramacion',
      likes: 80,
      image: true
    },
    {
      id: 3, 
      logo: 'assets/imgs/logo.png', 
      username: 'Fabio Gonzalez', 
      location: 'Paraguay', 
      src: 'assets/videos/2.mp4',
      description: "bicicleta en playa",
      likes: 4
    },
    {
      id: 4, 
      logo: 'assets/imgs/logo.png', 
      username: 'Fabio Gonzalez', 
      location: 'Paraguay', 
      src: 'assets/videos/3.mp4',
      description: 'gato',
      likes: 56
    },
    {
      id: 5, 
      logo: 'assets/imgs/logo.png', 
      username: 'Fabio Gonzalez', 
      location: 'Paraguay', 
      src: 'assets/imgs/posts/posts4.png',
      description: 'forma distinata de hablar con el mundo y transmitir lo que a los demas',
      likes: 150,
      image: true
    },
    {
      id: 6, 
      logo: 'assets/imgs/logo.png', 
      username: 'Fabio Gonzalez', 
      location: 'Paraguay', 
      src: 'assets/imgs/posts/posts5.png',
      description: 'una de mis favoritas',
      likes: 200,
      image: true
    },
    {
      id: 7, 
      logo: 'assets/imgs/logo.png', 
      username: 'Fabio Gonzalez', 
      location: 'Paraguay', 
      src: 'assets/imgs/posts/posts6.png',
      description: 'banner estiloso',
      likes: 100,
      image: true
    }
  ];
  nowPlaying = null;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {    
    this.didScroll();
  }

  toggleWrap(feed) {
    feed.wrap = !feed.wrap;
  }

  isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  didScroll(event?) {
    console.log(event);
    if(this.nowPlaying && this.isElementInViewport(this.nowPlaying)) return;
    else if(this.nowPlaying && !this.isElementInViewport(this.nowPlaying)) {
      this.nowPlaying.pause();
      this.nowPlaying = null;
    }

    this.videos.forEach(player => {
      console.log('player', player);

      if(this.nowPlaying) return;

      const nativeElement = player.nativeElement;
      const inView = this.isElementInViewport(nativeElement);

      if(inView) {
        this.nowPlaying = nativeElement;
        this.nowPlaying.muted = true;
        this.nowPlaying.play();
      }
    });
  }

}