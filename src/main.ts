import * as crypto from 'crypto';

export const squirrelList = [
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/1.jpeg',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/1.jpeg',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/10.jpg',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/11.jpg',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/12.jpg',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/13.jpg',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/14.jpg',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/15.jpg',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/16.jpg',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/17.jpg',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/18.jpg',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/19.jpg',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/2.jpg',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/20.jpg',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/21.jpg',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/22.jpg',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/23.jpg',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/24.jpg',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/25.png',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/26.jpg',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/27.jpg',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/28.jpg',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/3.jpg',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/4.jpg',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/5.png',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/6.jpg',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/7.gif',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/8.png',
  'https://raw.githubusercontent.com/csprance/gimme-squirrels/master/src/images/9.jpg'
];
/**
 * Get a single squirrel
 * @returns {string}
 */
export const single = (): string =>
  squirrelList[cryptoRandomNumber(0, squirrelList.length)];

/**
 * Get a number of squirrels in an Array (may contain duplicates)
 * @param {number} amount
 * @returns {string[]}
 */
export const many = (amount: number = 5): string[] =>
  Array(amount)
    .fill(' ')
    .map(single);

/**
 * Generating random numbers in specific range using crypto.randomBytes from crypto library
 *  Maximum available range is 281474976710655 or 256^6-1
 *  Maximum number for range must be equal or less than Number.MAX_SAFE_INTEGER (usually 9007199254740991)
 *  Usage examples:
 *  cryptoRandomNumber(0, 350);
 *  cryptoRandomNumber(556, 1250425);
 *  cryptoRandomNumber(0, 281474976710655);
 *  cryptoRandomNumber((Number.MAX_SAFE_INTEGER-281474976710655), Number.MAX_SAFE_INTEGER);
 * @param {number} minimum
 * @param {number} maximum
 * @returns {number}
 */
function cryptoRandomNumber(minimum: number, maximum: number): number {
  const distance = maximum - minimum;
  if (minimum >= maximum) {
    return 0;
  } else if (distance > 281474976710655) {
    return 0;
  } else if (maximum > Number.MAX_SAFE_INTEGER) {
    return 0;
  } else {
    const maxBytes = 6;
    const maxDec = 281474976710656;
    const randBytes = parseInt(
      crypto.randomBytes(maxBytes).toString('hex'),
      16
    );
    let result = Math.floor(
      randBytes / maxDec * (maximum - minimum + 1) + minimum
    );
    if (result > maximum) {
      result = maximum;
    }

    return result;
  }
}
