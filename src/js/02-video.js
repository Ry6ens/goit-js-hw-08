import Vimeo from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  console.log(parseData.seconds);
};

const savedData = localStorage.getItem('videoplayer-current-time');
const parseData = JSON.parse(savedData);

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(parseData.seconds);
