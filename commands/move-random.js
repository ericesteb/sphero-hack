'use strict';

module.exports = exports = (orb) => {
    // console.log('Command: move-random');
    orb.color('#00ffab');
    return setInterval(() => {
      var direction = Math.floor(Math.random() * 360);
      orb.roll(1000, direction);
      console.log(direction);
    }, 1000);
};
