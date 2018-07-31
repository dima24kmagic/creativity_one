import { createVerticalWord } from './src/js/vertical-word';
import { createTunnel } from './src/js/tunnel';

//Create Vertical Word
const verticalWord = document.querySelector('.vertical-word');
verticalWord.appendChild(createVerticalWord('Find out the solution'));

//Create Tunnel
const tunnel = document.querySelector('.challenge--tunnel');
tunnel.appendChild(createTunnel(5, 15));
