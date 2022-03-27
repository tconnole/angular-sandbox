import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-animations',
  templateUrl: './loading-animations.component.html',
  styleUrls: ['./loading-animations.component.scss']
})
export class LoadingAnimationsComponent implements OnInit {

  // ASCII
  public asciiPercent: number = 0;
  public asciiCharacter = '#';
  public asciiCharacterCount?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
