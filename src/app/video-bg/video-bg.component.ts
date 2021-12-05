import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-video-bg',
  templateUrl: './video-bg.component.pug',
  styleUrls: ['./video-bg.component.sass']
})

export class VideoBgComponent implements OnInit {
    public images = [
    {path: 'assets/background/bg1.jpg'},
    {path: 'assets/background/bg1.jpg'},
    {path: 'assets/background/bg1.jpg'},
    {path: 'assets/background/bg1.jpg'},
    {path: 'assets/background/bg1.jpg'},
    {path: 'assets/background/bg1.jpg'},
    {path: 'assets/background/bg1.jpg'},
    {path: 'assets/background/bg1.jpg'},
    {path: 'assets/background/bg1.jpg'},
    {path: 'assets/background/bg1.jpg'},
    {path: 'assets/background/bg1.jpg'},
    {path: 'assets/background/bg1.jpg'},
    {path: 'assets/background/bg1.jpg'},
  ]
  ngOnInit(): void {
  }

  constructor() { }
}
