import {Images} from '../assets';
import {GameCardInterface} from './interfaces';

export const games: GameCardInterface[] = [
  {id: 1, name: 'Spin the wheel', image: Images.wheel},
  {id: 2, name: 'Scratch & Win', image: Images.card_forground},
  {id: 3, name: 'Shake & Win', image: Images.shake},
  {id: 4, name: 'Lucky Box', image: Images.gift},
  {id: 5, name: 'Lucky Ball', image: Images.ball},
  {id: 6, name: 'Lucky Cards', image: Images.card},
  {id: 7, name: 'Lucky Dice', image: Images.dice1},
  {id: 8, name: 'Lucky Lots', image: Images.bowl},
];
