import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {


  showImage = true
  ngOnInit() {
    this.typingFirstText();

  }

  typingFirstText() {
    new Typed('#typed', {
      strings: ['Hi, my name is Domi!', 'I am a Front End engineer.', 'Welcome to my website! :)'],
      typeSpeed: 25,
      backDelay: 1500,
      loop: true
    })

  }

}
