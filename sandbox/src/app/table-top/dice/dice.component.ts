import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
// @ts-ignore
import { Dice } from '../shared/table-top.model';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnChanges {

  @Input() public dice?: Dice;

  @Output() public rollEvent = new EventEmitter();

  public rolled?: boolean;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dice']) {
      if(this.dice) {
        this.rollDice();
      }
    }
  }

  public async rollDice() {
    this.rolled = false;
    this.delay(this.dice?.delay ? (this.dice.delay * 1000) : 0).then(() => {
        if (this.dice ) {
          this.dice.roll = Math.floor(Math.random() * (this.dice?.sides ?? 0));
          this.rollEvent.emit(`${this.dice?.roll}`);
          this.rolled = true;
        }
      }
    );
  }

  private delay(ms: number) {
    return new Promise((done) => {
      setTimeout(() => {
        done(ms);
      }, ms);
    });
  }
}
