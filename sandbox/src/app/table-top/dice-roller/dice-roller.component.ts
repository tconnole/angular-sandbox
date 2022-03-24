import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Dice, DiceRoll } from '../shared/table-top.model';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.scss']
})
export class DiceRollerComponent implements OnInit {

  public roll: DiceRoll = {
    dice: [{
      sides: 6
    },
    {
      sides: 20
    }],
    bonusDice: [{
      sides: 6
    },
    {
      sides: 20
    }],
    penaltyDice: [{
      sides: 6
    },
    {
      sides: 20
    }],
  }

  constructor() { }

  ngOnInit(): void {
  }

  public rollDice() {
    const dice: Dice[] = [{
      sides: 6,
      delay: 2,
      
    },
    {
      sides: 20,
      delay: 2,
    },
    {
      sides: 20,
      delay: 2,
    }
  ];

  const bonus: Dice[] = [{
    sides: 6,
    delay: 1,
    
  },
  {
    sides: 20,
    delay: 1,
  },
];

const penalty: Dice[] = [{
    sides: 6,
    delay: 1.5,
  },
  {
    sides: 50,
    delay: 1.5,
  },
];
    this.roll.dice = dice;
    this.roll.bonusDice = bonus;
    this.roll.penaltyDice = penalty;
  }
}

// export interface Dice {
//   sides: number;
//   roll?: number;
//   leadingZero?: boolean;
//   startAtOne?: boolean;
//   delay?: 0 | 1 | 2;
// }
