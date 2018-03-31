import * as gimmeSquirrels from './src/main';

const squirrel = gimmeSquirrels.single();
const squirrelList = gimmeSquirrels.many(5);

// See a single squirrel
console.log(squirrel);

// Get a gaggle of squirrels
console.log(squirrelList);
