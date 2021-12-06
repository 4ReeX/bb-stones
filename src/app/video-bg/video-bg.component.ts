import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-video-bg',
  templateUrl: './video-bg.component.pug',
  styleUrls: ['./video-bg.component.sass']
})

export class VideoBgComponent implements OnInit {
    public images = [
    {path: 'assets/images/content/1.jpg'},
    {path: 'assets/images/content/2.jpg'},
    {path: 'assets/images/content/3.jpg'},
    {path: 'assets/images/content/4.jpg'},
    {path: 'assets/images/content/5.jpg'},
    {path: 'assets/images/content/6.jpg'},
    {path: 'assets/images/content/7.jpg'},
    {path: 'assets/images/content/8.jpg'},
    {path: 'assets/images/content/9.jpg'},
    {path: 'assets/images/content/10.jpg'}
  ]
  ngOnInit(): void {
  }

  constructor() { }
}
