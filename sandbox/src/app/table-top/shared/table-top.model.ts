
// DiceRoll is an interface with organized list of dice
// that can be used as an input or output
export interface DiceRoll {
    // list(s) of dice to roll, or a return list of rolled dice
    dice: Dice[];
    // bonus dice are extra dice that can be used to supersede  normal dice
    // if larger / smaller
    bonusDice?: Dice[];
    // penalty dice are extra dice that can be used to supersede  normal dice
    // if larger / smaller
    penaltyDice?: Dice[];
}


// Dice is an interface that holds the quantity of faces on the dice
// and the amount it rolled, which can be undefined if not rolled
export interface Dice {
    sides: number;
    roll?: number;
    leadingZero?: boolean;
    startAtOne?: boolean;
    delay?: number;
}