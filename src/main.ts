export const squirrelList = [
  'http://shipitsquirrel.github.io/images/ship%20it%20squirrel.png',
  'http://images.cheezburger.com/completestore/2011/11/2/aa83c0c4-2123-4bd3-8097-966c9461b30c.jpg',
  'http://images.cheezburger.com/completestore/2011/11/2/46e81db3-bead-4e2e-a157-8edd0339192f.jpg',
  'http://28.media.tumblr.com/tumblr_lybw63nzPp1r5bvcto1_500.jpg',
  'http://i.imgur.com/DPVM1.png',
  'http://d2f8dzk2mhcqts.cloudfront.net/0772_PEW_Roundup/09_Squirrel.jpg',
  'http://www.cybersalt.org/images/funnypictures/s/supersquirrel.jpg',
  'http://www.zmescience.com/wp-content/uploads/2010/09/squirrel.jpg',
  'http://img70.imageshack.us/img70/4853/cutesquirrels27rn9.jpg',
  'http://img70.imageshack.us/img70/9615/cutesquirrels15ac7.jpg',
  'https://dl.dropboxusercontent.com/u/602885/github/sniper-squirrel.jpg',
  'http://1.bp.blogspot.com/_v0neUj-VDa4/TFBEbqFQcII/AAAAAAAAFBU/E8kPNmF1h1E/s640/squirrelbacca-thumb.jpg',
  'https://dl.dropboxusercontent.com/u/602885/github/soldier-squirrel.jpg',
  'https://dl.dropboxusercontent.com/u/602885/github/squirrelmobster.jpeg'
];
export const single = (): string =>
  squirrelList[Math.floor(Math.random() * squirrelList.length)];
export const many = (amount: number = 5): string[] =>
  squirrelList[Math.floor(Math.random() * squirrelList.length)];

export default {
  many,
  single
};
