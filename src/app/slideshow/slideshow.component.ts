import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['anonymus.jpg', 'binary-code.jpg', 'hacker.jpg'];
  headlines = [
    'bring engineering to the next level!',
    'born to code',
    'futuristic visions'
]
  currentImage = 0;
  showImage = true
  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(
        () => this.showImage = true
    , 10);
  }, 8000);
}
}
