import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ascii',
  templateUrl: './ascii.component.html',
  styleUrls: ['./ascii.component.scss']
})
export class AsciiComponent implements OnChanges {

  @Input() percent!: number;
  @Input() characterCount = 20;
  @Input() character = '#'

  public loaded: string[] = []
  public loading: string[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['percent'] || changes['character'] || changes['characterCount']) {
      this.characterCount = this.characterCount > 100 ? 100 : this.characterCount; 
     this.generateAscii();
    }
  }
  public generateAscii() {
    this.loaded = [];
    this.loading = [];

    for (let i = 0; i < this.characterCount; i++) {
      if ((i * Math.floor(100 / this.characterCount)) < this.percent) {
        this.loaded.push(this.character);
      }
      else {
        this.loading.push(this.character)
      }
    }
  }
}
